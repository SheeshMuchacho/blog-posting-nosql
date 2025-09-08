'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type Msg = {
  role: 'user' | 'bot';
  text: string;
  time: string;
};

type ChatbotProps = {
  endpoint?: string;
  defaultOpen?: boolean;
  storageKey?: string;
  greeting?: string;
};

const DEFAULT_STORAGE_KEY = 'acu-chat-history-per-tab-v1';

function nowHHMM() {
  try {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } catch {
    return '';
  }
}

function escapeHTML(s: string) {
  return s.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' } as const)[m]!);
}

/** Converts URLs/emails + \n to links and <br> safely */
function linkify(text = '') {
  const escaped = escapeHTML(text);
  let out = escaped.replace(/((https?:\/\/|www\.)[^\s<]+)/gi, (m) => {
    const url = /^https?:\/\//i.test(m) ? m : `http://${m}`;
    return `<a href="${url}" target="_blank" rel="nofollow noopener noreferrer">${m}</a>`;
  });
  out = out.replace(
    /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
    `<a href="mailto:$1">$1</a>`
  );
  return out.replace(/\n/g, '<br>');
}

export default function Chatbot({
  endpoint = 'https://staging.acumenintelligence.com/api/chat',
  defaultOpen = false,
  storageKey = DEFAULT_STORAGE_KEY,
  greeting = 'Hi, I’m Acumen chatbot, here to help you quickly find and summarize key info from Acumen Intelligence.',
}: ChatbotProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [history, setHistory] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);

  const messagesRef = useRef<HTMLDivElement | null>(null);
  const launcherRef = useRef<HTMLButtonElement | null>(null);
  const windowRef = useRef<HTMLElement | null>(null);
  const typingId = useRef<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // ---- storage helpers (sessionStorage per tab)
  const loadHistory = useCallback((): Msg[] => {
    if (typeof window === 'undefined') return [];
    try {
      return JSON.parse(sessionStorage.getItem(storageKey) || '[]') as Msg[];
    } catch {
      return [];
    }
  }, [storageKey]);

  const saveHistory = useCallback(
    (msgs: Msg[]) => {
      if (typeof window === 'undefined') return;
      sessionStorage.setItem(storageKey, JSON.stringify(msgs.slice(-200)));
    },
    [storageKey]
  );

  // ---- initial load
  useEffect(() => {
    const existing = loadHistory();
    if (existing.length > 0) {
      setHistory(existing);
    } else {
      const seed: Msg = { role: 'bot', text: greeting, time: nowHHMM() };
      setHistory([seed]);
      saveHistory([seed]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // persist whenever history changes
  useEffect(() => {
    if (history.length) saveHistory(history);
  }, [history, saveHistory]);

  // auto-scroll
  const scrollToBottom = useCallback(() => {
    const el = messagesRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history, open, scrollToBottom]);

  // outside click to close
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!open) return;
      const w = windowRef.current;
      const l = launcherRef.current;
      if (!w || !l) return;
      const target = e.target as Node;
      if (!w.contains(target) && !l.contains(target)) setOpen(false);
    }
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  // esc to close
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && open) setOpen(false);
      if (e.key === 'Enter' && !e.shiftKey && open) {
        const target = document.activeElement;
        if (target && target === textareaRef.current) {
          e.preventDefault();
          if (!sending) handleSubmit();
        }
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, sending]);

  const addTyping = useCallback(() => {
    // track existence by pushing a phantom item; render shows a dedicated typing row
    typingId.current = 'typing';
    setHistory((h) => [...h]); // state change to re-render
  }, []);

  const removeTyping = useCallback(() => {
    typingId.current = null;
    setHistory((h) => [...h]); // re-render
  }, []);

  const addMessage = useCallback((role: Msg['role'], text: string) => {
    const msg: Msg = { role, text, time: nowHHMM() };
    setHistory((h) => [...h, msg]);
  }, []);

  const askBackend = useCallback(
    async (userText: string) => {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ msg: userText }),
      });
      if (!res.ok) throw new Error('Network error');
      const txt = await res.text();
      return txt || '';
    },
    [endpoint]
  );

  async function handleSubmit() {
    const text = input.trim();
    if (!text || sending) return;

    setSending(true);
    setInput('');

    // user bubble + typing
    addMessage('user', text);
    addTyping();

    try {
      const reply = await askBackend(text);
      removeTyping();
      addMessage('bot', reply);
    } catch (err) {
      console.error(err);
      removeTyping();
      addMessage('bot', 'Oops, something went wrong. Please try again.');
    } finally {
      setSending(false);
      // refocus textarea for quick follow-ups
      requestAnimationFrame(() => textareaRef.current?.focus());
    }
  }

  const onTextareaInput = useCallback(
    (el: HTMLTextAreaElement | null) => {
      if (!el) return;
      textareaRef.current = el;
      const adjust = () => {
        el.style.height = '40px';
        el.style.height = Math.min(el.scrollHeight, 120) + 'px';
      };
      adjust();
      el.addEventListener('input', adjust);
      return () => el.removeEventListener('input', adjust);
    },
    []
  );

  const launcherAria = useMemo(() => String(open), [open]);

  return (
    <>
      {/* Launcher */}
      <button
        ref={launcherRef}
        className="chat-launcher"
        id="chatLauncher"
        aria-label="Open chat"
        aria-expanded={open}
        aria-controls="chatWindow"
        onClick={() => {
          setOpen(true);
          setTimeout(() => textareaRef.current?.focus(), 120);
        }}
        style={{ display: open ? 'none' : 'grid' }}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 0 1-3.53-.63L3 20l1.08-3.24A7.93 7.93 0 0 1 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="8.5" cy="12" r="1" fill="currentColor" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
          <circle cx="15.5" cy="12" r="1" fill="currentColor" />
        </svg>
      </button>

      {/* Window */}
      <section
        ref={windowRef as React.RefObject<HTMLElement>}
        className={`chat-window ${open ? 'open' : ''}`}
        id="chatWindow"
        role="dialog"
        aria-modal="true"
        aria-labelledby="chatTitle"
      >
        <header className="chat-header">
          <div className="chat-avatar" aria-hidden="true">
            A
          </div>
          <div>
            <div className="chat-title" id="chatTitle">
              Acumen chatbot
            </div>
          </div>
          <div className="chat-spacer" />
          <button
            className="icon-btn"
            id="minimizeBtn"
            title="Minimize"
            aria-label="Minimize chat"
            onClick={() => setOpen(false)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        <main className="chat-messages" id="chatMessages" tabIndex={0} aria-live="polite" aria-atomic={false} ref={messagesRef}>
          {/* render history */}
          {history.map((m, i) => (
            <div className={`msg ${m.role}`} key={i}>
              <div
                className={`bubble${m.role === 'user' ? ' fly-up' : ''}`}
                // safe because we escape+linkify
                dangerouslySetInnerHTML={{ __html: linkify(m.text) }}
              />
              <span className="timestamp">{m.time}</span>
            </div>
          ))}

          {/* typing indicator */}
          {typingId.current && (
            <div className="msg bot" id="typing">
              <div className="bubble">
                <span className="typing">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </span>
              </div>
            </div>
          )}
        </main>

        <form
          className="chat-input"
          id="chatForm"
          onSubmit={(e) => {
            e.preventDefault();
            if (!sending) handleSubmit();
          }}
          aria-busy={sending || undefined}
        >
          <label className="sr-only" htmlFor="chatText">
            Your message
          </label>
          <textarea
            id="chatText"
            placeholder="Type a message…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            ref={(el) => {
              // attach auto-resize listener
              if (!el) return;
              onTextareaInput(el);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                if (!sending) handleSubmit();
              }
            }}
          />
          <button type="submit" className="send-btn" id="sendBtn" disabled={sending || !input.trim()}>
            <img src="/icons/send.png" alt="Send" className="send-icon" />
            <span className="sr-only">Send</span>
          </button>
        </form>
      </section>
    </>
  );
}

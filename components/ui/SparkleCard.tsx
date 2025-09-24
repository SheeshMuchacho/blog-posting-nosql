"use client";

import Image from "next/image";
import { LazyMotion, m, domAnimation, useReducedMotion } from "framer-motion";
import React, { useCallback, useMemo, useRef, useState } from "react";

export type TiltShineCardProps = {
  src: string;
  alt: string;
  className?: string;
  cardClassName?: string;
  imageClassName?: string;
  maxWidth?: string;
  aspect?: `${number}/${number}`;
  sizes?: string;
  reduceMotion?: boolean;
  overlayOpacity?: number;
  ringColors?: [string, string, string];
  sparkleA?: string;
  sparkleB?: string;
};


export default function TiltShineCard({
  src,
  alt,
  className,
  cardClassName,
  imageClassName,
  maxWidth = "28rem",
  aspect = "4/3",
  sizes = "(max-width:1024px) 90vw, 40vw",
  reduceMotion,
  overlayOpacity = 0.1,
  ringColors = ["#60a5fa", "#a78bfa", "#60a5fa"],
  sparkleA = "#BFDBFE",
  sparkleB = "#E9D5FF",
}: TiltShineCardProps) {
  const prefersReduced = useReducedMotion();
  const reduce = reduceMotion ?? (prefersReduced ?? false);

  const ref = useRef<HTMLDivElement | null>(null);
  const [vars, setVars] = useState({ rx: 0, ry: 0, mx: 0, my: 0 });

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - r.left;
    const my = e.clientY - r.top;
    const px = mx / r.width - 0.5;
    const py = my / r.height - 0.5;
    const rx = (-py) * 20; // max 10deg
    const ry = px * 10;
    setVars({ rx, ry, mx, my });
  }, [reduce]);

  const onLeave = useCallback(() => setVars({ rx: 0, ry: 0, mx: 0, my: 0 }), []);

  const style = useMemo<React.CSSProperties>(() => ({
    transform: reduce ? undefined : `rotateX(${vars.rx}deg) rotateY(${vars.ry}deg)`,
    maxWidth,
  }), [vars, reduce, maxWidth]);

  const ringStyle = useMemo<React.CSSProperties>(() => ({
    background: `conic-gradient(at 50% 50%, ${ringColors[0]}, ${ringColors[1]}, ${ringColors[2]})`,
  }), [ringColors]);

  const sparkleAStyle = useMemo<React.CSSProperties>(() => ({
    background: `radial-gradient(closest-side, ${sparkleA}, transparent)`,
  }), [sparkleA]);

  const sparkleBStyle = useMemo<React.CSSProperties>(() => ({
    background: `radial-gradient(closest-side, ${sparkleB}, transparent)`,
  }), [sparkleB]);

  const overlayStyle = useMemo<React.CSSProperties>(() => ({
    backgroundColor: `rgba(0,0,0,${overlayOpacity})`,
  }), [overlayOpacity]);

  return (
    <LazyMotion features={domAnimation}>
      <div className={"relative " + (className ?? "")}>
        {/* Parallax sparkles (behind card) */}
        <m.div
          aria-hidden
          className="absolute -inset-10 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <m.div
            className="absolute left-6 top-4 w-24 h-24 rounded-full blur-2 opacity-60"
            style={sparkleAStyle}
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <m.div
            className="absolute right-10 bottom-0 w-28 h-28 rounded-full blur-2xl opacity-60"
            style={sparkleBStyle}
            animate={reduce ? undefined : { y: [0, 10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
        </m.div>

        {/* Card with glossy ring + shine */}
        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="relative w-full mx-auto will-change-transform transform-gpu"
          style={style}
        >
          {/* Gradient ring */}
          <div
            className="absolute -inset-[3px] rounded-3xl opacity-60 blur-[1.5px]"
            aria-hidden
            style={ringStyle}
          />

          {/* Card body */}
          <div className={"relative rounded-3xl overflow-hidden shadow-xl" + (cardClassName ?? "") }>
            <div className="relative" style={{ aspectRatio: aspect }}>
              <Image src={src} alt={alt} fill className={"object-cover select-none " + (imageClassName ?? "")} sizes={sizes} />
              <div className="absolute inset-0" style={overlayStyle} />
              {/* Shine tied to cursor */}
              {!reduce && (
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl mix-blend-soft-light"
                  style={{
                    background: `radial-gradient(600px circle at ${vars.mx}px ${vars.my}px, rgba(255,255,255,.35), transparent 40%)`,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}

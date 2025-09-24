"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaReddit,
  FaLinkedin,
  FaWhatsapp,
  FaTumblr,
  FaPinterest,
  FaVk,
  FaEnvelope,
} from "react-icons/fa";

interface SingleBlogPageProps {
  title: string;
  content: string;
  date: string;
  author?: string;
  authorImage?: string;
  featuredImage?: { source_url?: string; alt_text?: string };
}

export default function SingleBlogPage({ 
  title, 
  content, 
  date, 
  author = "Acumen Intelligence",
  authorImage = "/logo/ailogo.png",
  featuredImage,
}: SingleBlogPageProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const plainTitle = title.replace(/<[^>]+>/g, "");

  // Remove duplicate featured images from content
  let processedContent = content;
  if (featuredImage?.source_url) {
    const featuredImageRegex = new RegExp(
      `<img[^>]*src=["']${featuredImage.source_url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*>`,
      'gi'
    );
    processedContent = processedContent.replace(featuredImageRegex, '');
  }

  const encodedTitle = encodeURIComponent(plainTitle);
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedImage = encodeURIComponent(featuredImage?.source_url || "");

  const sharePlatforms = [
    { name: 'Facebook', icon: <FaFacebook />, color: '#1877F2', url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { name: 'Twitter', icon: <FaTwitter />, color: '#1DA1F2', url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}` },
    { name: 'Reddit', icon: <FaReddit />, color: '#FF4500', url: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}` },
    { name: 'LinkedIn', icon: <FaLinkedin />, color: '#0A66C2', url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}` },
    { name: 'WhatsApp', icon: <FaWhatsapp />, color: '#25D366', url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}` },
    { name: 'Tumblr', icon: <FaTumblr />, color: '#36465D', url: `https://www.tumblr.com/share/link?url=${encodedUrl}&name=${encodedTitle}` },
    { name: 'Pinterest', icon: <FaPinterest />, color: '#E60023', url: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImage}&description=${encodedTitle}` },
    { name: 'VK', icon: <FaVk />, color: '#4680C2', url: `http://vk.com/share.php?url=${encodedUrl}` },
    { name: 'Email', icon: <FaEnvelope />, color: '#777777', url: `mailto:?subject=${encodedTitle}&body=Check%20out%20this%20article:%20${encodedUrl}` },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-primary text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            
            {/* Author Section */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <img
                  src={authorImage}
                  alt={author}
                  className="w-16 h-16 rounded-full border-3 border-white/30 shadow-lg object-cover bg-white p-3"
                />
              </div>
              <div className="text-center">
                <p className="text-lg font-medium text-white/90">{author}</p>
                <p className="text-sm text-white/70">{formattedDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-16">
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto px-6 sm:px-8 pb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">

            {/* Featured Image */}
            {featuredImage?.source_url && (
              <div className="mb-12 rounded-xl overflow-hidden aspect-video shadow-lg">
                <Image
                  src={featuredImage.source_url}
                  alt={featuredImage.alt_text || plainTitle}
                  width={1100}
                  height={575}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            )}

            {/* Article Content */}
            <article 
              className="prose prose-lg max-w-none"
              style={{
                '--tw-prose-headings': '#144272',
                '--tw-prose-body': '#475569',
                '--tw-prose-links': '#2c74b3',
                '--tw-prose-bold': '#144272',
              } as React.CSSProperties}
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
            
            <style jsx>{`
              article :global(h1),
              article :global(h2), 
              article :global(h3),
              article :global(h4),
              article :global(h5),
              article :global(h6) {
                color: #144272 !important;
                font-weight: bold !important;
                line-height: 1.4 !important;
                margin-top: 2rem !important;
                margin-bottom: 1rem !important;
              }
              
              article :global(h1) {
                font-size: 1.875rem !important;
              }
              
              article :global(h2) {
                font-size: 1.5rem !important;
              }
              
              article :global(h3) {
                font-size: 1.25rem !important;
              }
              
              article :global(p) {
                color: #475569 !important;
                line-height: 1.7 !important;
                margin-bottom: 1.5rem !important;
                margin-top: 0 !important;
              }
              
              article :global(a) {
                color: #2c74b3 !important;
                text-decoration: none !important;
              }
              
              article :global(a:hover) {
                text-decoration: underline !important;
              }
              
              article :global(strong) {
                color: #144272 !important;
                font-weight: bold !important;
              }
              
              article :global(blockquote) {
                border-left: 4px solid #2c74b3 !important;
                background-color: #f8fafc !important;
                border-radius: 0 0.5rem 0.5rem 0 !important;
                padding: 1rem !important;
                margin: 1.5rem 0 !important;
              }
              
              article :global(ul),
              article :global(ol) {
                margin: 1.5rem 0 !important;
              }
              
              article :global(li) {
                margin: 0.5rem 0 !important;
              }
              
              article :global(figure) {
                margin-left: auto !important;
                margin-right: auto !important;
              }

              article :global(img) {
                border-radius: 0.75rem !important;
                box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
                margin: 0.5rem auto 2rem !important;
                display: block !important;
                max-width: 100% !important;
                height: auto !important;
                max-height: 500px !important;
                object-fit: cover !important;
              }
            `}</style>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-slate-600 font-medium text-lg">Share this article:</span>
                <div className="flex flex-wrap gap-3 justify-center">
                  {sharePlatforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Share on ${platform.name}`}
                      className="p-3 text-white rounded-full transition-transform hover:scale-110"
                      style={{ backgroundColor: platform.color }}
                    >
                      {React.cloneElement(platform.icon, { className: "w-5 h-5" })}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
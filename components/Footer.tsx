"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import { NAV_LINKS, SOCIAL_LINKS } from '@/constants';

// Find the services dropdown items for the footer
const servicesItems = NAV_LINKS.find(link => link.key === 'services')?.dropdown || [];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState("");
  const yearRef = useRef(new Date().getFullYear());

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      return;
    }
    
    // Reset error state
    setEmailError("");
    
    // Show success message
    setSubscribed(true);
    setEmail("");
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-white text-primary">
      {/* Main Footer Content */}
      <div className="max-container padding-container pb-12 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="flex flex-col">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/logo/logoblueT.png" 
                alt="logo" 
                width={120} 
                height={28} 
                className="object-contain" 
              />
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Acumen Intelligence gives a new meaning to the traditional marketing funnel. Our dynamic executions help B2B marketers generate and manage leads and drive sales.
            </p>
            <div className="flex gap-4 mt-auto">
              {SOCIAL_LINKS.map((social, index) => (
                <Link 
                  key={index} 
                  href={social.href} 
                  className="text-primary hover:text-secondary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <Image src={social.icon} alt={social.label} width={35} height={35} />
                </Link>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary">Our Services</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {servicesItems.map((service) => (
                <Link 
                  key={service.key} 
                  href={service.href} 
                  className="text-sm text-gray-600 hover:text-secondary transition-all py-1"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary">Subscribe to Our Newsletter</h4>
            <p className="text-sm text-gray-600 mb-4">
              Stay updated with our latest news, updates, and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError("");
                  }}
                  placeholder="Enter your email address"
                  className={`w-full px-4 py-3 rounded-lg border border-gray-300 text-text-dark text-[13px] focus:outline-none focus:ring-2 focus:ring-primary ${
                    emailError ? "border-2 border-red-500" : ""
                  }`}
                />
                {emailError && (
                  <p className="absolute -bottom-6 left-0 text-xs text-red-500">
                    {emailError}
                  </p>
                )}
              </div>
              <Button 
                type="button"
                title="Subscribe" 
                className="btn btn-primary px-6 py-3 rounded-lg" 
              />
            </form>
            {subscribed && (
              <p className="text-sm mt-3 text-green-600 transition-opacity duration-300">
                Thank you for subscribing to our newsletter!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-100 py-5">
        <div className="max-container padding-container flexBetween flex-col sm:flex-row gap-4">
          <p className="text-sm text-gray-600">
            © {yearRef.current} Acumen Intelligence. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
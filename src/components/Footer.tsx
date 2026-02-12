'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f8fcfd] border-t relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Column: Logo and Description */}
          <div className="space-y-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="h-16 w-16 rounded-full border-4 border-primary flex items-center justify-center bg-white shadow-sm overflow-hidden p-1.5">
                <div className="relative w-full h-full">
                  <svg viewBox="0 0 100 100" className="text-primary w-full h-full">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M30 30 V70 M70 30 V70 M30 50 H70" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                    <path d="M50 20 V80 M20 50 H80" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                  </svg>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-headline font-bold text-primary text-[10px] tracking-[0.2em] uppercase">
                  Health Plus Innovation
                </h2>
                <p className="font-headline font-bold text-primary text-[8px] tracking-widest uppercase opacity-80">
                  Pvt. Ltd.
                </p>
              </div>
            </div>
            <p className="text-[#8a6a8a] text-xs leading-relaxed text-center md:text-left font-medium">
              At <span className="font-bold">Health Plus Innovation (HPI)</span>, we are committed to improving lives through safe, effective, and innovative healthcare solutions.
            </p>
          </div>

          {/* Middle Column: Useful Links and Socials */}
          <div className="flex flex-col items-center text-center space-y-6">
            <h3 className="text-[#3ab8c5] font-bold text-xl">Useful Links</h3>
            <ul className="space-y-2 text-[#8a6a8a] font-bold text-xs">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Shop</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>

            <div className="space-y-3">
              <h4 className="text-[#3ab8c5] font-bold text-lg">Follow us on</h4>
              <div className="flex gap-3">
                <Link href="#" className="h-8 w-8 bg-[#3b5998] text-white rounded flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link href="#" className="h-8 w-8 bg-[#55acee] text-white rounded flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link href="#" className="h-8 w-8 bg-[#bc2a8d] text-white rounded flex items-center justify-center hover:opacity-90 transition-opacity">
                  <Instagram className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Get in touch and Map */}
          <div className="space-y-6">
            <h3 className="text-[#3ab8c5] font-bold text-xl text-center md:text-left">Get in touch</h3>
            
            <div className="rounded-xl overflow-hidden border-2 border-white shadow-sm relative h-32 w-full group max-w-sm mx-auto md:mx-0">
              <Image 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYXB8ZW58MHx8fHwxNzcwOTIyMTc4fDA&ixlib=rb-4.1.0&q=80&w=400"
                alt="Office Location Map"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
            </div>

            <ul className="space-y-3 text-[#8a6a8a] font-bold text-xs">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#3ab8c5]" />
                <span className="text-sm">+91 9266903156</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#3ab8c5]" />
                <span>info@hpi.co.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#3ab8c5] shrink-0 mt-0.5" />
                <span className="leading-tight">D-4/1 1st floor okhla phase 2 Delhi-110020</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-white py-4 border-t">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[#8a6a8a] font-bold text-[10px] text-center">
            Copyright © 2026 hpi.co.in
          </p>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 bg-[#3ab8c5] text-white hover:bg-[#3ab8c5]/90 rounded-md"
            onClick={scrollToTop}
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

'use client';

import Link from 'next/link';
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
              <div className="h-20 w-20 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-current">
                  <path d="M50 5 C25.1 5 5 25.1 5 50 C5 74.9 25.1 95 50 95 C74.9 95 95 74.9 95 50 C95 25.1 74.9 5 50 5 Z M50 91 C27.4 91 9 72.6 9 50 C9 27.4 27.4 9 50 9 C72.6 9 91 27.4 91 50 C91 72.6 72.6 91 50 91 Z" />
                  <path d="M38 44 H44 V38 H56 V44 H62 V56 H56 V62 H44 V56 H38 V44 Z" />
                  <circle cx="50" cy="32" r="6" />
                  <path d="M50 40 C42 40 36 48 36 60 L50 82 L64 60 C64 48 58 40 50 40 Z" />
                  <path d="M28 82 Q50 88 72 82 L74 80 Q50 85 26 80 Z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-headline font-black text-primary text-lg tracking-tighter uppercase">
                  Health Plus Innovation
                </h2>
                <p className="font-headline font-bold text-slate-400 text-[10px] tracking-[0.3em] uppercase opacity-80">
                  Pvt. Ltd.
                </p>
              </div>
            </div>
            <p className="text-[#8a6a8a] text-xs leading-relaxed text-center md:text-left font-medium">
              At <span className="font-bold text-primary">Health Plus Innovation (HPI)</span>, we are committed to improving lives through safe, effective, and innovative healthcare solutions.
            </p>
          </div>

          {/* Middle Column: Useful Links and Socials */}
          <div className="flex flex-col items-center text-center space-y-6">
            <h3 className="text-[#3ab8c5] font-bold text-xl">Useful Links</h3>
            <ul className="space-y-2 text-[#8a6a8a] font-bold text-xs">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Catalog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping & Delivery</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
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

          {/* Right Column: Get in touch and Google Map */}
          <div className="space-y-6">
            <h3 className="text-[#3ab8c5] font-bold text-xl text-center md:text-left">Get in touch</h3>
            
            <div className="rounded-xl overflow-hidden border-2 border-white shadow-xl relative h-40 w-full max-w-sm mx-auto md:mx-0 group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.584344445558!2d77.27367857549688!3d28.52180867572703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e970228e3d%3A0xc3437f90356c9d2d!2sOkhla%20Phase%20II%2C%20Okhla%20Industrial%20Estate%2C%20New%20Delhi%2C%20Delhi%20110020!5e0!3m2!1sen!2sin!4v1710922178999!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-100 transition-all duration-700 group-hover:scale-105"
              ></iframe>
            </div>

            <ul className="space-y-3 text-[#8a6a8a] font-bold text-xs">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#3ab8c5]" />
                <span className="text-sm">+91 9266903156</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#3ab8c5]" />
                <span>innovateplushealth@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#3ab8c5] shrink-0 mt-0.5" />
                <span className="leading-tight">D-4/1 1st floor okhla phase industrial area phase 2 Delhi-110020</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-white py-4 border-t">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[#8a6a8a] font-bold text-[10px] text-center">
            Copyright © 2026 hpi.co.in | <Link href="/terms" className="hover:text-primary">T&amp;C</Link> | <Link href="/shipping" className="hover:text-primary">Shipping</Link>
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

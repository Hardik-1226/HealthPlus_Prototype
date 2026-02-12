'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, Instagram, Twitter, Facebook, Phone, Mail, FileDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';

export const Navbar = () => {
  const { cartCount } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col">
      {/* Top Contact Bar */}
      <div className="w-full bg-primary text-primary-foreground py-2.5 px-4 hidden sm:block">
        <div className="container mx-auto flex justify-between items-center text-xs font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +91 9266903156
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> info@hpi.co.in
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="#" target="_blank" className="hover:opacity-80 transition-opacity">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank" className="hover:opacity-80 transition-opacity">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank" className="hover:opacity-80 transition-opacity">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 flex h-24 items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-8 w-8" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px]">
                <SheetHeader className="text-left mb-6">
                  <SheetTitle className="text-2xl font-black text-primary">HPI Menu</SheetTitle>
                  <SheetDescription className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Innovative Healthcare Solutions
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-4">
                  <Link 
                    href="/" 
                    onClick={() => setOpen(false)}
                    className="text-lg font-semibold hover:text-primary"
                  >
                    Home
                  </Link>
                  <Link 
                    href="/products" 
                    onClick={() => setOpen(false)}
                    className="text-lg font-semibold hover:text-primary"
                  >
                    Products
                  </Link>
                  <Link 
                    href="/about" 
                    onClick={() => setOpen(false)}
                    className="text-lg font-semibold hover:text-primary"
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/contact" 
                    onClick={() => setOpen(false)}
                    className="text-lg font-semibold hover:text-primary"
                  >
                    Contact
                  </Link>
                  <Button variant="outline" className="mt-4 gap-2 rounded-full border-primary/40">
                    <FileDown className="h-4 w-4" /> Download Brochure
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-16 w-16 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-current">
                  {/* Outer Ring */}
                  <path d="M50 5 C25.1 5 5 25.1 5 50 C5 74.9 25.1 95 50 95 C74.9 95 95 74.9 95 50 C95 25.1 74.9 5 50 5 Z M50 91 C27.4 91 9 72.6 9 50 C9 27.4 27.4 9 50 9 C72.6 9 91 27.4 91 50 C91 72.6 72.6 91 50 91 Z" />
                  {/* Cross */}
                  <path d="M38 44 H44 V38 H56 V44 H62 V56 H56 V62 H44 V56 H38 V44 Z" />
                  {/* Human Figure */}
                  <circle cx="50" cy="32" r="6" />
                  <path d="M50 40 C42 40 36 48 36 60 L50 82 L64 60 C64 48 58 40 50 40 Z" />
                  {/* Hand Support at bottom */}
                  <path d="M28 82 Q50 88 72 82 L74 80 Q50 85 26 80 Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-black text-2xl md:text-3xl tracking-tighter leading-none">
                  Health<span className="text-primary">Plus</span>
                </span>
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500 leading-none mt-1">
                  Innovation Pvt. Ltd.
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest">
            <Link href="/" className="transition-colors hover:text-primary">Home</Link>
            <Link href="/products" className="transition-colors hover:text-primary">Products</Link>
            <Link href="/about" className="transition-colors hover:text-primary">About Us</Link>
            <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="outline" className="hidden lg:flex gap-2 rounded-full border-primary/40 hover:bg-primary/10 h-12 px-6 font-bold">
              <FileDown className="h-5 w-5 text-primary" /> Brochure
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative h-16 w-16 group border-2 border-primary/30 hover:border-primary transition-all rounded-xl">
                <ShoppingCart className="h-9 w-9 text-slate-700 group-hover:text-primary transition-colors" />
                {cartCount > 0 && (
                  <Badge className="absolute top-0 right-0 h-8 w-8 flex items-center justify-center p-0 text-[14px] bg-accent text-accent-foreground border-2 border-white font-black rounded-full shadow-md animate-in zoom-in">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
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
                  <Menu className="h-6 w-6" />
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
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-4xl">H</span>
              </div>
              <span className="font-headline font-bold text-4xl tracking-tighter hidden sm:inline-block">
                Health<span className="text-primary">Plus</span>
              </span>
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
              <Button variant="ghost" size="icon" className="relative h-12 w-12">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-6 w-6 flex items-center justify-center p-0 text-[11px] bg-accent text-accent-foreground border-none font-bold">
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

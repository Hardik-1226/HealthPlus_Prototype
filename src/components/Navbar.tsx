'use client';

import Link from 'next/link';
import { Menu, Instagram, Twitter, Facebook, Phone, Mail, FileDown, Search, X, ClipboardList } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect, useRef } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { useRouter, usePathname } from 'next/navigation';
import { PRODUCTS, Product } from '@/lib/products';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const Navbar = () => {
  const { cartCount } = useCart();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const filtered = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSuggestions(false);
      setOpen(false);
    }
  };

  const handleSuggestionClick = (productId: string) => {
    router.push(`/products/${productId}`);
    setSearchQuery('');
    setShowSuggestions(false);
    setOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-sm bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Contact Bar */}
      <div className="w-full bg-[#3AB8C5]/10 text-slate-600 py-1.5 px-4 hidden sm:block border-b">
        <div className="container mx-auto flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-primary" /> +91 9266903156
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-primary" /> innovateplushealth@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" target="_blank" className="hover:text-primary transition-colors">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" target="_blank" className="hover:text-primary transition-colors">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="#" target="_blank" className="hover:text-primary transition-colors">
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full border-b">
        <div className="container mx-auto px-4 flex h-20 items-center justify-between gap-4">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 shrink-0">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden h-10 w-10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <SheetHeader className="text-left mb-8">
                  <SheetTitle className="text-3xl font-black text-primary uppercase tracking-tight">HPI Menu</SheetTitle>
                  <SheetDescription className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                    Innovative Healthcare Solutions
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.path} 
                      href={link.path} 
                      onClick={() => setOpen(false)} 
                      className={cn(
                        "text-lg font-black py-4 border-b uppercase tracking-widest transition-colors",
                        pathname === link.path ? "text-primary border-primary" : "text-slate-600 border-transparent"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button variant="outline" className="mt-6 gap-3 rounded-full border-primary/40 text-xs uppercase tracking-[0.2em] font-black h-14">
                    <FileDown className="h-5 w-5" /> Download Brochure
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
            
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-14 w-14 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-current group-hover:scale-105 transition-transform duration-300">
                  <path d="M50 15 C30 15 15 30 15 50 C15 70 30 85 50 85 L50 80 C35 80 20 65 20 50 C20 35 35 20 50 20 C65 20 80 35 80 50 L85 50 C85 30 70 15 50 15 Z" fill="none" stroke="currentColor" strokeWidth="4" />
                  <rect x="46" y="35" width="8" height="30" rx="1" />
                  <rect x="35" y="46" width="30" height="8" rx="1" />
                  <circle cx="50" cy="30" r="4" />
                  <path d="M50 35 L50 48 M50 38 L42 42 M50 38 L58 42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M25 80 Q50 95 75 80 L73 78 Q50 90 27 78 Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-black text-xl md:text-2xl tracking-tighter leading-none text-slate-800 uppercase">
                  Health<span className="text-primary">Plus</span>
                </span>
                <span className="text-[7px] font-black uppercase tracking-[0.2em] text-slate-500 leading-none mt-1.5">
                  Innovation Pvt. Ltd.
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center justify-center flex-1 gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                href={link.path} 
                className={cn(
                  "transition-all py-2 border-b-2",
                  pathname === link.path 
                    ? "text-primary border-primary" 
                    : "text-slate-500 border-transparent hover:text-primary hover:border-primary/50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions Section */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden lg:block relative group" ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className="relative w-48 xl:w-72">
                <Input
                  type="text"
                  placeholder="Search catalog..."
                  className="h-12 rounded-full pl-10 pr-4 border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-primary/20 transition-all text-[11px] font-bold"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                {searchQuery && (
                  <button 
                    type="button" 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <X className="h-3 w-3 text-slate-400 hover:text-slate-600" />
                  </button>
                )}
              </form>
              
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full right-0 w-80 bg-white shadow-2xl border border-slate-100 rounded-[2rem] mt-4 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="bg-slate-50 p-3 border-b">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 px-3">Catalog Matches</p>
                  </div>
                  {suggestions.map(p => (
                    <div 
                      key={p.id} 
                      className="p-4 hover:bg-primary/5 cursor-pointer border-b last:border-0 flex items-center gap-4 transition-colors"
                      onClick={() => handleSuggestionClick(p.id)}
                    >
                      <div className="h-10 w-10 relative rounded-xl bg-slate-100 overflow-hidden shrink-0">
                        <Image src={p.imageUrl} alt={p.name} fill className="object-cover" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-xs font-black text-slate-800 line-clamp-1 uppercase tracking-tight">{p.name}</p>
                        <p className="text-[9px] text-primary font-black uppercase tracking-widest">{p.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Button variant="outline" className="hidden xl:flex gap-3 rounded-full border-slate-200 text-[10px] uppercase tracking-[0.2em] font-black h-12 hover:bg-slate-50 group">
              <FileDown className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" /> Brochure
            </Button>
            
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative h-12 w-12 group border-2 border-primary/20 transition-all rounded-2xl bg-white shadow-sm hover:shadow-xl hover:border-primary">
                <ClipboardList className="h-6 w-6 text-slate-700 group-hover:text-primary transition-colors" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-3 -right-3 h-7 w-7 flex items-center justify-center p-0 text-[10px] bg-accent text-accent-foreground border-4 border-white font-black rounded-full shadow-lg">
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
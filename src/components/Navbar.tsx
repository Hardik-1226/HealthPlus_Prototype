'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, Instagram, Twitter, Facebook, Phone, Mail, FileDown, Search, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect, useRef } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
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
              <Mail className="h-4 w-4" /> innovateplushealth@gmail.com
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
        <div className="container mx-auto px-4 flex h-24 items-center justify-between gap-8">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4 shrink-0">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-8 w-8" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <SheetHeader className="text-left mb-6">
                  <SheetTitle className="text-2xl font-black text-primary">HPI Menu</SheetTitle>
                  <SheetDescription className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Innovative Healthcare Solutions
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <form onSubmit={handleSearchSubmit}>
                      <Input
                        placeholder="Search medicines..."
                        className="pl-10 h-12 rounded-xl bg-slate-50 border-slate-100"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    </form>
                    {showSuggestions && suggestions.length > 0 && (
                      <div className="absolute top-full left-0 right-0 bg-white shadow-xl border rounded-xl mt-2 overflow-hidden z-50">
                        {suggestions.map(p => (
                          <div 
                            key={p.id} 
                            className="p-3 hover:bg-slate-50 cursor-pointer border-b last:border-0 flex items-center gap-3"
                            onClick={() => handleSuggestionClick(p.id)}
                          >
                            <div className="h-8 w-8 relative rounded bg-slate-100 overflow-hidden shrink-0">
                              <Image src={p.imageUrl} alt={p.name} fill className="object-cover" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-slate-800 line-clamp-1">{p.name}</p>
                              <p className="text-[10px] text-primary font-bold uppercase tracking-tighter">{p.category}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link href="/" onClick={() => setOpen(false)} className="text-lg font-bold hover:text-primary py-2 border-b">Home</Link>
                  <Link href="/products" onClick={() => setOpen(false)} className="text-lg font-bold hover:text-primary py-2 border-b">Products</Link>
                  <Link href="/about" onClick={() => setOpen(false)} className="text-lg font-bold hover:text-primary py-2 border-b">About Us</Link>
                  <Link href="/contact" onClick={() => setOpen(false)} className="text-lg font-bold hover:text-primary py-2 border-b">Contact</Link>
                  <Button variant="outline" className="mt-4 gap-2 rounded-full border-primary/40">
                    <FileDown className="h-4 w-4" /> Brochure
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
            
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-14 w-14 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-current">
                  <path d="M50 5 C25.1 5 5 25.1 5 50 C5 74.9 25.1 95 50 95 C74.9 95 95 74.9 95 50 C95 25.1 74.9 5 50 5 Z M50 91 C27.4 91 9 72.6 9 50 C9 27.4 27.4 9 50 9 C72.6 9 91 27.4 91 50 C91 72.6 72.6 91 50 91 Z" />
                  <path d="M38 44 H44 V38 H56 V44 H62 V56 H56 V62 H44 V56 H38 V44 Z" />
                  <circle cx="50" cy="32" r="6" />
                  <path d="M50 40 C42 40 36 48 36 60 L50 82 L64 60 C64 48 58 40 50 40 Z" />
                  <path d="M28 82 Q50 88 72 82 L74 80 Q50 85 26 80 Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-black text-xl md:text-2xl tracking-tighter leading-none">
                  Health<span className="text-primary">Plus</span>
                </span>
                <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-slate-500 leading-none mt-1">
                  Innovation Pvt. Ltd.
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-8 text-[11px] font-black uppercase tracking-[0.15em] text-slate-600">
            <Link href="/" className="transition-colors hover:text-primary py-2 px-1 border-b-2 border-transparent hover:border-primary">Home</Link>
            <Link href="/products" className="transition-colors hover:text-primary py-2 px-1 border-b-2 border-transparent hover:border-primary">Products</Link>
            <Link href="/about" className="transition-colors hover:text-primary py-2 px-1 border-b-2 border-transparent hover:border-primary">About</Link>
            <Link href="/contact" className="transition-colors hover:text-primary py-2 px-1 border-b-2 border-transparent hover:border-primary">Contact</Link>
          </nav>

          {/* Actions Section */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop Search Bar with Suggestions */}
            <div className="hidden md:block relative group" ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className="relative w-48 lg:w-64">
                <Input
                  type="text"
                  placeholder="Search medicines..."
                  className="h-11 rounded-full pl-10 pr-4 border-primary/30 bg-slate-50 focus:bg-white focus:w-72 transition-all text-xs font-bold"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                {searchQuery && (
                  <button 
                    type="button" 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <X className="h-3 w-3 text-slate-400 hover:text-slate-600" />
                  </button>
                )}
              </form>
              
              {/* Desktop Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full right-0 w-80 bg-white shadow-2xl border border-slate-100 rounded-2xl mt-3 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-slate-50 p-2 border-b">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-2">Top Results</p>
                  </div>
                  {suggestions.map(p => (
                    <div 
                      key={p.id} 
                      className="p-3 hover:bg-primary/5 cursor-pointer border-b last:border-0 flex items-center gap-3 transition-colors"
                      onClick={() => handleSuggestionClick(p.id)}
                    >
                      <div className="h-10 w-10 relative rounded-lg bg-slate-100 overflow-hidden shrink-0">
                        <Image src={p.imageUrl} alt={p.name} fill className="object-cover" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-xs font-black text-slate-800 line-clamp-1">{p.name}</p>
                        <p className="text-[10px] text-primary font-bold uppercase tracking-tight">{p.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black text-slate-800">₹{p.price}</p>
                      </div>
                    </div>
                  ))}
                  <div 
                    className="p-3 bg-primary/10 text-center cursor-pointer hover:bg-primary/20 transition-colors"
                    onClick={handleSearchSubmit}
                  >
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">View All Results</p>
                  </div>
                </div>
              )}
            </div>

            <Button variant="outline" className="hidden lg:flex gap-2 rounded-full border-primary/40 hover:bg-primary/10 h-11 px-5 font-bold text-xs uppercase tracking-widest">
              <FileDown className="h-4 w-4 text-primary" /> Brochure
            </Button>
            
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative h-14 w-14 group border-2 border-primary transition-all rounded-2xl bg-white shadow-sm hover:shadow-md">
                <ShoppingCart className="h-8 w-8 text-slate-700 group-hover:text-primary transition-colors" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-7 w-7 flex items-center justify-center p-0 text-[12px] bg-accent text-accent-foreground border-2 border-white font-black rounded-full shadow-lg animate-in zoom-in">
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

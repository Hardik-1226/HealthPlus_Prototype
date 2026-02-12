'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, Instagram, Twitter, Facebook, Phone, Mail, FileDown, Search, X } from 'lucide-react';
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
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-sm">
      {/* Top Contact Bar */}
      <div className="w-full bg-primary text-primary-foreground py-1.5 px-4 hidden sm:block">
        <div className="container mx-auto flex justify-between items-center text-[10px] md:text-xs font-semibold">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" /> +91 9266903156
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" /> innovateplushealth@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" target="_blank" className="hover:opacity-80 transition-opacity">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" target="_blank" className="hover:opacity-80 transition-opacity">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="#" target="_blank" className="hover:opacity-80 transition-opacity">
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
                <SheetHeader className="text-left mb-6">
                  <SheetTitle className="text-2xl font-black text-primary">HPI Menu</SheetTitle>
                  <SheetDescription className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
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
                        "text-lg font-bold py-2 border-b transition-colors",
                        pathname === link.path ? "text-primary border-primary" : "text-slate-600 border-transparent"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button variant="outline" className="mt-4 gap-2 rounded-full border-primary/40 text-xs uppercase tracking-widest font-black h-12">
                    <FileDown className="h-4 w-4" /> Download Brochure
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
            
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-current">
                  <path d="M50 5 C25.1 5 5 25.1 5 50 C5 74.9 25.1 95 50 95 C74.9 95 95 74.9 95 50 C95 25.1 74.9 5 50 5 Z M50 91 C27.4 91 9 72.6 9 50 C9 27.4 27.4 9 50 9 C72.6 9 91 27.4 91 50 C91 72.6 72.6 91 50 91 Z" />
                  <path d="M38 44 H44 V38 H56 V44 H62 V56 H56 V62 H44 V56 H38 V44 Z" />
                  <circle cx="50" cy="32" r="6" />
                  <path d="M50 40 C42 40 36 48 36 60 L50 82 L64 60 C64 48 58 40 50 40 Z" />
                  <path d="M28 82 Q50 88 72 82 L74 80 Q50 85 26 80 Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-black text-lg md:text-xl tracking-tighter leading-none">
                  Health<span className="text-primary">Plus</span>
                </span>
                <span className="text-[6px] font-bold uppercase tracking-[0.2em] text-slate-500 leading-none mt-1">
                  Innovation Pvt. Ltd.
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 gap-6 lg:gap-8 text-[10px] font-black uppercase tracking-[0.15em]">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                href={link.path} 
                className={cn(
                  "transition-all py-2 px-1 border-b-2",
                  pathname === link.path 
                    ? "text-primary border-primary" 
                    : "text-slate-600 border-transparent hover:text-primary hover:border-primary/50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions Section */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden lg:block relative group" ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className="relative w-48 xl:w-64">
                <Input
                  type="text"
                  placeholder="Search medicines..."
                  className="h-10 rounded-full pl-9 pr-4 border-slate-200 bg-slate-50 focus:bg-white focus:w-72 transition-all text-[11px] font-bold"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
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
              
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full right-0 w-80 bg-white shadow-2xl border border-slate-100 rounded-2xl mt-3 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-slate-50 p-2 border-b">
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 px-2">Top Matches</p>
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
                        <p className="text-[9px] text-primary font-bold uppercase tracking-tight">{p.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black text-slate-800">₹{p.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative h-11 w-11 group border-2 border-primary/20 transition-all rounded-xl bg-white shadow-sm hover:shadow-md hover:border-primary">
                <ShoppingCart className="h-6 w-6 text-slate-700 group-hover:text-primary transition-colors" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 text-[10px] bg-accent text-accent-foreground border-2 border-white font-black rounded-full shadow-lg animate-in zoom-in">
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

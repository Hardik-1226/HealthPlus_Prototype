'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Search, ShoppingCart, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useSearchParams } from 'next/navigation';

function ProductsContent() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    const query = searchParams.get('search');
    if (query !== null) {
      setSearch(query);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const query = search.toLowerCase();
      return p.name.toLowerCase().includes(query) || 
             p.category.toLowerCase().includes(query) ||
             p.description.toLowerCase().includes(query);
    });
  }, [search]);

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    toast({
      title: "Added to order",
      description: `${product.name} added to your basket.`
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-black text-slate-800 tracking-tighter">HPI Catalog</h1>
        <p className="text-lg text-slate-500 max-w-xl font-medium">
          Professional pharmaceutical procurement. High-quality medicines for clinics and hospitals.
        </p>
      </div>

      {/* Featured Products Slider */}
      <section className="bg-primary/5 rounded-[3rem] p-8 overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-accent-foreground animate-pulse" />
            <h2 className="text-2xl font-bold text-slate-800">New Arrivals</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Slide to explore</p>
        </div>
        
        <Carousel className="w-full" opts={{ align: 'start', loop: true }}>
          <CarouselContent className="-ml-4">
            {PRODUCTS.slice(0, 4).map((product) => (
              <CarouselItem key={`featured-${product.id}`} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Link href={`/products/${product.id}`}>
                  <Card className="hover:shadow-lg transition-all duration-500 h-full border-none shadow-md rounded-[2rem] overflow-hidden group bg-white">
                    <CardContent className="p-0">
                      <div className="relative h-32 w-full overflow-hidden">
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="text-md font-bold mb-1 text-slate-800 line-clamp-1">{product.name}</h3>
                        <div className="flex items-center justify-center gap-2">
                          <p className="text-primary font-black text-sm">₹{product.price.toFixed(2)}</p>
                          <p className="text-slate-400 line-through text-[10px] font-bold">₹{product.mrp.toFixed(2)}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-4">
            <CarouselPrevious className="relative inset-0 h-10 w-10 rounded-full border-primary/20 text-primary" />
            <CarouselNext className="relative inset-0 h-10 w-10 rounded-full border-primary/20 text-primary" />
          </div>
        </Carousel>
      </section>

      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div className="relative w-full md:max-w-sm group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
          <Input 
            placeholder="Search catalog..." 
            className="pl-10 h-12 rounded-full border-slate-100 shadow-sm focus:ring-primary/20 text-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="group flex flex-col h-full border-none shadow-md rounded-[2.5rem] overflow-hidden hover:shadow-xl transition-all duration-500 bg-white">
                <div className="relative h-40 overflow-hidden bg-slate-50">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-white/95 text-primary border-none font-black px-3 py-1 rounded-full shadow-sm text-[8px] uppercase tracking-widest">
                      {product.category}
                    </Badge>
                  </div>
                  {product.mrp > product.price && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-accent text-accent-foreground border-none font-black px-2 py-0.5 rounded-full shadow-sm text-[8px] uppercase tracking-widest">
                        Save {Math.round(((product.mrp - product.price) / product.mrp) * 100)}%
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg mb-1 line-clamp-1 text-slate-800 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-xs text-slate-500 mb-4 line-clamp-2 flex-grow leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-xl font-black text-slate-800">
                        ₹{product.price.toFixed(2)}
                      </span>
                      <span className="text-xs text-slate-400 line-through font-bold">
                        ₹{product.mrp.toFixed(2)}
                      </span>
                    </div>
                    <Button 
                      size="icon" 
                      className="bg-primary text-white hover:bg-primary/90 rounded-xl h-10 w-10 shadow-md border-2 border-primary"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-100">
          <p className="text-xl text-slate-400 font-bold">No products found.</p>
          <Button variant="link" className="text-primary font-bold mt-1 text-md" onClick={() => { setSearch(''); }}>
            Clear Search
          </Button>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-20 text-center font-bold text-slate-400">Loading catalog...</div>}>
      <ProductsContent />
    </Suspense>
  );
}

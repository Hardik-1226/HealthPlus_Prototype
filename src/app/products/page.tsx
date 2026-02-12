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
import { Search, ShoppingCart, Zap, Package } from 'lucide-react';
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
      title: "Added to Basket",
      description: `${product.name} has been added to your procurement order.`
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <div className="space-y-4">
        <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase">Product Catalog</h1>
        <p className="text-lg text-slate-500 max-w-xl font-medium leading-relaxed">
          Access high-quality pharmaceutical formulations and essential supplies for institutional procurement.
        </p>
      </div>

      {/* Featured Products Slider */}
      <section className="bg-primary/5 rounded-[3.5rem] p-10 overflow-hidden shadow-inner">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center">
              <Zap className="h-6 w-6 text-primary animate-pulse" />
            </div>
            <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Recent Additions</h2>
          </div>
          <p className="hidden md:block text-[10px] font-black uppercase tracking-[0.3em] text-primary">Discover new formulations</p>
        </div>
        
        <Carousel className="w-full" opts={{ align: 'start', loop: true }}>
          <CarouselContent className="-ml-4">
            {PRODUCTS.slice(0, 4).map((product) => (
              <CarouselItem key={`featured-${product.id}`} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Link href={`/products/${product.id}`}>
                  <Card className="hover:shadow-2xl transition-all duration-500 h-full border-none shadow-lg rounded-[2.5rem] overflow-hidden group bg-white">
                    <CardContent className="p-0">
                      <div className="relative h-40 w-full overflow-hidden">
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-lg font-bold mb-2 text-slate-800 line-clamp-1 uppercase tracking-tight">{product.name}</h3>
                        <div className="flex items-center justify-center gap-3">
                          <p className="text-primary font-black text-lg">₹{product.price.toFixed(2)}</p>
                          <p className="text-slate-400 line-through text-xs font-bold">₹{product.mrp.toFixed(2)}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-3 mt-8">
            <CarouselPrevious className="relative inset-0 h-12 w-12 rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all" />
            <CarouselNext className="relative inset-0 h-12 w-12 rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all" />
          </div>
        </Carousel>
      </section>

      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between border-b pb-8 border-slate-100">
        <div className="relative w-full md:max-w-md group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
          <Input 
            placeholder="Search catalog by name or category..." 
            className="pl-12 h-14 rounded-full border-slate-200 shadow-sm focus:ring-primary/20 text-base font-medium"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <Package className="h-4 w-4" /> {filteredProducts.length} Products Found
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="group flex flex-col h-full border-none shadow-xl rounded-[3rem] overflow-hidden hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-500 bg-white">
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/95 text-primary border-none font-black px-4 py-1.5 rounded-full shadow-md text-[9px] uppercase tracking-widest">
                      {product.category}
                    </Badge>
                  </div>
                  {product.mrp > product.price && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent text-accent-foreground border-none font-black px-3 py-1 rounded-full shadow-md text-[9px] uppercase tracking-widest">
                        Save {Math.round(((product.mrp - product.price) / product.mrp) * 100)}%
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-8 flex flex-col flex-grow">
                  <h3 className="font-black text-xl mb-2 line-clamp-1 text-slate-800 group-hover:text-primary transition-colors uppercase tracking-tight">{product.name}</h3>
                  <p className="text-xs text-slate-500 mb-6 line-clamp-3 flex-grow leading-relaxed font-medium">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-2xl font-black text-slate-800">
                        ₹{product.price.toFixed(2)}
                      </span>
                      <span className="text-xs text-slate-400 line-through font-bold">
                        ₹{product.mrp.toFixed(2)}
                      </span>
                    </div>
                    <Button 
                      size="icon" 
                      className="bg-primary text-white hover:bg-primary/90 rounded-2xl h-12 w-12 shadow-xl border-4 border-primary/20 transition-all"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-slate-50 rounded-[4rem] border-4 border-dashed border-slate-200">
          <div className="h-20 w-20 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="h-10 w-10 text-slate-400" />
          </div>
          <h3 className="text-2xl font-black text-slate-400 uppercase tracking-tight">No products found</h3>
          <p className="text-slate-500 font-medium mt-2">Try adjusting your search filters or browse the full catalog.</p>
          <Button variant="outline" className="mt-8 rounded-full border-primary text-primary font-black uppercase tracking-widest text-[10px] h-12 px-8" onClick={() => { setSearch(''); }}>
            Reset Search
          </Button>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-24 text-center font-black text-slate-300 uppercase tracking-widest animate-pulse">Loading Catalog...</div>}>
      <ProductsContent />
    </Suspense>
  );
}


'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, CATEGORIES } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !selectedCategory || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your basket.`
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-headline font-bold text-slate-800">Pharmaceutical Catalog</h1>
        <p className="text-muted-foreground max-w-2xl">
          Browse our extensive catalog of genuine medicines and healthcare products for hospitals and clinical settings.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search for medicines..." 
            className="pl-10 h-12 rounded-full border-primary/20"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={selectedCategory === null ? 'default' : 'outline'} 
            size="sm"
            className="rounded-full px-6"
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
          {CATEGORIES.map(category => (
            <Button 
              key={category} 
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              className="rounded-full px-6"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="group flex flex-col h-full border-none shadow-lg rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-primary hover:bg-white border-none font-bold px-3">
                    {product.category}
                  </Badge>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="font-headline font-bold text-xl mb-2 line-clamp-1 text-slate-800 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-sm text-slate-500 mb-6 line-clamp-2 flex-grow">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-bold text-slate-800">
                      ₹{product.price.toFixed(2)}
                    </span>
                    <Button 
                      size="icon" 
                      className="bg-primary text-white hover:bg-primary/90 rounded-full h-12 w-12"
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
        <div className="text-center py-20 border-2 border-dashed border-primary/10 rounded-[3rem] bg-slate-50">
          <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
          <Button variant="link" className="text-primary font-bold" onClick={() => { setSearch(''); setSelectedCategory(null); }}>
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}

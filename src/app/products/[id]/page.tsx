
'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ShoppingCart, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Button onClick={() => router.push('/products')}>Back to Products</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your basket.`
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Button 
        variant="ghost" 
        className="mb-8 pl-0 hover:pl-2 transition-all text-primary font-bold"
        onClick={() => router.back()}
      >
        <ChevronLeft className="h-4 w-4 mr-1" /> Back to Catalog
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="relative aspect-square overflow-hidden rounded-[4rem] bg-white border-8 border-slate-50 shadow-2xl">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            priority
            data-ai-hint="medical product detail"
          />
        </div>

        <div className="space-y-10 py-4">
          <div className="space-y-4">
            <Badge className="bg-primary/10 text-primary border-none uppercase text-xs font-bold tracking-[0.2em] px-4 py-1.5 rounded-full">
              {product.category}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">{product.name}</h1>
            <p className="text-4xl font-black text-primary">₹{product.price.toFixed(2)}</p>
          </div>

          <div className="prose prose-sm max-w-none text-slate-600">
            <h3 className="text-slate-800 font-bold text-2xl mb-4">Description</h3>
            <p className="leading-relaxed text-lg">{product.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <Button 
              size="lg" 
              className="flex-1 h-16 text-xl bg-primary text-white hover:bg-primary/90 rounded-full font-bold shadow-xl shadow-primary/20"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-6 w-6 mr-3" /> Add to Basket
            </Button>
            <Button size="lg" variant="outline" className="flex-1 h-16 text-xl rounded-full border-primary/20 hover:bg-primary/5 text-primary font-bold">
              Bulk Inquiry
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-slate-100">
            <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
              <ShieldCheck className="h-10 w-10 text-primary shrink-0" />
              <span>Quality Assurance Certified</span>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
              <Truck className="h-10 w-10 text-primary shrink-0" />
              <span>Priority Hospital Delivery</span>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
              <RefreshCw className="h-10 w-10 text-primary shrink-0" />
              <span>Batch Replacement Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

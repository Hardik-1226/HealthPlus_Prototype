'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { PRODUCTS } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ShoppingCart, ShieldCheck, Truck, RefreshCw, Plus, Minus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const product = PRODUCTS.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(product?.imageUrl || '');

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-xl font-bold mb-4 text-slate-800">Product Not Found</h1>
        <Button onClick={() => router.push('/products')} className="rounded-full bg-primary text-white">Back to Catalog</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to order",
      description: `${quantity}x ${product.name} added to your basket.`
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        className="mb-6 pl-0 hover:pl-2 transition-all text-primary font-bold group text-sm"
        onClick={() => router.back()}
      >
        <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Catalog
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-4 max-w-sm mx-auto w-full">
          <div className="relative h-80 w-full overflow-hidden rounded-[2rem] bg-white border-4 border-slate-50 shadow-lg">
            <Image
              src={activeImage}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {product.images && product.images.length > 0 && (
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, idx) => (
                <div 
                  key={idx}
                  className={cn(
                    "relative h-20 w-full rounded-xl overflow-hidden cursor-pointer border-2 transition-all",
                    activeImage === img ? "border-primary shadow-md" : "border-transparent hover:border-primary/30"
                  )}
                  onClick={() => setActiveImage(img)}
                >
                  <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6 py-2">
          <div className="space-y-2">
            <Badge className="bg-primary/10 text-primary border-none uppercase text-[10px] font-bold tracking-widest px-3 py-1 rounded-full">
              {product.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight tracking-tight">{product.name}</h1>
            <p className="text-2xl font-black text-primary">₹{product.price.toFixed(2)}</p>
          </div>

          <div className="text-slate-600">
            <h3 className="text-slate-800 font-bold text-lg mb-2">Description</h3>
            <p className="leading-relaxed text-md">{product.description}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Quantity</span>
              <div className="flex items-center gap-3 bg-slate-100 p-1 rounded-full border border-slate-200">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full bg-white shadow-sm hover:bg-slate-50"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-8 text-center font-bold text-lg text-slate-800">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full bg-white shadow-sm hover:bg-slate-50"
                  onClick={() => setQuantity(q => q + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg" 
                className="flex-1 h-12 text-lg bg-primary text-white hover:bg-primary/90 rounded-full font-bold shadow-lg shadow-primary/10"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5 mr-2" /> Add to Basket
              </Button>
              <Button size="lg" variant="outline" className="flex-1 h-12 text-lg rounded-full border-primary/20 hover:bg-primary/5 text-primary font-bold">
                Bulk Inquiry
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
              <span>Certified</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <Truck className="h-6 w-6 text-primary shrink-0" />
              <span>Priority</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <RefreshCw className="h-6 w-6 text-primary shrink-0" />
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

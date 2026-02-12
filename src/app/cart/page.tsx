'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center space-y-6">
        <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <ShoppingBag className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-slate-800">Your basket is empty</h1>
        <p className="text-slate-500 max-w-sm mx-auto text-md">
          Explore our range of medicines and healthcare essentials to start your order.
        </p>
        <Link href="/products">
          <Button size="lg" className="h-12 px-8 rounded-full text-md font-bold bg-primary text-white shadow-lg hover:bg-primary/90">
            Explore Products
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-slate-800 mb-8">Order Summary</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-white rounded-[2rem] border shadow-sm group hover:shadow-md transition-shadow">
                <div className="relative h-24 w-24 bg-slate-50 rounded-[1.5rem] overflow-hidden shrink-0 border border-slate-100">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-grow flex flex-col justify-between py-0.5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-xl text-slate-800">{item.name}</h3>
                      <p className="text-[10px] text-primary font-bold uppercase tracking-widest mt-0.5">{item.category}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-slate-400 hover:text-destructive hover:bg-destructive/5 rounded-full"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex justify-between items-end mt-2">
                    <div className="flex items-center gap-3 bg-slate-50 p-1 rounded-full border">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-7 w-7 rounded-full hover:bg-white hover:shadow-sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-6 text-center font-bold text-md text-slate-800">{item.quantity}</span>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-7 w-7 rounded-full hover:bg-white hover:shadow-sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="font-black text-xl text-slate-800">₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-white rounded-[2.5rem] border shadow-xl space-y-6 sticky top-32">
            <h2 className="text-xl font-bold text-slate-800">Payment Breakdown</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between text-slate-500 font-medium text-sm">
                <span>Subtotal</span>
                <span className="text-slate-800 font-bold">₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-500 font-medium text-sm">
                <span>Distribution Fee</span>
                <span className="text-primary font-bold">FREE</span>
              </div>
              <Separator className="my-4 opacity-50" />
              <div className="flex justify-between items-center pt-1">
                <span className="text-lg font-bold text-slate-800">Total</span>
                <span className="text-2xl font-black text-primary">₹{cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <Link href="/checkout">
                <Button className="w-full h-14 rounded-full text-lg font-black bg-primary text-white hover:bg-primary/90 shadow-lg">
                  Proceed to Checkout <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/products" className="block text-center text-xs font-bold text-slate-400 hover:text-primary transition-colors">
                Continue Inquiry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

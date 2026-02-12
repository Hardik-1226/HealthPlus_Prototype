
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
      <div className="container mx-auto px-4 py-24 text-center space-y-8">
        <div className="h-32 w-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <ShoppingBag className="h-14 w-14 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-slate-800">Your basket is empty</h1>
        <p className="text-slate-500 max-w-md mx-auto text-lg">
          Looks like you haven't added any medicines or healthcare essentials to your order yet.
        </p>
        <Link href="/products">
          <Button size="lg" className="h-14 px-12 rounded-full text-lg font-bold bg-primary text-white shadow-xl hover:bg-primary/90">
            Explore Products
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-slate-800 mb-12">Order Summary</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-6 p-6 bg-white rounded-[2.5rem] border-none shadow-lg group hover:shadow-xl transition-shadow">
                <div className="relative h-32 w-32 bg-slate-50 rounded-[2rem] overflow-hidden shrink-0 border border-slate-100">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-grow flex flex-col justify-between py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-2xl text-slate-800">{item.name}</h3>
                      <p className="text-sm text-primary font-bold uppercase tracking-widest mt-1">{item.category}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-slate-400 hover:text-destructive hover:bg-destructive/5 rounded-full"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center gap-4 bg-slate-50 p-1.5 rounded-full border">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-10 w-10 rounded-full hover:bg-white hover:shadow-sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-bold text-lg text-slate-800">{item.quantity}</span>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-10 w-10 rounded-full hover:bg-white hover:shadow-sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="font-black text-2xl text-slate-800">₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-8 bg-white rounded-[3rem] border-none shadow-2xl space-y-8 sticky top-32">
            <h2 className="text-2xl font-bold text-slate-800">Payment Breakdown</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Subtotal</span>
                <span className="text-slate-800 font-bold">₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Distribution Fee</span>
                <span className="text-primary font-bold">FREE</span>
              </div>
              <div className="flex justify-between text-slate-500 font-medium">
                <span>GST (Incl.)</span>
                <span className="text-slate-800 font-bold">₹0.00</span>
              </div>
              <Separator className="my-6 opacity-50" />
              <div className="flex justify-between items-center pt-2">
                <span className="text-xl font-bold text-slate-800">Total Amount</span>
                <span className="text-3xl font-black text-primary">₹{cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <Link href="/checkout">
                <Button className="w-full h-16 rounded-full text-xl font-black bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20">
                  Proceed to Checkout <ArrowRight className="h-6 w-6 ml-2" />
                </Button>
              </Link>
              <Link href="/products" className="block text-center text-sm font-bold text-slate-400 hover:text-primary transition-colors">
                Continue Order Inquiry
              </Link>
            </div>

            <div className="pt-4">
              <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>🔒 Secure payment by Razorpay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

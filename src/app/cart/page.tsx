'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShoppingCart, Tag, ChevronLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center space-y-8">
        <div className="h-32 w-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto animate-pulse">
          <ShoppingBag className="h-14 w-14 text-primary" />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight">Your basket is empty</h1>
          <p className="text-slate-500 max-w-sm mx-auto text-sm font-medium">
            Explore our professional medical catalog to start your procurement order.
          </p>
        </div>
        <Link href="/products">
          <Button size="lg" className="h-14 px-10 rounded-full text-xs font-black uppercase tracking-widest bg-primary text-white shadow-xl hover:bg-primary/90 transition-all">
            Browse Products
          </Button>
        </Link>
      </div>
    );
  }

  const totalSavings = cart.reduce((acc, item) => acc + (item.mrp - item.price) * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
        <div className="space-y-1">
          <h1 className="text-4xl font-black text-slate-800 tracking-tighter uppercase">Shopping Basket</h1>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Manage your institutional order items</p>
        </div>
        <Link href="/products">
          <Button variant="outline" className="rounded-full h-10 px-6 text-[10px] font-black uppercase tracking-widest border-primary/20 text-slate-600 hover:bg-slate-50">
            <ChevronLeft className="h-4 w-4 mr-2" /> Continue Procurement
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border shadow-2xl rounded-[2.5rem] overflow-hidden bg-white">
             <CardHeader className="bg-slate-800 p-8">
              <CardTitle className="flex items-center gap-3 text-xl font-black text-white uppercase tracking-tight">
                <ShoppingCart className="h-6 w-6 text-primary" /> Order Items ({cart.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100">
                {cart.map((item) => (
                  <div key={item.id} className="p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:bg-slate-50/50 transition-colors">
                    <div className="relative h-24 w-24 md:h-32 md:w-32 bg-slate-100 rounded-[2rem] overflow-hidden shrink-0 border border-slate-200 mx-auto md:mx-0 group">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="flex-grow flex flex-col justify-between">
                      <div className="flex justify-between items-start gap-4">
                        <div className="space-y-1">
                          <h3 className="font-black text-xl text-slate-800 uppercase tracking-tight">{item.name}</h3>
                          <p className="text-[9px] text-primary font-black uppercase tracking-[0.2em]">{item.category}</p>
                          <p className="text-[11px] text-slate-500 font-medium leading-relaxed max-w-md line-clamp-2 mt-2">
                            {item.description}
                          </p>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-10 w-10 text-slate-300 hover:text-destructive hover:bg-destructive/5 rounded-full shrink-0 transition-all"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mt-8 gap-4">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-3">
                            <span className="text-xl font-black text-slate-800">₹{item.price.toFixed(2)}</span>
                            <span className="text-xs text-slate-400 line-through font-bold">₹{item.mrp.toFixed(2)}</span>
                          </div>
                          <Badge className="bg-primary/10 text-primary border-none font-black px-2 py-0.5 rounded-full text-[9px] uppercase tracking-widest w-fit">
                            Save {Math.round(((item.mrp - item.price) / item.mrp) * 100)}%
                          </Badge>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-4 bg-slate-100 p-1.5 rounded-full border border-slate-200">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              disabled={item.quantity <= 1}
                              className="h-9 w-9 rounded-full bg-white shadow-sm hover:bg-slate-50 text-slate-600 disabled:opacity-30"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-4 text-center font-black text-lg text-slate-800">{item.quantity}</span>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-9 w-9 rounded-full bg-white shadow-sm hover:bg-slate-50 text-slate-600"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="text-right min-w-[100px]">
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Item Total</p>
                            <p className="font-black text-2xl text-primary">₹{(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="sticky top-32 border shadow-2xl rounded-[3rem] overflow-hidden bg-white">
            <CardHeader className="bg-slate-900 p-8">
              <CardTitle className="text-xl font-black text-white uppercase tracking-tight">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between text-slate-500 font-bold uppercase text-[10px] tracking-widest">
                  <span>Gross Subtotal</span>
                  <span className="text-slate-800 text-sm">₹{cartTotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center bg-primary/5 p-4 rounded-2xl border border-primary/10">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">Total Savings</span>
                  </div>
                  <span className="text-sm font-black text-primary">
                    ₹{totalSavings.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-slate-500 font-bold uppercase text-[10px] tracking-widest pt-2">
                  <span>Distribution Fee</span>
                  <span className="text-primary font-black">FREE</span>
                </div>
                
                <Separator className="my-6 opacity-30" />
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-black text-slate-800 uppercase tracking-tight">Net Amount</span>
                  <span className="text-3xl font-black text-primary">₹{cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <Link href="/checkout">
                  <Button className="w-full h-16 rounded-full text-xs font-black uppercase tracking-[0.2em] bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all">
                    Proceed to Checkout <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/products" className="block text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">
                  Continue Shopping
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

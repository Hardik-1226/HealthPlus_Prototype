'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ShoppingBag, ClipboardList, Phone, Mail, ChevronLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center space-y-8">
        <div className="h-32 w-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto animate-pulse">
          <ClipboardList className="h-14 w-14 text-primary" />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight">Your inquiry basket is empty</h1>
          <p className="text-slate-500 max-w-sm mx-auto text-sm font-medium">
            Explore our professional medical catalog to request institutional pricing.
          </p>
        </div>
        <Link href="/products">
          <Button size="lg" className="h-14 px-10 rounded-full text-xs font-black uppercase tracking-widest bg-primary text-white shadow-xl hover:bg-primary/90 transition-all">
            Browse Formulations
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
        <div className="space-y-1">
          <h1 className="text-4xl font-black text-slate-800 tracking-tighter uppercase">Inquiry Basket</h1>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">List of formulations for institutional quotation</p>
        </div>
        <Link href="/products">
          <Button variant="outline" className="rounded-full h-10 px-6 text-[10px] font-black uppercase tracking-widest border-primary/20 text-slate-600 hover:bg-slate-50">
            <ChevronLeft className="h-4 w-4 mr-2" /> Add More Products
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border shadow-2xl rounded-[2.5rem] overflow-hidden bg-white">
             <CardHeader className="bg-slate-800 p-8">
              <CardTitle className="flex items-center gap-3 text-xl font-black text-white uppercase tracking-tight">
                <ClipboardList className="h-6 w-6 text-primary" /> Selected Items ({cart.length})
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
                        className="object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="flex-grow flex flex-col justify-between">
                      <div className="flex justify-between items-start gap-4">
                        <div className="space-y-1">
                          <h3 className="font-black text-xl text-slate-800 uppercase tracking-tight">{item.name}</h3>
                          <p className="text-[9px] text-primary font-black uppercase tracking-[0.2em]">{item.category}</p>
                          <p className="text-[11px] text-slate-500 font-medium mt-2 line-clamp-2">
                            Pack: {item.packSize}
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
                          <Badge className="bg-primary/10 text-primary border-none font-black px-3 py-1 rounded-full text-[9px] uppercase tracking-widest w-fit">
                            Professional Use
                          </Badge>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest pt-1">Institutional Availability: High</span>
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
              <CardTitle className="text-xl font-black text-white uppercase tracking-tight">Inquiry Information</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="space-y-6">
                <p className="text-sm font-medium text-slate-600 leading-relaxed">
                  To request institutional pricing and technical details for the selected items, please contact our procurement team directly.
                </p>
                
                <Separator className="opacity-10" />

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-5 bg-primary/5 rounded-2xl border border-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-[9px] font-black text-primary uppercase tracking-widest">Immediate Support</p>
                      <p className="text-md font-black text-slate-800">+91 9266903156</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-5 bg-primary/5 rounded-2xl border border-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-[9px] font-black text-primary uppercase tracking-widest">Institutional Email</p>
                      <p className="text-sm font-black text-slate-800">innovateplushealth@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Direct Professional Support
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
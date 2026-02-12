
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const [orderNumber, setOrderNumber] = useState<number>(0);

  useEffect(() => {
    setOrderNumber(Math.floor(Math.random() * 90000000) + 10000000);
  }, []);

  return (
    <div className="container mx-auto px-4 py-24 text-center space-y-16">
      <div className="space-y-8">
        <div className="h-32 w-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary animate-bounce duration-[2000ms]">
          <CheckCircle2 className="h-16 w-16" />
        </div>
        <div className="space-y-4">
          <h1 className="text-6xl font-black text-slate-800 tracking-tight">Order Confirmed!</h1>
          <p className="text-2xl text-slate-500 font-medium max-w-2xl mx-auto">
            Thank you for trusting Health Plus Innovation. Your pharmaceutical supply is being prepared for dispatch.
          </p>
        </div>
      </div>

      <div className="max-w-xl mx-auto p-12 bg-white border-none rounded-[4rem] shadow-2xl space-y-10">
        <div className="space-y-6">
          <div className="flex justify-between items-center text-sm py-4 border-b border-slate-50">
            <span className="text-slate-400 font-bold uppercase tracking-[0.2em]">Order Reference</span>
            <span className="font-black text-slate-800 text-lg">#HPI-{orderNumber || '...'}</span>
          </div>
          <div className="flex justify-between items-center text-sm py-4 border-b border-slate-50">
            <span className="text-slate-400 font-bold uppercase tracking-[0.2em]">Current Status</span>
            <span className="text-primary font-black uppercase tracking-widest">Processing</span>
          </div>
          <div className="flex justify-between items-center text-sm py-4 border-b border-slate-50">
            <span className="text-slate-400 font-bold uppercase tracking-[0.2em]">Expected Delivery</span>
            <span className="font-black text-slate-800">24-72 Hours (Express)</span>
          </div>
        </div>
        
        <p className="text-sm font-medium text-slate-400 leading-relaxed italic">
          A detailed invoice and batch tracking details have been sent to your registered institutional email.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <Link href="/products">
          <Button size="lg" className="h-16 px-12 rounded-full font-black text-xl bg-primary text-white shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all">
            <ShoppingBag className="h-6 w-6 mr-3" /> Catalog Inquiry
          </Button>
        </Link>
        <Link href="/">
          <Button size="lg" variant="outline" className="h-16 px-12 rounded-full font-black text-xl border-primary/20 text-primary hover:bg-primary/5 transition-all">
            Home Dashboard <ArrowRight className="h-6 w-6 ml-3" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

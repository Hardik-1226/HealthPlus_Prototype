'use client';

import { Truck, Clock, ShieldCheck, MapPin, Phone, Mail, Building2, Package } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ShippingPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-black text-slate-800 mb-4 tracking-tight">Shipping & Delivery Policy</h1>
      <p className="text-lg text-slate-600 font-medium mb-12">
        At Health Plus Innovation, we are committed to delivering our products promptly and securely. This Shipping & Delivery Policy outlines how we process, ship, and deliver orders.
      </p>
      
      <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">
              <Clock className="h-4 w-4" />
            </span>
            1. Order Processing Time
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Orders are processed within 1–3 business days after payment confirmation.</li>
            <li>Orders placed on weekends or public holidays will be processed on the next working day.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">
              <Truck className="h-4 w-4" />
            </span>
            2. Delivery Timeframe
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Within India:</strong> Estimated delivery time is 3–7 business days after dispatch.</li>
            <li>Delivery times may vary based on location, courier service, and unforeseen delays.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">
              <ShieldCheck className="h-4 w-4" />
            </span>
            3. Shipping Charges
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Shipping charges will be displayed at checkout before order confirmation.</li>
            <li>We may offer free shipping during special promotions or on minimum purchase amounts.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">
              <Package className="h-4 w-4" />
            </span>
            4. Delivery Methods
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We use trusted courier and logistics partners for safe and timely delivery.</li>
            <li>Customers will receive a tracking ID once the order is dispatched.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">
              <MapPin className="h-4 w-4" />
            </span>
            5. Delivery Areas
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Currently, we deliver across India.</li>
            <li>For remote locations, delivery times may be longer, or service may be unavailable.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">!</span>
            6. Delays & Force Majeure
          </h2>
          <p>We are not responsible for delays caused by natural disasters, strikes, lockdowns, or courier issues beyond our control.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">?</span>
            7. Incorrect Address & Failed Delivery
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Please ensure the shipping address is accurate before placing an order.</li>
            <li>Orders returned due to incorrect address or failed delivery attempts may incur re-delivery charges.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">X</span>
            8. Damaged Packages
          </h2>
          <p>If you receive a damaged package, do not accept it from the courier. Contact our customer service immediately.</p>
        </section>

        <section className="pt-12 border-t border-slate-100">
          <h2 className="text-3xl font-black text-slate-800 mb-6 tracking-tight">Contact for Shipping Queries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="text-xs font-black uppercase tracking-widest text-primary">Gmail</p>
              <p className="text-slate-800 font-bold underline">innovateplushealth@gmail.com</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-black uppercase tracking-widest text-primary">Phone</p>
              <p className="text-slate-800 font-bold">+91 9266903156</p>
            </div>
            <div className="md:col-span-2 space-y-2">
              <p className="text-xs font-black uppercase tracking-widest text-primary">Corporate Address</p>
              <p className="text-slate-800 font-bold">D-4/1 1st floor okhla phase industrial area phase 2 South Delhi-110020</p>
            </div>
            <div className="md:col-span-2 space-y-2">
              <p className="text-xs font-black uppercase tracking-widest text-primary">Headquarter Address</p>
              <p className="text-slate-800 font-bold">Plot No.225, Gali No. 1, Surya Vihar Part-II, Sec-91, Faridabad- 121013, Haryana</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

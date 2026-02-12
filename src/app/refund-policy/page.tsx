'use client';

import { ShieldCheck, RefreshCw, AlertCircle, Clock, Package, Truck, Phone, Mail, Building2, MapPin } from 'lucide-react';

export default function RefundPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-black text-slate-800 mb-4 tracking-tight">Refund and Returns Policy</h1>
      <p className="text-lg text-slate-600 font-medium mb-12">
        At Health Plus Innovation, we value our customers and strive to provide the highest quality products and services. However, due to the nature of pharmaceutical products, our refund and return processes follow strict health and safety guidelines.
      </p>

      <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">1</span>
            General Policy
          </h2>
          <p>
            We accept returns and issue refunds only under certain conditions that comply with applicable pharmaceutical regulations in India.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">
              <ShieldCheck className="h-4 w-4" />
            </span>
            2. Eligibility for Returns & Refunds
          </h2>
          <p>You may be eligible for a return or refund if:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The product is damaged or defective upon delivery.</li>
            <li>The wrong product was delivered.</li>
            <li>The product is unopened, in original packaging, and within expiry date.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">
              <AlertCircle className="h-4 w-4" />
            </span>
            3. Non-Returnable & Non-Refundable Items
          </h2>
          <p>We cannot accept returns or issue refunds for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Opened or used pharmaceutical products (unless defective).</li>
            <li>Products without original packaging.</li>
            <li>Products returned after the 7-day period from delivery date.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">
              <Clock className="h-4 w-4" />
            </span>
            4. Return & Refund Request Process
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact our Customer Support team within 7 days of receiving the product.</li>
            <li>Provide proof of purchase and, if applicable, photographic evidence of the issue.</li>
            <li>Our team will review the request and guide you through the return process.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">
              <RefreshCw className="h-4 w-4" />
            </span>
            5. Inspection & Approval
          </h2>
          <p>
            All returned items will be inspected. If approved, refunds will be initiated to the original payment method within 7–10 business days.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="h-8 w-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">
              <Truck className="h-4 w-4" />
            </span>
            6. Shipping Costs for Returns
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>If the return is due to our error (wrong or defective product), we will bear the return shipping cost.</li>
            <li>If the return is due to customer preference or ordering error, the customer must bear the shipping charges.</li>
          </ul>
        </section>

        <section className="pt-12 border-t border-slate-100">
          <h2 className="text-3xl font-black text-slate-800 mb-6 tracking-tight">Contact for Returns & Refunds</h2>
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

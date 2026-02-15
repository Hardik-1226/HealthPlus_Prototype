
'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Target, Users, Shield, Heart, Activity } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero Header */}
      <section className="bg-primary/5 py-16 md:py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute top-10 left-10 opacity-10 animate-pulse"><Activity className="h-12 w-12 text-primary" /></div>
        <div className="absolute bottom-10 right-10 opacity-10 animate-pulse delay-700"><Heart className="h-12 w-12 text-primary" /></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <Badge className="bg-primary/10 text-primary border-none uppercase text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-6">
            Our Journey
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tighter mb-6 leading-tight">
            Advancing Healthcare <br />
            <span className="text-primary">Through Innovation</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Dedicated to bringing safe, effective, and high-quality pharmaceutical solutions to every corner of India since 2020.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] w-full max-w-md mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 bg-white">
              <Image
                src={getImage('about-lab-main')}
                alt="Who We Are - HPI"
                fill
                className="object-contain"
                data-ai-hint="pharmaceutical lab"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-slate-800 tracking-tight flex items-center gap-3">
                  <Users className="text-primary h-8 w-8" /> Who We Are
                </h2>
                <div className="h-1.5 w-20 bg-primary rounded-full" />
              </div>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Health Plus Innovation (HPI) is a trusted pharmaceutical marketing and distribution company, established in 2020 with a mission to bring high-quality and affordable healthcare solutions to people. 
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                We specialize in promoting and marketing a diverse range of pharmaceutical brands to hospitals, clinics, and healthcare professionals across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">What We Do</h2>
            <div className="h-1.5 w-20 bg-primary rounded-full mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Target, 
                title: "Strategic Marketing", 
                text: "Promote and market reputed pharmaceutical brands in hospitals and clinics." 
              },
              { 
                icon: Shield, 
                title: "Essential Supply", 
                text: "Provide reliable supply of essential medicines where they are needed most." 
              },
              { 
                icon: CheckCircle2, 
                title: "Professional Education", 
                text: "Educate and remind healthcare professionals about our trusted products." 
              },
              { 
                icon: Heart, 
                title: "Ethical Standards", 
                text: "Maintain the highest standards of ethics and quality in every process." 
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-none shadow-lg rounded-[2.5rem] bg-white hover:translate-y-[-8px] transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose HPI */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">Why Choose HPI?</h2>
                <div className="h-1.5 w-20 bg-primary rounded-full" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Quality Products", text: "We partner only with manufacturers who meet strict quality standards." },
                  { title: "Strong Network", text: "Wide reach across hospitals and healthcare providers." },
                  { title: "Customer Focus", text: "Building lasting relationships through service and trust." },
                  { title: "Commitment to Health", text: "Every product we promote is aimed at improving patient outcomes." }
                ].map((reason, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-3xl bg-primary/5 border border-primary/10">
                    <div className="mt-1"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /></div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-800">{reason.title}</h4>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">{reason.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative h-[450px] w-full rounded-[4rem] overflow-hidden shadow-2xl group border-4 border-slate-50 bg-white">
              <Image
                src={getImage('about-quality-commitment')}
                alt="Why Choose HPI"
                fill
                className="object-contain"
                data-ai-hint="quality commitment"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-2xl font-black tracking-tight leading-tight">Driven by trust, sustained by quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

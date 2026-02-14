'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Target, Eye, ArrowRight, Heart, Pill, Plus, Activity, Star, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  const [designIndex, setDesignIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDesignIndex((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const partners = [
    { name: "Max Gurgaon", text: "Hospital Partner" },
    { name: "Max BLK", text: "Hospital Partner" },
    { name: "Max Saket", text: "Hospital Partner" },
    { name: "Yatharth Faridabad", text: "Hospital Partner" },
    { name: "Yatharth Sector 110", text: "Hospital Partner" },
    { name: "Yatharth Bisrakh", text: "Hospital Partner" },
    { name: "Yatharth Greater Noida", text: "Hospital Partner" },
    { name: "Fortis Mohali", text: "Hospital Partner" },
    { name: "Accord Faridabad", text: "Hospital Partner" },
    { name: "Marengo Asia Faridabad", text: "Hospital Partner" },
    { name: "Indian Spinal Injuries Centre", text: "Hospital Partner" },
    { name: "CK Birla Hospital, Gurgaon", text: "Hospital Partner" },
    { name: "Paras Hospital, Gurgaon", text: "Hospital Partner" },
    { name: "Paras Hospital, Panchkula", text: "Hospital Partner" },
    { name: "Artemis Hospital", text: "Hospital Partner" },
    { name: "Fortis NCR (Total Health)", text: "Hospital Partner" },
    { name: "Manipal Hospital, Ghaziabad", text: "Hospital Partner" },
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Container with Crossfade Logic */}
      <div className="relative h-[95vh] md:h-[90vh] w-full bg-slate-50">
        
        {/* DESIGN ONE: Innovation & Animations */}
        <div className={cn(
          "absolute inset-0 transition-opacity duration-1000 ease-in-out",
          designIndex === 0 ? "opacity-100 z-20" : "opacity-0 z-0 pointer-events-none"
        )}>
          <section className="relative h-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-white">
            <div className="absolute inset-0 bg-[#f0f9fa]/80 z-0" />
            
            {/* Hanging Icons Animation */}
            <div className="absolute top-0 inset-x-0 h-full pointer-events-none z-10 hidden md:flex justify-around opacity-30">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="flex flex-col items-center animate-bounce" 
                  style={{ 
                    animationDuration: `${12 + i * 3}s`, 
                    animationDelay: `${i * 0.5}s`,
                    marginTop: `${-10 + (i % 4) * 5}px` 
                  }}
                >
                  <div className="h-48 md:h-80 w-[1px] bg-slate-300"></div>
                  <div className="mt-2">
                    {i % 5 === 0 ? (
                      <Plus className="h-4 w-4 text-primary" />
                    ) : i % 5 === 1 ? (
                      <Heart className="h-4 w-4 text-primary/60" />
                    ) : i % 5 === 2 ? (
                      <Star className="h-3 w-3 text-slate-300" />
                    ) : i % 5 === 3 ? (
                      <Activity className="h-4 w-4 text-primary/40" />
                    ) : (
                      <Pill className="h-4 w-4 text-slate-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="container relative z-50 mx-auto px-4 flex flex-col items-center">
              <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-8 lg:gap-0">
                {/* Image on left */}
                <div className="hidden lg:block w-[300px] h-[450px] relative rounded-lg overflow-hidden shadow-2xl z-10 opacity-90 transition-all duration-700 hover:scale-105 border-4 border-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600"
                    alt="Wellness Illustration"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col items-center space-y-8 max-w-2xl text-center lg:px-4">
                  <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-800 leading-[1.1] uppercase">
                    EMPOWERING<br />
                    <span className="text-primary">WELLNESS</span><br />
                    THROUGH<br />
                    INNOVATION
                  </h1>
                  <p className="text-xs md:text-lg text-slate-500 max-w-md mx-auto font-bold leading-relaxed">
                    Reliable pharmaceutical products for hospitals, clinics & healthcare professionals across India.
                  </p>
                  <div className="pt-4 relative z-[60]">
                    <Button asChild size="lg" className="rounded-full px-12 h-14 md:h-16 text-sm md:text-lg bg-primary text-white hover:bg-primary/90 shadow-2xl transition-all font-black uppercase tracking-widest border-4 border-white cursor-pointer">
                      <Link href="/products">
                        Explore Our Products
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Images on right */}
                <div className="hidden lg:flex flex-col gap-10 items-center justify-center z-10">
                  <div className="h-40 w-40 rounded-full border-8 border-white shadow-2xl overflow-hidden relative">
                    <Image 
                      src="https://images.unsplash.com/photo-1576091160550-2173dad99a01?auto=format&fit=crop&q=80&w=300"
                      alt="Medical Professional"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="h-52 w-52 rounded-full border-8 border-white shadow-2xl overflow-hidden relative translate-x-12">
                    <Image 
                      src="https://images.unsplash.com/photo-1579152276532-535c21af1aa5?auto=format&fit=crop&q=80&w=400"
                      alt="Laboratory Research"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Wave element */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-20 pointer-events-none">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24 md:h-48 text-white fill-current">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
              </svg>
            </div>
          </section>
        </div>

        {/* DESIGN TWO: Institutional & Professional */}
        <div className={cn(
          "absolute inset-0 transition-opacity duration-1000 ease-in-out",
          designIndex === 1 ? "opacity-100 z-20" : "opacity-0 z-0 pointer-events-none"
        )}>
          <section className="relative h-full flex flex-col items-center justify-center px-4 overflow-hidden bg-slate-50">
            {/* Doctor Background - Shifted left to avoid right-aligned text */}
            <div className="absolute inset-0 w-full opacity-30 lg:opacity-40 z-0">
              <Image 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1920"
                alt="Doctor Background"
                fill
                className="object-cover object-left"
              />
            </div>

            {/* Decorative Blobs */}
            <div className="absolute top-10 right-0 w-1/3 h-1/2 opacity-20 hidden lg:block z-0 pointer-events-none">
              <div className="w-full h-full bg-primary rounded-bl-[10rem] animate-pulse" />
            </div>

            <div className="container relative z-50 mx-auto px-4 flex flex-col items-center lg:items-end text-center lg:text-right pb-40 md:pb-0">
              <div className="max-w-3xl space-y-4">
                <h1 className="text-4xl md:text-8xl font-black tracking-tight text-[#2d5a63] uppercase leading-none">
                  HEALTH PLUS<br />INNOVATION
                </h1>
                <p className="text-xl md:text-4xl font-medium text-slate-500 italic">
                  Wellness Starts Here.....
                </p>

                {/* Circular Product Thumbnails */}
                <div className="flex flex-wrap justify-center lg:justify-end gap-3 md:gap-6 pt-6 md:pt-12">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-14 w-14 md:h-24 md:w-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white hover:scale-110 transition-transform cursor-default">
                      <Image 
                        src={`https://picsum.photos/seed/hpi-p-${i}/200/200`}
                        alt="Product Preview"
                        width={200}
                        height={200}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="pt-8 md:pt-10 relative z-[60]">
                  <Button asChild size="lg" className="rounded-full px-10 h-12 md:h-14 text-xs md:text-md bg-[#2d5a63] text-white hover:bg-[#2d5a63]/90 shadow-xl font-bold uppercase tracking-widest border-2 border-white/20 cursor-pointer">
                    <Link href="/products">
                      Shop our Products
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom Contact Bar */}
            <div className="absolute bottom-6 md:bottom-10 w-full px-4 z-40">
              <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-12">
                 <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 md:px-6 py-2.5 rounded-full shadow-lg border border-white/50 w-full md:w-auto justify-center transition-all hover:bg-white">
                    <div className="bg-[#2d5a63] p-1.5 rounded-full shrink-0"><Mail className="h-3.5 w-3.5 text-white" /></div>
                    <span className="text-[10px] md:text-sm font-black text-slate-700 truncate">innovateplushealth@gmail.com</span>
                 </div>
                 <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 md:px-6 py-2.5 rounded-full shadow-lg border border-white/50 w-full md:w-auto justify-center transition-all hover:bg-white">
                    <div className="bg-[#2d5a63] p-1.5 rounded-full shrink-0"><Phone className="h-3.5 w-3.5 text-white" /></div>
                    <span className="text-[10px] md:text-sm font-black text-slate-700">+91 9266903156</span>
                 </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Static Content Below Hero */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 md:pl-16">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight uppercase">
                  About <span className="text-primary">Health Plus Innovation</span>
                </h2>
                <div className="h-1.5 w-24 bg-primary rounded-full" />
              </div>
              <div className="space-y-6 text-slate-600 font-medium text-base md:text-lg leading-relaxed text-justify">
                <p>
                  <strong>Health Plus Innovation Pvt. Ltd.</strong> is a leading pharmaceutical company founded in 2020. We are dedicated to delivering <strong>safe, effective, and high-quality medicines</strong> to healthcare providers and institutions across the nation.
                </p>
                <p>
                  Our operations are built on a foundation of <strong>trust and professional ethics</strong>, ensuring that every product in our catalog meets rigorous clinical standards for patient safety and well-being.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[450px] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 border-slate-50 group">
              <Image
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=800"
                alt="HPI Quality Commitment"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:pl-16">
            <Card className="p-8 md:p-12 border-none shadow-2xl bg-white rounded-[2.5rem] md:rounded-[3rem] hover:translate-y-[-10px] transition-all duration-500 group">
               <div className="h-20 w-20 md:h-24 md:w-24 bg-primary/10 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center mb-8 md:mb-10 group-hover:bg-primary/20 transition-colors">
                <Eye className="h-10 w-10 md:h-12 md:w-12 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-6 uppercase tracking-tight">Our Vision</h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify font-medium">
                To be the <strong>pioneering force</strong> in pharmaceutical innovation, recognized for our <strong>unwavering commitment to quality</strong> and our role in shaping a healthier future for the Indian healthcare landscape.
              </p>
            </Card>
            <Card className="p-8 md:p-12 border-none shadow-2xl bg-white rounded-[2.5rem] md:rounded-[3rem] hover:translate-y-[-10px] transition-all duration-500 group">
               <div className="h-20 w-20 md:h-24 md:w-24 bg-accent/10 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center mb-8 md:mb-10 group-hover:bg-accent/20 transition-colors">
                <Target className="h-10 w-10 md:h-12 md:w-12 text-accent-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-6 uppercase tracking-tight">Our Mission</h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify font-medium">
                At <strong>Health Plus Innovation</strong>, we bridge the gap between <strong>scientific advancement and patient care</strong> by providing affordable, clinical-grade formulations through ethical distribution networks.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Hospital Network */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-6 uppercase tracking-tight">Trusted Institutional Network</h2>
          <p className="text-slate-500 text-[10px] md:text-sm font-black uppercase tracking-[0.3em] max-w-2xl mx-auto">Providing essential supplies to India's most prestigious healthcare centers.</p>
        </div>
        
        <div className="container mx-auto px-4 md:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {partners.slice(0, 12).map((partner, index) => (
              <div key={index} className="flex flex-col items-center p-6 md:p-10 bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-500 text-center space-y-4 md:space-y-6 group border border-slate-100">
                <div className="relative h-16 w-24 md:h-24 md:w-36 opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                  <Image
                    src={`https://picsum.photos/seed/hpi-inst-${index}/400/200`}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-black text-xs md:text-sm text-slate-800 leading-tight group-hover:text-primary transition-colors line-clamp-2">{partner.name}</h4>
                  <p className="text-[8px] md:text-[10px] text-primary font-black uppercase tracking-[0.2em] mt-2">{partner.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

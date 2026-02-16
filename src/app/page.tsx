'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Target, Eye, ArrowRight, Heart, Pill, Plus, Activity, Star, Mail, Phone, MapPin, ClipboardList } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PRODUCTS } from '@/lib/products';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const [designIndex, setDesignIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDesignIndex((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

  const partners = [
    { id: "partner-logo-max-gurgaon", name: "Max Gurgaon", text: "Hospital Partner" },
    { id: "partner-logo-max-blk", name: "Max BLK", text: "Hospital Partner" },
    { id: "partner-logo-max-saket", name: "Max Saket", text: "Hospital Partner" },
    { id: "partner-logo-yatharth-faridabad", name: "Yatharth Faridabad", text: "Hospital Partner" },
    { id: "partner-logo-yatharth-sector-110", name: "Yatharth Sector 110", text: "Hospital Partner" },
    { id: "partner-logo-yatharth-bisrakh", name: "Yatharth Bisrakh", text: "Hospital Partner" },
    { id: "partner-logo-yatharth-greater-noida", name: "Yatharth Greater Noida", text: "Hospital Partner" },
    { id: "partner-logo-fortis-mohali", name: "Fortis Mohali", text: "Hospital Partner" },
    { id: "partner-logo-paras-gurugram", name: "Paras Hospitals - Gurugram", text: "Hospital Partner" },
    { id: "partner-logo-paras-panchkula", name: "Paras Hospitals - Panchkula", text: "Hospital Partner" },
    { id: "partner-logo-artemis-gurugram", name: "Artemis Hospitals - Gurugram", text: "Hospital Partner" },
    { id: "partner-logo-fortis-ncr", name: "Fortis Hospitals - NCR", text: "Hospital Partner" },
    { id: "partner-logo-manipal-ghaziabad", name: "Manipal Hospital - Ghaziabad", text: "Hospital Partner" },
    { id: "partner-logo-accord-faridabad", name: "Accord Faridabad", text: "Hospital Partner" },
    { id: "partner-logo-marengo-asia", name: "Marengo Asia Faridabad", text: "Hospital Partner" },
    { id: "partner-logo-indian-spinal", name: "Indian Spinal Injuries Centre", text: "Hospital Partner" },
    { id: "partner-logo-ck-birla", name: "CK Birla Hospital, Gurgaon", text: "Hospital Partner" },
  ];

  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Container */}
      <div className="relative h-[95vh] md:h-[90vh] w-full bg-slate-50">
        
        {/* DESIGN ONE: Innovation & Animations */}
        <div className={cn(
          "absolute inset-0 transition-opacity duration-1000 ease-in-out",
          designIndex === 0 ? "opacity-100 z-20" : "opacity-0 z-0 pointer-events-none"
        )}>
          <section className="relative h-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-white">
            <div className="absolute inset-0 bg-[#f0f9fa]/80 z-0" />
            
            {/* Background Decorations */}
            <div className="absolute top-0 inset-x-0 h-full pointer-events-none z-10 hidden md:flex justify-around opacity-30">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="flex flex-col items-center animate-bounce" style={{ animationDuration: `${12 + i * 3}s`, animationDelay: `${i * 0.5}s`, marginTop: `${-10 + (i % 4) * 5}px` }}>
                  <div className="h-48 md:h-80 w-[1px] bg-slate-300"></div>
                  <div className="mt-2">
                    {i % 5 === 0 ? <Plus className="h-4 w-4 text-primary" /> : i % 5 === 1 ? <Heart className="h-4 w-4 text-primary/60" /> : <Star className="h-3 w-3 text-slate-300" />}
                  </div>
                </div>
              ))}
            </div>

            <div className="container relative z-30 mx-auto px-4 flex flex-col items-center">
              <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-8 lg:gap-0">
                  <div className="hidden lg:block w-[300px] h-[450px] relative rounded-lg overflow-hidden shadow-2xl z-0 opacity-90 border-4 border-white">
                  <Image src={getImage('hero-wellness-illustration')} alt="Wellness Illustration" fill className="object-contain" data-ai-hint="wellness illustration" />
                </div>

                <div className="flex flex-col items-center space-y-8 max-w-2xl text-center lg:px-4">
                  <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-800 leading-[1.1] uppercase">
                    EMPOWERING<br /><span className="text-primary">WELLNESS</span><br />THROUGH<br />INNOVATION
                  </h1>
                  <p className="text-xs md:text-lg text-slate-500 max-w-md mx-auto font-bold leading-relaxed">
                    Institutional pharmaceutical solutions for healthcare centers across India.
                  </p>
                  <div className="pt-4">
                    <Button asChild size="lg" className="rounded-full px-12 h-14 md:h-16 text-sm md:text-lg bg-primary text-white hover:bg-primary/90 shadow-2xl transition-all font-black uppercase tracking-widest border-4 border-white">
                      <Link href="/products">Explore Our Catalog</Link>
                    </Button>
                  </div>
                </div>

                <div className="hidden lg:flex flex-col gap-10 items-center justify-center z-0">
                  <div className="h-40 w-40 rounded-full border-8 border-white shadow-2xl overflow-hidden relative">
                    <Image src={getImage('hero-medical-professional')} alt="Medical Professional" fill className="object-cover object-center" data-ai-hint="medical professional" />
                  </div>
                  <div className="h-52 w-52 rounded-full border-8 border-white shadow-2xl overflow-hidden relative translate-x-12">
                    <Image src={getImage('hero-lab-research')} alt="Laboratory Research" fill className="object-cover object-center" data-ai-hint="laboratory research" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-10 pointer-events-none">
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
            <div className="absolute inset-0 w-full opacity-30 lg:opacity-40 z-0 overflow-hidden">
              <Image 
                src={getImage('hero-doctor-background')} 
                alt="Doctor Background" 
                fill 
                className="object-cover object-center lg:scale-105 transition-transform duration-700" 
                data-ai-hint="doctor background" 
              />
            </div>

            <div className="container relative z-50 mx-auto px-4 flex flex-col items-center lg:items-end text-center lg:text-right pb-48 md:pb-0">
              <div className="max-w-3xl space-y-4">
                <h1 className="text-4xl md:text-8xl font-black tracking-tight text-[#2d5a63] uppercase leading-none">
                  HEALTH PLUS<br />INNOVATION
                </h1>
                <p className="text-xl md:text-4xl font-medium text-slate-500 italic">Wellness Starts Here.....</p>

                <div className="pt-8 md:pt-10">
                  <Button asChild size="lg" className="rounded-full px-10 h-12 md:h-14 text-xs md:text-md bg-[#2d5a63] text-white hover:bg-[#2d5a63]/90 shadow-xl font-bold uppercase tracking-widest border-2 border-white/20">
                    <Link href="/products">Shop Our Products</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 md:bottom-10 w-full px-4 z-40">
              <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-12">
                 <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 md:px-6 py-2.5 rounded-full shadow-lg border border-white/50 w-full md:w-auto justify-center">
                    <div className="bg-[#2d5a63] p-1.5 rounded-full shrink-0"><Mail className="h-3.5 w-3.5 text-white" /></div>
                    <span className="text-[10px] md:text-sm font-black text-slate-700">innovateplushealth@gmail.com</span>
                 </div>
                 <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 md:px-6 py-2.5 rounded-full shadow-lg border border-white/50 w-full md:w-auto justify-center">
                    <div className="bg-[#2d5a63] p-1.5 rounded-full shrink-0"><Phone className="h-3.5 w-3.5 text-white" /></div>
                    <span className="text-[10px] md:text-sm font-black text-slate-700">+91 9266903156</span>
                 </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 md:pl-16">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight uppercase">About <span className="text-primary">Us</span></h2>
                <div className="h-1.5 w-24 bg-primary rounded-full" />
              </div>
              <div className="space-y-6 text-slate-600 font-medium text-base md:text-lg leading-relaxed text-justify">
                <p><strong>Health Plus Innovation Pvt. Ltd.</strong> is a leading pharmaceutical marketing firm dedicated to delivering <strong>safe, effective, and high-quality solutions</strong> to healthcare providers across India.</p>
                <p>Our institutional network ensures that clinical-grade formulations are available where they are needed most, backed by professional ethics and technical support.</p>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-50 bg-white">
              <Image src={getImage('about-quality-commitment')} alt="Quality Commitment" fill className="object-contain" data-ai-hint="quality commitment" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-slate-50 relative z-10">
        <div className="container mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight uppercase">Featured <span className="text-primary">Formulations</span></h2>
              <div className="h-1.5 w-24 bg-primary rounded-full" />
            </div>
            <Link href="/products">
              <Button variant="outline" className="rounded-full border-primary text-primary font-black uppercase tracking-widest text-[10px] h-12 px-8 hover:bg-primary hover:text-white transition-all">
                View Full Catalog <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <Card className="group flex flex-col h-full border-none shadow-xl rounded-[3rem] overflow-hidden hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-500 bg-white">
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <Image src={product.imageUrl} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/95 text-primary border-none font-black px-4 py-1.5 rounded-full shadow-md text-[9px] uppercase tracking-widest">{product.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="font-black text-lg mb-2 line-clamp-1 text-slate-800 group-hover:text-primary transition-colors uppercase tracking-tight">{product.name}</h3>
                    <p className="text-[10px] text-slate-500 mb-4 line-clamp-2 leading-relaxed font-medium">{product.description}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-[8px] font-black text-primary uppercase tracking-[0.2em]">Institutional Grade</span>
                      <div className="h-10 w-10 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all"><ClipboardList className="h-4 w-4" /></div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Trusted Partner */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-6 uppercase tracking-tight">Our Trusted Partner</h2>
          <p className="text-slate-500 text-[10px] md:text-sm font-black uppercase tracking-[0.3em] max-w-2xl mx-auto">Supporting India's prestigious healthcare centers.</p>
        </div>
        
        <div className="container mx-auto px-4 md:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-slate-50 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 text-center space-y-4 group border border-slate-100">
                <div className="relative h-16 w-24 md:h-20 md:w-32 opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                  <Image
                    src={getImage(partner.id)}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    data-ai-hint="partner logo"
                  />
                </div>
                <div>
                  <h4 className="font-black text-xs text-slate-800 leading-tight group-hover:text-primary transition-colors line-clamp-2">{partner.name}</h4>
                  <p className="text-[8px] text-primary font-black uppercase tracking-[0.2em] mt-2">{partner.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

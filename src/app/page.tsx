import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PRODUCTS } from '@/lib/products';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Target, Eye, ArrowRight, Heart, Pill, Plus, Activity, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-image');

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
      {/* Visual Themed Hero Section */}
      <section className="relative hero-gradient min-h-[50vh] flex flex-col items-center justify-center text-center px-4 pt-12 pb-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="absolute top-0 left-[10%] animate-bounce duration-[3000ms]"><div className="h-10 w-[1px] bg-primary mx-auto"></div><Heart className="text-primary h-4 w-4" /></div>
          <div className="absolute top-0 right-[15%] animate-pulse"><Plus className="text-accent h-6 w-6" /></div>
        </div>

        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="flex flex-col items-center space-y-6">
            <Badge className="bg-primary/10 text-primary border-none uppercase text-[10px] font-black tracking-[0.3em] px-4 py-1.5 rounded-full mb-2">
              Innovative Healthcare Solutions
            </Badge>
            <h1 className="text-3xl md:text-6xl font-black tracking-tight text-slate-800 leading-[1.1] uppercase">
              Empowering <span className="text-primary">Wellness</span><br />
              Through Innovation
            </h1>
            <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Reliable pharmaceutical products for hospitals, clinics, and healthcare professionals across India.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="rounded-full px-10 h-14 text-sm bg-primary text-white hover:bg-primary/90 shadow-xl transition-all font-black uppercase tracking-widest">
                  Explore Products
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-sm border-primary/20 text-slate-700 hover:bg-slate-50 transition-all font-black uppercase tracking-widest">
                  Our Journey
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-justify">
              <h2 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight uppercase">
                About <span className="text-primary">Health Plus Innovation</span>
              </h2>
              <div className="h-1.5 w-20 bg-primary rounded-full" />
              <p className="text-base text-slate-600 leading-relaxed">
                <strong>Health Plus Innovation Pvt. Ltd.</strong> is a pharmaceutical company founded in 2020 with a strong commitment to improving healthcare through <strong>safe, reliable, and innovative medicines</strong>. We focus on providing high-quality pharmaceutical products to hospitals, clinics, and healthcare professionals across India.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                What makes <strong>Health Plus Innovation</strong> different is our focus on <strong>trust, quality, and consistency</strong>. We believe in building <strong>long-term relationships</strong> with healthcare providers by offering exceptional service and verified clinical efficacy.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              <Image
                src={aboutImage?.imageUrl || ''}
                alt="HPI Quality Assurance"
                fill
                className="object-cover"
                data-ai-hint="quality assurance"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="p-8 border-none shadow-xl bg-white rounded-[2.5rem] hover:translate-y-[-8px] transition-all duration-300">
               <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-black text-slate-800 mb-4 uppercase tracking-tight">Our Vision</h2>
              <p className="text-slate-600 text-base leading-relaxed text-justify">
                Our vision is to become a <strong>recognized and respected leader</strong> in the pharmaceutical marketing industry, known for our dedication to <strong>quality, innovation, and patient-centric solutions</strong>. We aim to set the gold standard for clinical reliability in the Indian market.
              </p>
            </Card>
            <Card className="p-8 border-none shadow-xl bg-white rounded-[2.5rem] hover:translate-y-[-8px] transition-all duration-300">
               <div className="h-16 w-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-accent-foreground" />
              </div>
              <h2 className="text-3xl font-black text-slate-800 mb-4 uppercase tracking-tight">Our Mission</h2>
              <p className="text-slate-600 text-base leading-relaxed text-justify">
                At <strong>Health Plus Innovation (HPI)</strong>, our mission is to deliver <strong>high-quality, effective, and affordable pharmaceutical products</strong> to institutions through <strong>ethical marketing and reliable distribution</strong>. We bridge the gap between innovation and patient care.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-16 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Therapeutic Catalog</h2>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Premium medicines for institutional care</p>
          </div>
          <Link href="/products">
            <Button variant="link" className="text-primary font-black uppercase tracking-widest text-xs flex items-center gap-2 group p-0">
              View Entire Collection <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="container mx-auto px-4 md:px-16">
          <Carousel className="w-full" opts={{ align: 'start', loop: true }}>
            <CarouselContent className="-ml-4">
              {PRODUCTS.map((product) => (
                <CarouselItem key={product.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Link href={`/products/${product.id}`}>
                    <Card className="hover:shadow-2xl transition-all duration-500 h-full border-none shadow-lg rounded-[2rem] overflow-hidden group bg-white">
                      <CardContent className="p-0">
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-white/90 text-primary font-black px-3 py-1 rounded-full shadow-md border-none text-[9px] uppercase tracking-widest">
                              {product.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-primary transition-colors">{product.name}</h3>
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-primary font-black text-xl">₹{product.price.toFixed(2)}</span>
                            <span className="text-slate-400 line-through text-xs font-bold">₹{product.mrp.toFixed(2)}</span>
                          </div>
                          <Button className="w-full rounded-full h-12 bg-primary text-white font-black uppercase tracking-widest text-xs group-hover:bg-primary/90 transition-all">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden xl:flex -left-12 h-12 w-12 border-primary/20" />
            <CarouselNext className="hidden xl:flex -right-12 h-12 w-12 border-primary/20" />
          </Carousel>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-4xl font-black text-slate-800 mb-4 uppercase tracking-tight">Hospital Network</h2>
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest max-w-2xl mx-auto">Collaborating with India's most respected healthcare institutions.</p>
        </div>
        
        <div className="container mx-auto px-4 md:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {partners.slice(0, 12).map((partner, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white rounded-[2rem] shadow-md hover:shadow-xl hover:translate-y-[-6px] transition-all duration-300 text-center space-y-3 group border border-slate-100">
                <div className="relative h-16 w-24 opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                  <Image
                    src={`https://picsum.photos/seed/hpi-p${index}/400/200`}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    data-ai-hint="partner logo"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] md:text-xs text-slate-800 leading-tight group-hover:text-primary transition-colors line-clamp-2">{partner.name}</h4>
                  <p className="text-[8px] text-primary font-black uppercase tracking-[0.2em] mt-1">{partner.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

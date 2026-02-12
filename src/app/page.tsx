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
      <section className="relative hero-gradient min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-20 pb-24">
        {/* Decorative Hanging Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-0 left-[10%] animate-bounce duration-[3000ms]"><div className="h-16 w-[1px] bg-primary mx-auto"></div><Heart className="text-primary h-5 w-5" /></div>
          <div className="absolute top-0 left-[25%] animate-bounce duration-[4000ms]"><div className="h-24 w-[1px] bg-accent mx-auto"></div><Star className="text-accent h-5 w-5" /></div>
          <div className="absolute top-0 left-[40%] animate-bounce duration-[3500ms]"><div className="h-20 w-[1px] bg-primary mx-auto"></div><Heart className="text-primary h-4 w-4" /></div>
          <div className="absolute top-0 left-[60%] animate-bounce duration-[4500ms]"><div className="h-28 w-[1px] bg-accent mx-auto"></div><Star className="text-accent h-6 w-6" /></div>
          <div className="absolute top-0 left-[75%] animate-bounce duration-[3200ms]"><div className="h-20 w-[1px] bg-primary mx-auto"></div><Pill className="text-primary h-5 w-5" /></div>
          <div className="absolute top-0 left-[90%] animate-bounce duration-[3800ms]"><div className="h-14 w-[1px] bg-accent mx-auto"></div><Heart className="text-accent h-4 w-4" /></div>

          <div className="absolute top-10 left-10 animate-pulse"><Activity className="text-primary h-6 w-6" /></div>
          <div className="absolute top-40 left-[15%] animate-pulse duration-[3000ms]"><Star className="text-accent h-4 w-4" /></div>
          <div className="absolute bottom-20 left-[5%] animate-pulse duration-[4000ms]"><Heart className="text-primary h-8 w-8" /></div>
          <div className="absolute top-20 right-20 animate-pulse"><Plus className="text-accent h-8 w-8" /></div>
          <div className="absolute bottom-40 right-[10%] animate-pulse duration-[3500ms]"><Star className="text-primary h-10 w-10" /></div>
          <div className="absolute top-[60%] right-[30%] animate-pulse duration-[5000ms]"><Heart className="text-accent h-6 w-6" /></div>
        </div>

        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
            <div className="hidden lg:block relative w-1/4 h-[250px]">
               <Image 
                src="https://picsum.photos/seed/doc1/400/600" 
                alt="Healthcare Professionals" 
                width={250} 
                height={375} 
                className="object-contain"
              />
            </div>

            <div className="flex-1 space-y-4">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-800 leading-tight">
                EMPOWERING<br />
                <span className="text-primary">WELLNESS</span> THROUGH<br />
                INNOVATION
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto font-medium">
                Reliable pharmaceutical products for hospitals, clinics & healthcare professionals across India.
              </p>
              <div className="pt-6">
                <Link href="/products">
                  <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-primary text-white hover:bg-primary/90 shadow-lg transition-all font-bold">
                    Explore Our Products
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex flex-col gap-4 w-1/4 items-center">
              <div className="h-28 w-28 rounded-full border-4 border-white shadow-md overflow-hidden">
                <Image src="https://picsum.photos/seed/lab1/300/300" alt="Lab" width={150} height={150} className="object-cover" />
              </div>
              <div className="h-32 w-32 rounded-full border-4 border-white shadow-md overflow-hidden translate-x-6">
                <Image src="https://picsum.photos/seed/lab2/300/300" alt="Research" width={180} height={180} className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="wave-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:pl-16">
              <div className="inline-block">
                <h2 className="text-3xl font-bold text-slate-800 relative">
                  About Health Plus Innovation
                  <span className="absolute -bottom-2 left-0 w-20 h-1 bg-primary rounded-full" />
                </h2>
              </div>
              <p className="text-md text-slate-600 leading-relaxed text-justify">
                <span className="font-bold text-slate-800">Health Plus Innovation Pvt. Ltd.</span> is a pharmaceutical company founded in 2020 with a strong commitment to improving healthcare through <span className="font-bold text-primary">safe, reliable, and innovative medicines</span>. We focus on providing high-quality pharmaceutical products to hospitals, clinics, and healthcare professionals across India.
              </p>
              <p className="text-md text-slate-600 leading-relaxed text-justify">
                What makes <span className="font-bold text-slate-800">Health Plus Innovation</span> different is our focus on <span className="font-bold text-primary">trust, quality, and consistency</span>. We believe in building <span className="font-bold text-slate-800">long-term relationships</span> with healthcare providers by offering exceptional service.
              </p>
              <div className="pt-2">
                <Link href="/about">
                  <Button variant="outline" className="rounded-full px-8 h-12 text-md border-primary text-primary hover:bg-primary/10 transition-all">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[250px] rounded-[3rem] overflow-hidden shadow-xl border-4 border-slate-50 mx-auto w-full max-w-sm">
              <Image
                src={aboutImage?.imageUrl || ''}
                alt="HPI Quality Control"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-10 border-none shadow-lg bg-white rounded-[2.5rem] hover:translate-y-[-5px] transition-transform duration-300">
               <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Our Vision</h2>
              <p className="text-slate-600 text-sm leading-relaxed text-justify">
                Our vision is to become a <span className="font-bold text-slate-800">recognized and respected leader</span> in the pharmaceutical marketing industry, known for our dedication to <span className="font-bold text-primary">quality, innovation, and patient-centric solutions</span>. What makes <span className="font-bold text-slate-800">Health Plus Innovation</span> different is our unwavering focus on <span className="font-bold text-primary">trust, quality, and consistency</span>. We believe in building <span className="font-bold text-slate-800">long-term relationships</span> with healthcare providers by offering not only good products but also strong support.
              </p>
            </Card>
            <Card className="p-10 border-none shadow-lg bg-white rounded-[2.5rem] hover:translate-y-[-5px] transition-transform duration-300">
               <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-accent-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Our Mission</h2>
              <p className="text-slate-600 text-sm leading-relaxed text-justify">
                At <span className="font-bold text-slate-800">Health Plus Innovation (HPI)</span>, our mission is to deliver <span className="font-bold text-primary">high-quality, effective, and affordable pharmaceutical products</span> to healthcare professionals and institutions through <span className="font-bold text-slate-800">ethical marketing and reliable distribution</span>. We aim to bridge the gap between pharmaceutical manufacturers and hospitals by ensuring that <span className="font-bold text-primary">trusted medicines</span> reach the patients who need them most.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Carousel */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 mb-10 flex justify-between items-end md:pl-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">Therapeutic Products</h2>
            <p className="text-slate-500 text-md mt-1 font-medium">Quality medicines for healthcare settings.</p>
          </div>
          <Link href="/products">
            <Button variant="link" className="text-primary text-md font-bold flex items-center gap-2 group p-0">
              View Catalog <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="container mx-auto px-4 md:pl-16">
          <Carousel className="w-full" opts={{ align: 'start', loop: true }}>
            <CarouselContent className="-ml-4">
              {PRODUCTS.map((product) => (
                <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Link href={`/products/${product.id}`}>
                    <Card className="hover:shadow-xl transition-all duration-500 h-full border-none shadow-md rounded-[2rem] overflow-hidden group">
                      <CardContent className="p-0">
                        <div className="relative h-32 w-full overflow-hidden">
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute top-3 right-3">
                            <Badge className="bg-white/90 text-primary font-bold px-3 py-1 rounded-full shadow-sm border-none text-[10px]">
                              {product.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-1 text-slate-800 group-hover:text-primary transition-colors">{product.name}</h3>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-primary font-black text-lg">₹{product.price.toFixed(2)}</span>
                            <span className="text-slate-400 line-through text-xs font-bold">₹{product.mrp.toFixed(2)}</span>
                          </div>
                          <Button variant="outline" className="w-full rounded-full h-10 border-2 border-primary text-primary font-bold text-xs group-hover:bg-primary group-hover:text-white transition-all">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Our Trusted Hospital Network</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">Collaborating with India's leading healthcare institutions.</p>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white rounded-[2rem] shadow-sm hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 text-center space-y-3 group border border-slate-100">
                <div className="relative h-12 w-20 opacity-100 transition-transform duration-500 group-hover:scale-125">
                  <Image
                    src={`https://picsum.photos/seed/partner${index}/300/150`}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[12px] text-slate-800 leading-tight group-hover:text-primary transition-colors">{partner.name}</h4>
                  <p className="text-[9px] text-primary font-black uppercase tracking-widest mt-0.5">{partner.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

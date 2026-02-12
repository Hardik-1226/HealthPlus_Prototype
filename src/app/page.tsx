import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PRODUCTS } from '@/lib/products';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Target, Eye, ArrowRight, Heart, Pill, Plus, Activity, Star, Stethoscope } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-image');
  const doc1 = PlaceHolderImages.find(img => img.id === 'doctor-1');
  const doc2 = PlaceHolderImages.find(img => img.id === 'doctor-2');
  const circle1 = PlaceHolderImages.find(img => img.id === 'med-circle-1');
  const circle2 = PlaceHolderImages.find(img => img.id === 'med-circle-2');

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
      <section className="relative bg-[#f0f9fa] min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-20 pb-24 overflow-hidden">
        
        {/* Hanging Icons - Animation Layer - Slower Durations */}
        <div className="absolute top-0 inset-x-0 h-64 pointer-events-none z-0 hidden md:flex justify-around opacity-60">
          <div className="flex flex-col items-center animate-bounce" style={{ animationDuration: '6s' }}>
            <div className="h-24 w-[1px] bg-slate-300"></div>
            <Plus className="h-6 w-6 text-primary" />
          </div>
          <div className="flex flex-col items-center animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }}>
            <div className="h-32 w-[1px] bg-slate-300"></div>
            <Heart className="h-5 w-5 text-accent fill-accent" />
          </div>
          <div className="flex flex-col items-center animate-bounce" style={{ animationDuration: '7s', animationDelay: '2s' }}>
            <div className="h-20 w-[1px] bg-slate-300"></div>
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          </div>
          <div className="flex flex-col items-center animate-pulse" style={{ animationDuration: '9s', animationDelay: '0.5s' }}>
            <div className="h-40 w-[1px] bg-slate-300"></div>
            <Stethoscope className="h-6 w-6 text-slate-400" />
          </div>
          <div className="flex flex-col items-center animate-bounce" style={{ animationDuration: '8.5s', animationDelay: '3s' }}>
            <div className="h-28 w-[1px] bg-slate-300"></div>
            <Star className="h-4 w-4 text-yellow-400" />
          </div>
          <div className="flex flex-col items-center animate-pulse" style={{ animationDuration: '7.5s', animationDelay: '1.5s' }}>
            <div className="h-36 w-[1px] bg-slate-300"></div>
            <Heart className="h-6 w-6 text-accent" />
          </div>
        </div>

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="flex flex-col items-center space-y-8">
            <h1 className="text-4xl md:text-7xl font-black tracking-tight text-slate-800 leading-[1.1] uppercase">
              EMPOWERING<br />
              <span className="text-slate-800">WELLNESS THROUGH</span><br />
              <span className="text-primary">INNOVATION</span>
            </h1>
            <p className="text-sm md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed px-4">
              Reliable pharmaceutical products for hospitals, clinics & healthcare professionals across India.
            </p>
            <div className="pt-6">
              <Link href="/products">
                <Button size="lg" className="rounded-full px-12 h-16 text-lg bg-[#3AB8C5] text-white hover:bg-[#32a2ae] shadow-xl transition-all font-black uppercase tracking-widest">
                  Explore Our Products
                </Button>
              </Link>
            </div>
          </div>

          {/* Illustrations - Adjusted to avoid overlap on small container widths */}
          <div className="absolute bottom-0 left-0 hidden xl:flex items-end pointer-events-none opacity-40 xl:opacity-100 transition-opacity">
            <div className="relative h-[250px] w-[180px] animate-in slide-in-from-bottom duration-1000">
              <Image src={doc1?.imageUrl || ''} alt="Doctor 1" fill className="object-contain" />
            </div>
            <div className="relative h-[300px] w-[220px] -ml-16 animate-in slide-in-from-bottom duration-1000 delay-200">
              <Image src={doc2?.imageUrl || ''} alt="Doctor 2" fill className="object-contain" />
            </div>
          </div>

          {/* Feature Circles - Adjusted to avoid overlap */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 pointer-events-none opacity-40 xl:opacity-100 transition-opacity">
            <div className="h-28 w-28 rounded-full border-4 border-white shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-1000 delay-500">
              <Image src={circle1?.imageUrl || ''} alt="Med 1" fill className="object-cover" />
            </div>
            <div className="h-36 w-36 rounded-full border-4 border-white shadow-2xl overflow-hidden relative -mr-6 animate-in fade-in zoom-in duration-1000 delay-700">
              <Image src={circle2?.imageUrl || ''} alt="Med 2" fill className="object-cover" />
            </div>
          </div>
        </div>
        
        {/* Wave Decorative Blob - Bottom Right */}
        <div className="absolute bottom-0 right-0 h-40 w-40 bg-primary/10 rounded-tl-full -mr-10 -mb-10 pointer-events-none"></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-justify md:pl-16">
              <h2 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight uppercase">
                About <span className="text-primary">Health Plus Innovation</span>
              </h2>
              <div className="h-1.5 w-20 bg-primary rounded-full" />
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Health Plus Innovation Pvt. Ltd.</strong> is a pharmaceutical company founded in 2020 with a strong commitment to improving healthcare through <strong>safe, reliable, and innovative medicines</strong>. We focus on providing high-quality pharmaceutical products to hospitals, clinics, and healthcare professionals across India.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:pl-16">
            <Card className="p-10 border-none shadow-xl bg-white rounded-[2.5rem] hover:translate-y-[-8px] transition-all duration-300">
               <div className="h-20 w-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl font-black text-slate-800 mb-6 uppercase tracking-tight">Our Vision</h2>
              <p className="text-slate-600 text-lg leading-relaxed text-justify">
                Our vision is to become a <strong>recognized and respected leader</strong> in the pharmaceutical marketing industry, known for our dedication to <strong>quality, innovation, and patient-centric solutions</strong>. We aim to set the gold standard for clinical reliability in the Indian market.
              </p>
            </Card>
            <Card className="p-10 border-none shadow-xl bg-white rounded-[2.5rem] hover:translate-y-[-8px] transition-all duration-300">
               <div className="h-20 w-20 bg-accent/10 rounded-2xl flex items-center justify-center mb-8">
                <Target className="h-10 w-10 text-accent-foreground" />
              </div>
              <h2 className="text-3xl font-black text-slate-800 mb-6 uppercase tracking-tight">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed text-justify">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {partners.slice(0, 12).map((partner, index) => (
              <div key={index} className="flex flex-col items-center p-8 bg-white rounded-[2rem] shadow-md hover:shadow-xl hover:translate-y-[-6px] transition-all duration-300 text-center space-y-4 group border border-slate-100">
                <div className="relative h-20 w-32 opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                  <Image
                    src={`https://picsum.photos/seed/hpi-p${index}/400/200`}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    data-ai-hint="partner logo"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base text-slate-800 leading-tight group-hover:text-primary transition-colors line-clamp-2">{partner.name}</h4>
                  <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mt-2">{partner.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

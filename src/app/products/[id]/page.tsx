'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { PRODUCTS } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  ChevronLeft, 
  ShoppingCart, 
  Plus, 
  Minus, 
  CheckCircle2, 
  Info, 
  Activity, 
  Beaker,
  AlertTriangle,
  Stethoscope,
  ArrowRight,
  Star,
  User,
  MessageSquare
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [reviewForm, setReviewForm] = useState({ name: '', rating: 5, comment: '' });

  const product = PRODUCTS.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(product?.imageUrl || '');

  const mockReviews = [
    { id: 1, name: "Dr. Ananya Sharma", rating: 5, date: "2 months ago", comment: "Excellent quality and very effective for patients. HPI delivery was prompt." },
    { id: 2, name: "MediClinic Pharmacy", rating: 4, date: "3 weeks ago", comment: "The packaging is professional and the stability of the drug is reliable." },
    { id: 3, name: "Rajesh V.", rating: 5, date: "1 month ago", comment: "The best Q10 supplement I've recommended so far. Patients report high vitality." }
  ];

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    let matches = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id);
    if (matches.length < 5) {
      const others = PRODUCTS.filter(p => p.category !== product.category && p.id !== product.id);
      const shuffledOthers = [...others].sort(() => 0.5 - Math.random());
      matches = [...matches, ...shuffledOthers.slice(0, 5 - matches.length)];
    }
    return matches.slice(0, 5);
  }, [product]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-xl font-bold mb-4 text-slate-800">Product Not Found</h1>
        <Button onClick={() => router.push('/products')} className="rounded-full bg-primary text-white">Back to Catalog</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to order",
      description: `${quantity}x ${product.name} added to your basket.`
    });
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Review Submitted",
      description: "Thank you for your feedback! It will be visible after moderation."
    });
    setReviewForm({ name: '', rating: 5, comment: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        className="mb-6 pl-0 hover:pl-2 transition-all text-primary font-bold group text-sm"
        onClick={() => router.back()}
      >
        <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Catalog
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Left Column: Image Gallery */}
        <div className="space-y-4 max-w-sm mx-auto w-full">
          <div className="relative h-64 w-full overflow-hidden rounded-[2rem] bg-white border-4 border-slate-50 shadow-lg">
            <Image
              src={activeImage}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {product.images && product.images.length > 0 && (
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, idx) => (
                <div 
                  key={idx}
                  className={cn(
                    "relative h-16 w-full rounded-xl overflow-hidden cursor-pointer border-2 transition-all",
                    activeImage === img ? "border-primary shadow-md" : "border-transparent hover:border-primary/30"
                  )}
                  onClick={() => setActiveImage(img)}
                >
                  <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Content */}
        <div className="space-y-6 py-2">
          <div className="space-y-2">
            <Badge className="bg-primary/10 text-primary border-none uppercase text-[10px] font-bold tracking-widest px-3 py-1 rounded-full">
              {product.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight tracking-tight">{product.name}</h1>
            <div className="flex items-baseline gap-3">
              <p className="text-2xl font-black text-primary">₹{product.price.toFixed(2)}</p>
              <p className="text-lg text-slate-400 line-through font-bold">₹{product.mrp.toFixed(2)}</p>
              <Badge className="bg-accent text-accent-foreground border-none font-black px-2 py-0.5 rounded-full shadow-sm text-[10px] uppercase tracking-widest ml-2">
                Save {Math.round(((product.mrp - product.price) / product.mrp) * 100)}%
              </Badge>
            </div>
          </div>

          {/* Primary Action (Add to Cart) */}
          <div className="space-y-4 py-4 border-y border-slate-100">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Quantity</span>
              <div className="flex items-center gap-3 bg-slate-100 p-1 rounded-full border border-slate-200">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full bg-white shadow-sm hover:bg-slate-50"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-8 text-center font-bold text-lg text-slate-800">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full bg-white shadow-sm hover:bg-slate-50"
                  onClick={() => setQuantity(q => q + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="flex-1 h-14 text-lg bg-primary text-white hover:bg-primary/90 rounded-full font-black shadow-lg border-4 border-primary/20"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5 mr-2" /> Add to Basket
              </Button>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="space-y-8">
            {product.composition && (
              <div className="p-4 bg-primary/5 rounded-3xl border border-primary/10">
                <h3 className="text-primary font-black text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Beaker className="h-4 w-4" /> Composition
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.composition.map((item, i) => (
                    <span key={i} className="bg-white px-3 py-1 rounded-full text-xs font-bold text-slate-600 shadow-sm border border-slate-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <h3 className="text-slate-800 font-bold text-lg flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" /> Description
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">{product.description}</p>
            </div>

            {product.benefits && (
              <div className="space-y-2">
                <h3 className="text-slate-800 font-bold text-lg flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" /> Key Benefits
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.indications && (
              <div className="space-y-2">
                <h3 className="text-slate-800 font-bold text-lg flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" /> Indications
                </h3>
                <ul className="space-y-2">
                  {product.indications.map((ind, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                      <div className="h-1 w-1 bg-slate-300 rounded-full" /> {ind}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.dosage && (
              <div className="space-y-2">
                <h3 className="text-slate-800 font-bold text-lg flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-primary" /> Dosage
                </h3>
                <p className="text-sm text-slate-600 italic">As advised by physician: {product.dosage}</p>
              </div>
            )}

            {product.precautions && (
              <div className="p-4 bg-orange-50 rounded-3xl border border-orange-100">
                <h3 className="text-orange-600 font-black text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" /> Precautions
                </h3>
                <ul className="space-y-1">
                  {product.precautions.map((pre, i) => (
                    <li key={i} className="text-xs text-slate-600 font-medium leading-relaxed">• {pre}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="py-16 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-2xl font-black text-slate-800">Customer Reviews</h2>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <span className="text-sm font-bold text-slate-600">4.9 out of 5</span>
              </div>
            </div>

            <Card className="border-none bg-slate-50 rounded-[2rem]">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-primary" /> Write a Review
                </h3>
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <Label htmlFor="review-name" className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Name</Label>
                    <Input 
                      id="review-name" 
                      value={reviewForm.name} 
                      onChange={e => setReviewForm({...reviewForm, name: e.target.value})}
                      className="bg-white rounded-xl border-none shadow-sm h-10" 
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Rating</Label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Star 
                          key={i} 
                          className={cn(
                            "h-6 w-6 cursor-pointer transition-colors", 
                            reviewForm.rating >= i ? "fill-primary text-primary" : "text-slate-300"
                          )} 
                          onClick={() => setReviewForm({...reviewForm, rating: i})}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="review-comment" className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Review</Label>
                    <Textarea 
                      id="review-comment" 
                      value={reviewForm.comment}
                      onChange={e => setReviewForm({...reviewForm, comment: e.target.value})}
                      className="bg-white rounded-xl border-none shadow-sm" 
                      placeholder="Share your experience..." 
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-full bg-primary text-white font-bold h-10">
                    Submit Review
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {mockReviews.map(review => (
              <div key={review.id} className="p-6 bg-white border border-slate-50 rounded-[2.5rem] shadow-sm flex gap-4">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-800">{review.name}</h4>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{review.date}</span>
                  </div>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className={cn("h-3 w-3", i <= review.rating ? "fill-primary text-primary" : "text-slate-200")} />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed italic">"{review.comment}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="pt-16 border-t border-slate-100">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-black text-slate-800">Recommended for You</h2>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">Discover more products</p>
            </div>
            <Link href="/products">
              <Button variant="link" className="text-primary font-bold group">
                View All <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {relatedProducts.map(rel => (
              <Link key={rel.id} href={`/products/${rel.id}`}>
                <Card className="hover:shadow-xl transition-all duration-500 h-full border-none shadow-md rounded-[2rem] overflow-hidden group bg-white">
                  <CardContent className="p-0">
                    <div className="relative h-32 w-full overflow-hidden">
                      <Image src={rel.imageUrl} alt={rel.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-slate-800 group-hover:text-primary transition-colors text-xs line-clamp-1">{rel.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-primary font-black text-sm">₹{rel.price.toFixed(2)}</span>
                        <span className="text-slate-400 line-through text-[9px] font-bold">₹{rel.mrp.toFixed(2)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

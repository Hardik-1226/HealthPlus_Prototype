'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CreditCard, Truck, ShieldCheck, ShoppingCart, Tag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: ''
  });

  useEffect(() => {
    if (cart.length === 0) {
      router.push('/cart');
    }
  }, [cart.length, router]);

  if (cart.length === 0) {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      toast({
        variant: "destructive",
        title: "Information Required",
        description: "Please provide all required shipping and contact details."
      });
      return;
    }

    setLoading(true);

    try {
      if (typeof window.Razorpay !== 'undefined') {
        const options = {
          key: "rzp_test_dummy_key", 
          amount: Math.round(cartTotal * 100), 
          currency: "INR",
          name: "Health Plus Innovation",
          description: "Healthcare Supply Order",
          handler: function (response: any) {
            toast({
              title: "Payment Successful",
              description: `Transaction ID: ${response.razorpay_payment_id}`
            });
            clearCart();
            router.push('/success');
          },
          prefill: {
            name: formData.name,
            email: formData.email,
            contact: formData.phone
          },
          theme: {
            color: "#3ab8c5"
          }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        setTimeout(() => {
          toast({
            title: "Demo Mode",
            description: "Processing your order via HPI secure gateway..."
          });
          setTimeout(() => {
            clearCart();
            router.push('/success');
          }, 2000);
        }, 1000);
      }
    } catch (error) {
      setLoading(false);
      toast({
        variant: "destructive",
        title: "Transaction Error",
        description: "An error occurred while processing your request. Please try again."
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-slate-800">Finalize Order</h1>
            <p className="text-md text-slate-500 font-medium">Professional procurement for healthcare entities.</p>
          </div>

          <form onSubmit={handlePayment} className="space-y-6">
            <Card className="border shadow-lg rounded-[2rem] overflow-hidden">
              <CardHeader className="bg-primary/5 p-6">
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-slate-800">
                  <Truck className="h-6 w-6 text-primary" /> Delivery Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Name / Institution</Label>
                    <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} className="h-10 rounded-lg border-slate-100" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email</Label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="h-10 rounded-lg border-slate-100" />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Phone</Label>
                  <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleInputChange} className="h-10 rounded-lg border-slate-100" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="address" className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Address</Label>
                  <Textarea id="address" name="address" required rows={2} value={formData.address} onChange={handleInputChange} className="rounded-lg border-slate-100 min-h-[80px]" />
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-lg rounded-[2rem] overflow-hidden">
              <CardHeader className="bg-primary/5 p-6">
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-slate-800">
                  <CreditCard className="h-6 w-6 text-primary" /> Payment Selection
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <Image src="https://picsum.photos/seed/payment/100/100" alt="Razorpay" width={24} height={24} className="grayscale opacity-50" />
                    </div>
                    <div>
                      <p className="font-bold text-md text-slate-800">Razorpay Secure</p>
                    </div>
                  </div>
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg rounded-full bg-primary text-white hover:bg-primary/90 font-black shadow-lg"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : `Pay ₹${cartTotal.toFixed(2)}`}
                </Button>
              </CardContent>
            </Card>
          </form>
        </div>

        <div>
          <Card className="sticky top-32 border shadow-xl rounded-[2rem] overflow-hidden">
            <CardHeader className="bg-slate-800 p-6">
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-white">
                <ShoppingCart className="h-6 w-6" /> Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 divide-y divide-slate-100">
              <div className="max-h-[400px] overflow-y-auto pr-2 space-y-2 mb-6 scrollbar-hide">
                {cart.map(item => (
                  <div key={item.id} className="py-4 flex flex-col gap-3 border-b last:border-0 border-slate-50">
                    <div className="flex justify-between gap-4 items-start">
                      <div className="flex gap-4 items-start">
                        <div className="relative h-16 w-16 bg-slate-50 rounded-2xl overflow-hidden shrink-0 border border-slate-100">
                          <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-bold text-slate-800 text-sm">{item.name}</p>
                          <p className="text-[10px] text-slate-400 line-clamp-2 leading-relaxed font-medium italic">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 pt-1">
                            <span className="text-xs font-black text-primary">₹{item.price.toFixed(2)}</span>
                            <span className="text-[10px] text-slate-400 line-through font-bold">₹{item.mrp.toFixed(2)}</span>
                            <span className="text-[9px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-bold">
                              Save {Math.round(((item.mrp - item.price) / item.mrp) * 100)}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-black text-slate-800 text-sm">₹{(item.price * item.quantity).toFixed(2)}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 space-y-3">
                <div className="flex justify-between text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                  <span>Gross Subtotal</span>
                  <span className="text-slate-800 text-sm">₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center bg-primary/5 p-3 rounded-2xl border border-primary/10">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Total Savings</span>
                  </div>
                  <span className="text-sm font-black text-primary">
                    ₹{cart.reduce((acc, item) => acc + (item.mrp - item.price) * item.quantity, 0).toFixed(2)}
                  </span>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold text-slate-800">Payable Total</span>
                  <span className="text-3xl font-black text-slate-800">₹{cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
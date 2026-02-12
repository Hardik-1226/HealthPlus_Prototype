'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CreditCard, ShieldCheck, ShoppingCart, Tag, ChevronDown, ChevronLeft, AlertCircle } from 'lucide-react';
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
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'India',
    state: '',
    zip: '',
    address: '',
    city: ''
  });

  useEffect(() => {
    if (cart.length === 0) {
      router.push('/cart');
    }
  }, [cart.length, router]);

  if (cart.length === 0) {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName) return "Please enter your full name.";
    if (!formData.email.includes('@')) return "Please enter a valid email address.";
    if (formData.phone.length < 10) return "Please enter a valid phone number.";
    if (!formData.address || !formData.city || !formData.zip) return "Please complete your delivery address.";
    return null;
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: error
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
            name: `${formData.firstName} ${formData.lastName}`,
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
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-2">
            <Button 
              variant="ghost" 
              onClick={() => router.push('/cart')} 
              className="pl-0 text-primary font-black uppercase tracking-widest text-[10px] hover:bg-transparent"
            >
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to Basket
            </Button>
            <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight">Checkout</h1>
            <p className="text-sm text-slate-500 font-medium">Please finalize your institutional procurement details.</p>
          </div>

          <form onSubmit={handlePayment} className="space-y-10">
            <Card className="border shadow-2xl rounded-[3rem] overflow-hidden bg-white">
              <CardHeader className="p-10 pb-4">
                <CardTitle className="text-2xl font-black text-slate-800 uppercase tracking-tight">Billing Address</CardTitle>
              </CardHeader>
              <CardContent className="p-10 pt-0 space-y-8">
                {/* Names */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="firstName" className="text-[10px] font-black uppercase tracking-widest text-slate-500">First Name</Label>
                    <Input id="firstName" name="firstName" required value={formData.firstName} onChange={handleInputChange} placeholder="Raj" className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="lastName" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Last Name</Label>
                    <Input id="lastName" name="lastName" required value={formData.lastName} onChange={handleInputChange} placeholder="Singh" className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all" />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email Address</Label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="rajsingh@example.com" className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleInputChange} placeholder="+91 92669 03156" className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all" />
                  </div>
                </div>

                {/* Geography */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Country</Label>
                    <div className="flex h-14 w-full items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-5 py-2 text-sm font-bold">
                       <span className="flex items-center gap-2">🇮🇳 India</span>
                       <ChevronDown className="h-4 w-4 text-slate-400" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="state" className="text-[10px] font-black uppercase tracking-widest text-slate-500">State/Province</Label>
                    <Input id="state" name="state" required value={formData.state} onChange={handleInputChange} placeholder="Haryana" className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="zip" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Postal Code</Label>
                    <Input id="zip" name="zip" required value={formData.zip} onChange={handleInputChange} placeholder="121013" className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all" />
                  </div>
                </div>

                {/* Address and City */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-3">
                    <Label htmlFor="address" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Street Address</Label>
                    <Input id="address" name="address" required value={formData.address} onChange={handleInputChange} placeholder="Plot No. 225, Surya Vihar" className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="city" className="text-[10px] font-black uppercase tracking-widest text-slate-500">City</Label>
                    <Input id="city" name="city" required value={formData.city} onChange={handleInputChange} placeholder="Faridabad" className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all" />
                  </div>
                </div>

                <div className="pt-8">
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full h-16 rounded-full text-xs font-black uppercase tracking-[0.2em] bg-slate-900 text-white hover:bg-slate-800 shadow-2xl transition-all"
                  >
                    {loading ? 'Processing Transaction...' : 'Complete Procurement Order'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center gap-4 p-6 bg-primary/5 rounded-[2rem] border border-primary/10">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <div>
                <p className="font-black text-slate-800 text-sm uppercase tracking-tight">Secure Professional Transaction</p>
                <p className="text-[10px] text-slate-500 font-medium">Your pharmaceutical data is protected by industry-standard encryption.</p>
              </div>
            </div>
          </form>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-32 border shadow-2xl rounded-[3rem] overflow-hidden bg-white">
            <CardHeader className="bg-slate-800 p-8">
              <CardTitle className="flex items-center gap-3 text-xl font-black text-white uppercase tracking-tight">
                <ShoppingCart className="h-6 w-6 text-primary" /> Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-[450px] overflow-y-auto p-6 md:p-8 space-y-6 scrollbar-hide">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 items-start pb-6 border-b border-slate-50 last:border-0 last:pb-0">
                    <div className="relative h-20 w-20 bg-slate-50 rounded-2xl overflow-hidden shrink-0 border border-slate-100">
                      <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-grow space-y-1">
                      <p className="font-black text-slate-800 text-sm uppercase tracking-tight">{item.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Qty: {item.quantity}</p>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="text-sm font-black text-primary">₹{(item.price * item.quantity).toFixed(2)}</span>
                        {item.mrp > item.price && (
                          <span className="text-[9px] text-slate-300 line-through font-bold">₹{(item.mrp * item.quantity).toFixed(2)}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-8 bg-slate-50/50 border-t border-slate-100 space-y-5">
                <div className="flex justify-between text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                  <span>Gross Total</span>
                  <span className="text-slate-800">₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Total Savings</span>
                  </div>
                  <span className="text-sm font-black text-primary">
                    ₹{cart.reduce((acc, item) => acc + (item.mrp - item.price) * item.quantity, 0).toFixed(2)}
                  </span>
                </div>
                <Separator className="opacity-10" />
                <div className="flex justify-between items-center">
                  <span className="text-lg font-black text-slate-800 uppercase tracking-tight">Net Amount</span>
                  <span className="text-3xl font-black text-primary">₹{cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

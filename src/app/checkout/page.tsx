'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CreditCard, ShieldCheck, ShoppingCart, Tag, ChevronDown } from 'lucide-react';
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

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.zip) {
      toast({
        variant: "destructive",
        title: "Information Required",
        description: "Please provide all required billing and contact details."
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
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-slate-800">Checkout</h1>
            <p className="text-md text-slate-500 font-medium">Finalize your procurement order details.</p>
          </div>

          <form onSubmit={handlePayment} className="space-y-8">
            <Card className="border shadow-lg rounded-[2rem] overflow-hidden bg-white">
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-2xl font-bold text-slate-800">Billing address</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 space-y-6">
                {/* Names */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-semibold text-slate-700">First name</Label>
                    <Input id="firstName" name="firstName" required value={formData.firstName} onChange={handleInputChange} placeholder="Raj" className="h-12 rounded-xl bg-slate-50/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-semibold text-slate-700">Last name</Label>
                    <Input id="lastName" name="lastName" required value={formData.lastName} onChange={handleInputChange} placeholder="Singh" className="h-12 rounded-xl bg-slate-50/50" />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-slate-700">Email address</Label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="rajsing@example.com" className="h-12 rounded-xl bg-slate-50/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone number</Label>
                    <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleInputChange} placeholder="+91 92669 03156" className="h-12 rounded-xl bg-slate-50/50" />
                  </div>
                </div>

                {/* Geography */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-slate-700">Country</Label>
                    <div className="flex h-12 w-full items-center justify-between rounded-xl border bg-slate-50/50 px-4 py-2 text-sm">
                       <span className="flex items-center gap-2 font-medium">🇮🇳 India</span>
                       <ChevronDown className="h-4 w-4 text-slate-400" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-sm font-semibold text-slate-700">State/Province</Label>
                    <Input id="state" name="state" required value={formData.state} onChange={handleInputChange} placeholder="Haryana" className="h-12 rounded-xl bg-slate-50/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip" className="text-sm font-semibold text-slate-700">Postal code</Label>
                    <Input id="zip" name="zip" required value={formData.zip} onChange={handleInputChange} placeholder="121013" className="h-12 rounded-xl bg-slate-50/50" />
                  </div>
                </div>

                {/* Address and City */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="address" className="text-sm font-semibold text-slate-700">Address</Label>
                    <Input id="address" name="address" required value={formData.address} onChange={handleInputChange} placeholder="Plot No.225, Gali No. 1, Surya Vihar" className="h-12 rounded-xl bg-slate-50/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm font-semibold text-slate-700">City</Label>
                    <Input id="city" name="city" required value={formData.city} onChange={handleInputChange} placeholder="Faridabad" className="h-12 rounded-xl bg-slate-50/50" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-4 pt-8">
                  <Button 
                    type="button" 
                    variant="ghost" 
                    onClick={() => router.push('/cart')} 
                    className="h-14 px-10 rounded-2xl text-lg font-bold text-slate-500 hover:bg-slate-50"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="h-14 px-10 rounded-2xl text-lg font-black bg-slate-900 text-white hover:bg-slate-800 shadow-xl"
                  >
                    {loading ? 'Processing...' : 'Continue'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-lg rounded-[2rem] overflow-hidden bg-white">
              <CardHeader className="bg-primary/5 p-6">
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-slate-800">
                  <CreditCard className="h-6 w-6 text-primary" /> Security Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="p-6 bg-primary/5 border border-primary/10 rounded-3xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                      <ShieldCheck className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-slate-800">Secure Procurement</p>
                      <p className="text-sm text-slate-500 font-medium">All transactions are encrypted and audited.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-32 border shadow-xl rounded-[2.5rem] overflow-hidden bg-white">
            <CardHeader className="bg-slate-800 p-8">
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-white">
                <ShoppingCart className="h-6 w-6" /> Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 divide-y divide-slate-100">
              <div className="max-h-[500px] overflow-y-auto pr-2 space-y-2 mb-6 scrollbar-hide">
                {cart.map(item => (
                  <div key={item.id} className="py-6 flex flex-col gap-4 border-b last:border-0 border-slate-50">
                    <div className="flex justify-between gap-4 items-start">
                      <div className="flex gap-4 items-start">
                        <div className="relative h-20 w-20 bg-slate-50 rounded-2xl overflow-hidden shrink-0 border border-slate-100">
                          <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-bold text-slate-800 text-md">{item.name}</p>
                          <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed font-medium">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 pt-2">
                            <span className="text-sm font-black text-primary">₹{item.price.toFixed(2)}</span>
                            <span className="text-xs text-slate-400 line-through font-bold">₹{item.mrp.toFixed(2)}</span>
                            <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">
                              -{Math.round(((item.mrp - item.price) / item.mrp) * 100)}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-black text-slate-800 text-md">₹{(item.price * item.quantity).toFixed(2)}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 space-y-4">
                <div className="flex justify-between text-slate-400 font-bold uppercase text-[11px] tracking-widest">
                  <span>Gross Subtotal</span>
                  <span className="text-slate-800 text-md">₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center bg-primary/5 p-4 rounded-2xl border border-primary/10">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-[11px] font-bold text-primary uppercase tracking-widest">Total Savings</span>
                  </div>
                  <span className="text-md font-black text-primary">
                    ₹{cart.reduce((acc, item) => acc + (item.mrp - item.price) * item.quantity, 0).toFixed(2)}
                  </span>
                </div>
                <Separator className="my-6" />
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-slate-800">Grand Total</span>
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

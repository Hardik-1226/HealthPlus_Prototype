
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CreditCard, Truck, ShieldCheck, ShoppingCart } from 'lucide-react';
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

  if (cart.length === 0) {
    if (typeof window !== 'undefined') router.push('/cart');
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
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div className="space-y-3">
            <h1 className="text-5xl font-bold text-slate-800">Finalize Order</h1>
            <p className="text-xl text-slate-500 font-medium">Professional pharmaceutical procurement for healthcare entities.</p>
          </div>

          <form onSubmit={handlePayment} className="space-y-8">
            <Card className="border-none shadow-xl rounded-[3rem] overflow-hidden">
              <CardHeader className="bg-primary/5 p-8">
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-slate-800">
                  <Truck className="h-7 w-7 text-primary" /> Delivery Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-slate-400">Full Name / Institution</Label>
                    <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} className="h-12 rounded-xl border-slate-100" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-slate-400">Professional Email</Label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="h-12 rounded-xl border-slate-100" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-bold uppercase tracking-widest text-slate-400">Contact Number</Label>
                  <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleInputChange} className="h-12 rounded-xl border-slate-100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-sm font-bold uppercase tracking-widest text-slate-400">Full Shipping Address</Label>
                  <Textarea id="address" name="address" required rows={3} value={formData.address} onChange={handleInputChange} className="rounded-xl border-slate-100 min-h-[120px]" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm font-bold uppercase tracking-widest text-slate-400">City</Label>
                    <Input id="city" name="city" required value={formData.city} onChange={handleInputChange} className="h-12 rounded-xl border-slate-100" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip" className="text-sm font-bold uppercase tracking-widest text-slate-400">ZIP Code</Label>
                    <Input id="zip" name="zip" required value={formData.zip} onChange={handleInputChange} className="h-12 rounded-xl border-slate-100" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl rounded-[3rem] overflow-hidden">
              <CardHeader className="bg-primary/5 p-8">
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-slate-800">
                  <CreditCard className="h-7 w-7 text-primary" /> Payment Selection
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="p-6 bg-primary/5 border border-primary/10 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 bg-white rounded-xl shadow-sm flex items-center justify-center">
                      <Image src="https://picsum.photos/seed/payment/100/100" alt="Razorpay" width={40} height={40} className="grayscale opacity-50" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-slate-800">Razorpay Secure</p>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">Cards, UPI, Netbanking</p>
                    </div>
                  </div>
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-16 text-xl rounded-full bg-primary text-white hover:bg-primary/90 font-black shadow-xl shadow-primary/20"
                  disabled={loading}
                >
                  {loading ? 'Validating Order...' : `Pay ₹${cartTotal.toFixed(2)}`}
                </Button>
                <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-tighter">
                  Encrypted transactions powered by Razorpay for maximum supply chain security.
                </p>
              </CardContent>
            </Card>
          </form>
        </div>

        <div>
          <Card className="sticky top-32 border-none shadow-2xl rounded-[3rem] overflow-hidden">
            <CardHeader className="bg-slate-800 p-8">
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-white">
                <ShoppingCart className="h-7 w-7" /> Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 divide-y divide-slate-100">
              <div className="max-h-[400px] overflow-y-auto pr-2 space-y-6 mb-8 scrollbar-hide">
                {cart.map(item => (
                  <div key={item.id} className="py-2 flex justify-between gap-6 items-center">
                    <div className="flex gap-4 items-center">
                      <div className="relative h-16 w-16 bg-slate-50 rounded-2xl overflow-hidden shrink-0 border border-slate-100">
                        <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 line-clamp-1">{item.name}</p>
                        <p className="text-xs font-bold text-primary uppercase tracking-widest">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-black text-slate-800">₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 space-y-4">
                <div className="flex justify-between text-slate-400 font-bold uppercase text-xs tracking-widest">
                  <span>Subtotal</span>
                  <span className="text-slate-800 text-base">₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400 font-bold uppercase text-xs tracking-widest">
                  <span>Delivery</span>
                  <span className="text-primary text-base">Complimentary</span>
                </div>
                <Separator className="my-6" />
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-slate-800">Grand Total</span>
                  <span className="text-4xl font-black text-slate-800">₹{cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

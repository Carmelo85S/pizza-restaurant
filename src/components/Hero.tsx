
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-25"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      </div>
      
      {/* Pizza slice decorative elements */}
      <div className="absolute -right-24 top-20 rotate-45 opacity-10">
        <div className="w-64 h-64 rounded-full border-[30px] border-pizza-600"></div>
      </div>
      <div className="absolute -left-16 bottom-10 -rotate-12 opacity-10">
        <div className="w-48 h-48 rounded-full border-[20px] border-olive-500"></div>
      </div>
      
      {/* Main content */}
      <div className="container-custom relative min-h-[90vh] flex flex-col justify-center py-20">
        <div className="max-w-2xl space-y-8 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-olive-100 text-olive-800 font-medium text-sm mb-2">
            Traditional Italian cuisine
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
            Authentic Italian 
            <span className="block mt-2 text-pizza-600">Pizza Experience</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-xl">
            Handcrafted with the finest ingredients imported directly from Italy, our pizzas bring the taste of Naples straight to your table.
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-pizza-600 hover:bg-pizza-700 text-white text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              Order Online <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-pizza-600 text-pizza-600 hover:bg-pizza-50 text-lg py-6 px-8 rounded-full transition-all">
              View Our Menu
            </Button>
          </div>
          
          <div className="pt-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-white p-3 rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pizza-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-lg">4.9/5</p>
                <p className="text-sm text-gray-600">500+ reviews</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="bg-white p-3 rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-olive-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-lg">Fast Delivery</p>
                <p className="text-sm text-gray-600">30 minutes or free</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;

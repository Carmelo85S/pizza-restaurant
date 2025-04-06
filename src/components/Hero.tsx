
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-crust-100">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="container-custom relative min-h-[90vh] flex flex-col justify-center py-20">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Authentic Italian Pizza <br />
            <span className="text-pizza-600">Made With Love</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Handcrafted with the finest ingredients, our pizzas bring the taste of Naples straight to your table.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-pizza-600 hover:bg-pizza-700 text-white text-lg py-6">
              Order Online <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-pizza-600 text-pizza-600 hover:bg-pizza-50 text-lg py-6">
              View Our Menu
            </Button>
          </div>
          <div className="pt-6 flex items-center space-x-4">
            <div className="bg-white px-3 py-1 rounded-full shadow-sm flex items-center">
              <span className="text-sm font-medium text-gray-800">⭐ 4.9/5</span>
            </div>
            <span className="text-sm text-gray-600">Over 500+ reviews</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;

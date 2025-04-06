import React, { useState } from 'react';
import { Menu, X, ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container-custom py-4 flex justify-between items-center">
        <button onClick={() => scrollToSection('hero')} className="flex items-center">
          <span className="text-2xl font-serif font-bold text-pizza-800">Carmelo's<span className="text-pizza-600">PIZZA</span></span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('menu')} className="font-medium hover:text-pizza-600 transition-colors">Menu</button>
          <button onClick={() => scrollToSection('about')} className="font-medium hover:text-pizza-600 transition-colors">About</button>
          <button onClick={() => scrollToSection('contact')} className="font-medium hover:text-pizza-600 transition-colors">Contact</button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center justify-center bg-pizza-600 hover:bg-pizza-700 text-white text-lg font-semibold py-2 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Book now <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-50 animate-fade-in">
          <div className="px-6 py-4 space-y-4">
            <button onClick={() => scrollToSection('menu')} className="block w-full text-left py-2 font-medium hover:text-pizza-600">Menu</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 font-medium hover:text-pizza-600">About</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 font-medium hover:text-pizza-600">Contact</button>
            <Button onClick={() => scrollToSection('contact')} className="bg-pizza-600 hover:bg-pizza-700 text-white w-full">
              <ShoppingCart className="mr-2 h-4 w-4" /> Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
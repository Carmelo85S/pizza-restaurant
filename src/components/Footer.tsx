import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white/95 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-pizza-800">Carmelo's<span className="text-pizza-600">PIZZA</span></h3>
            <p className="mt-4 text-gray-400">
              With love since 2020
            </p>
            <div className="mt-6 flex space-x-4">
              <button className="bg-gray-800 hover:bg-pizza-600 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="bg-gray-800 hover:bg-pizza-600 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="bg-gray-800 hover:bg-pizza-600 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg text-black font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')} 
                  className="text-black hover:text-pizza-600 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')} 
                  className="text-black hover:text-pizza-600 transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-black hover:text-pizza-600 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-black hover:text-pizza-600 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg text-black font-bold mb-4">Contact Us</h4>
            <address className="not-italic text-black">
              Orminge 2, 132 30<br />
              Saltsjö-boo
            </address>
            <p className="mt-4 text-black">(07345678910)</p>
            <p className="text-black">info@carmelospizza.com</p>
          </div>
          
          <div>
            <h4 className="text-lg text-black font-bold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-black">
              <li>Monday - Thursday: 11:00am - 10:00pm</li>
              <li>Friday - Saturday: 11:00am - 11:00pm</li>
              <li>Sunday: 12:00pm - 9:00pm</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-black">© 2025 Carmelo'sPIZZA. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <button className="text-black hover:text-pizza-700 text-sm">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button className="text-black hover:text-pizza-700 text-sm">
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
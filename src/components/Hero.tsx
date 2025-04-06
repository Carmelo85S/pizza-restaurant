import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-80"></div>
        <div className="absolute inset-0"></div>
      </div>
      
      {/* Main content */}
      <div className="container-custom relative min-h-[90vh] flex flex-col justify-center py-20">
        <div className="max-w-2xl space-y-8 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-olive-100 text-olive-800 font-medium text-sm mb-2">
            Best Pizza i Orminge?
          </div>
          
          <div className="p-5 rounded-lg bg-white bg-opacity-50">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
              Here you can have
              <span className="block mt-2 text-pizza-600">Pizza Experience</span>
            </h1>
            <p className="text-lg py-5 md:text-xl text-gray-700 max-w-xl">
              Made with the finest ingredients imported directly from Italy, our pizzas bring a slice of Naples straight to your table.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
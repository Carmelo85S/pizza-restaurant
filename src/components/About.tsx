
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-pizza-600 font-medium">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">From Italy to Your Table</h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Founded in 1982 by the Rossi family who immigrated from Naples, Italy, Bella Pizza has been serving authentic Italian pizza for over 40 years. Our recipes have been passed down through generations, preserving the traditional art of pizza making.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We take great pride in using only the freshest ingredients. Our dough is made fresh daily, our tomatoes are imported from Italy, and we use only premium cheeses and toppings.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col">
                <span className="text-4xl font-serif font-bold text-pizza-700">40+</span>
                <span className="text-gray-600 mt-1">Years of Tradition</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-serif font-bold text-pizza-700">100%</span>
                <span className="text-gray-600 mt-1">Fresh Ingredients</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-serif font-bold text-pizza-700">20+</span>
                <span className="text-gray-600 mt-1">Pizza Varieties</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                alt="Pizza chef preparing pizza" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <div className="bg-white shadow-lg rounded-full p-4 transform rotate-12">
                <img 
                  src="https://i.imgur.com/tGbaZCY.png" 
                  alt="Italian quality seal" 
                  className="h-24 w-24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

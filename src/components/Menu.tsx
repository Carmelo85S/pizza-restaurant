
import React, { useState } from 'react';
import MenuCard from './MenuCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const pizzaCategories = ["All", "Classic", "Specialty", "Vegetarian", "Spicy"];

const pizzaItems = [
  {
    id: 1,
    name: "Margherita",
    description: "Fresh mozzarella, tomato sauce, basil, and extra virgin olive oil",
    price: "€14.99",
    image: "https://images.unsplash.com/photo-1604917877934-07d8d248d396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: "Classic",
    popular: true
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Tomato sauce, mozzarella, and spicy pepperoni",
    price: "€16.99",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    category: "Classic",
    popular: true
  },
  {
    id: 3,
    name: "Quattro Formaggi",
    description: "Mozzarella, gorgonzola, fontina, and parmigiano",
    price: "€18.99",
    image: "https://images.unsplash.com/photo-1620374643809-b69c702d0ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    category: "Specialty"
  },
  {
    id: 4,
    name: "Diavola",
    description: "Spicy salami, hot chili peppers, tomato sauce, and mozzarella",
    price: "€17.99",
    image: "https://images.unsplash.com/photo-1565564194296-14db6e0bf8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    category: "Spicy",
    popular: true
  },
  {
    id: 5,
    name: "Vegetariana",
    description: "Bell peppers, mushrooms, onions, olives, and artichokes",
    price: "€15.99",
    image: "https://images.unsplash.com/photo-1542282811-943ef1a977c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    category: "Vegetarian"
  },
  {
    id: 6,
    name: "Prosciutto e Funghi",
    description: "Prosciutto ham, mushrooms, mozzarella, and tomato sauce",
    price: "€19.99",
    image: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    category: "Specialty"
  }
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const filteredItems = activeCategory === "All" 
    ? pizzaItems 
    : pizzaItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-pizza-600 font-medium">Our Menu</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Handcrafted Pizzas</h2>
          <p className="text-gray-600 mt-4">
            Our pizzas are made with the freshest ingredients and traditional recipes that have been in our family for generations.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 overflow-x-auto pb-4">
          <div className="flex space-x-2">
            {pizzaCategories.map(category => (
              <Button 
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 ${
                  activeCategory === category 
                    ? 'bg-pizza-600 hover:bg-pizza-700 text-white' 
                    : 'border-gray-300 text-gray-700 hover:text-pizza-600 hover:border-pizza-600'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((pizza) => (
            <MenuCard 
              key={pizza.id}
              name={pizza.name}
              description={pizza.description}
              price={pizza.price}
              image={pizza.image}
              popular={pizza.popular}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center justify-center bg-pizza-600 hover:bg-pizza-700 text-white text-lg font-semibold py-2 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Book now <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;

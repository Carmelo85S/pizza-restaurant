
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
}

const MenuCard: React.FC<MenuCardProps> = ({ name, description, price, image, popular }) => {
  return (
    <Card className="overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 bg-white/90">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {popular && (
          <div className="absolute top-2 right-2 bg-pizza-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            Popular
          </div>
        )}
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-serif font-bold text-lg text-gray-800">{name}</h3>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
          </div>
          <div className="text-pizza-700 font-bold text-lg bg-olive-50 px-3 py-1 rounded-full shadow-sm">{price}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuCard;

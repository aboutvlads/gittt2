import React from 'react';
import { Heart } from 'lucide-react';

interface DealCardProps {
  id: string;
  destination: string;
  country: string;
  flag: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: string;
  date: string;
  departure: string;
  stops: string;
  tags: string[];
  likes: number;
  isHot?: boolean;
  type?: string;
  onSelect: (id: string) => void;
}

export function DealCard({
  id,
  destination,
  country,
  flag,
  image,
  price,
  originalPrice,
  discount,
  date,
  departure,
  stops,
  tags,
  likes,
  isHot,
  type = 'Economy',
  onSelect,
}: DealCardProps) {
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
      onClick={() => onSelect(id)}
    >
      <div className="relative">
        <img
          src={image}
          alt={`${destination}`}
          className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2 sm:px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium">
            {type}
          </span>
          {isHot && (
            <span className="px-2 sm:px-3 py-1 bg-red-500/90 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-medium">
              Hot Deal
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-2 sm:px-3 py-1 bg-green-500/90 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-medium">
            {discount}
          </span>
        </div>
      </div>
      
      <div className="p-4 sm:p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-base sm:text-xl font-semibold flex items-center gap-1.5 sm:gap-2">
            {destination}, {country} <span>{flag}</span>
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-400">{date}</p>
        </div>

        <div className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
          <p className="text-xs sm:text-sm text-gray-600">{stops}</p>
          <p className="text-xs sm:text-sm text-gray-600">From {departure}</p>
        </div>

        <div className="flex justify-between items-end">
          <div className="space-y-0.5 sm:space-y-1">
            <p className="text-lg sm:text-2xl font-bold">€{price}</p>
            <p className="text-xs sm:text-sm text-gray-400 line-through">€{originalPrice}</p>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex flex-wrap gap-1">
              {tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className={`px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium ${
                    tag.startsWith('#date')
                      ? 'bg-pink-100 text-pink-800'
                      : tag.startsWith('#foodie')
                      ? 'bg-orange-100 text-orange-800'
                      : tag.startsWith('#friends')
                      ? 'bg-green-100 text-green-800'
                      : tag.startsWith('#adventure')
                      ? 'bg-blue-100 text-blue-800'
                      : tag.startsWith('#culture')
                      ? 'bg-purple-100 text-purple-800'
                      : tag.startsWith('#nature')
                      ? 'bg-emerald-100 text-emerald-800'
                      : tag.startsWith('#history')
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <button 
              className="flex items-center gap-1 text-gray-500 hover:text-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm">{likes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
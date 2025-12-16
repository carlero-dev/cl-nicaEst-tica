import React from 'react';
import { Service } from '../types';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-800">
          {service.category}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif font-semibold text-stone-800 mb-3 group-hover:text-emerald-800 transition-colors">
          {service.title}
        </h3>
        <p className="text-stone-500 mb-6 flex-grow leading-relaxed">
          {service.description}
        </p>
        
        <div className="flex items-center text-amber-600 font-medium group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
          Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

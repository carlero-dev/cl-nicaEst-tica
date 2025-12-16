import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-stone-50 overflow-hidden">
      
      {/* Abstract Background Shapes */}
      {/* Using the Pale Pink (stone-200) for the main shape */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-stone-100 opacity-80 transform skew-x-12 translate-x-20"></div>
      {/* Using the Taupe (amber-200) for the accent blob */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-amber-200 opacity-30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 bg-white border border-emerald-200 rounded-full text-xs font-bold tracking-widest uppercase text-emerald-800 mb-2 shadow-sm">
            Eleita a melhor clínica de 2024
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-stone-900 leading-[1.1]">
            Revele a sua <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">
              melhor versão.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-600 max-w-lg leading-relaxed">
            Tecnologia de ponta e protocolos exclusivos para realçar sua beleza natural com segurança e sofisticação.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="shadow-emerald-200 shadow-xl">
              Agendar Avaliação Gratuita
            </Button>
            <Button size="lg" variant="outline" className="bg-white/50 border-emerald-300 text-emerald-800 hover:bg-emerald-50">
              Conhecer Procedimentos
            </Button>
          </div>

          <div className="pt-8 flex items-center gap-8 text-stone-500 text-sm font-medium">
             <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-emerald-700">5k+</span>
                <span className="leading-tight">Clientes<br/>Satisfeitos</span>
             </div>
             <div className="w-px h-10 bg-amber-300"></div>
             <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-emerald-700">15+</span>
                <span className="leading-tight">Anos de<br/>Experiência</span>
             </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="order-1 lg:order-2 relative h-[500px] lg:h-[700px] w-full">
           <div className="absolute inset-0 bg-emerald-600 rounded-[3rem] rotate-3 opacity-10"></div>
           <div className="absolute inset-0 bg-amber-400 rounded-[3rem] -rotate-3 opacity-20"></div>
           <img 
              src="https://picsum.photos/800/1000?random=10" 
              alt="Mulher com pele radiante" 
              className="relative w-full h-full object-cover rounded-[3rem] shadow-2xl z-10"
           />
           
           {/* Floating Card */}
           <div className="absolute bottom-10 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block animate-bounce-slow border border-stone-100">
              <div className="flex items-center gap-4 mb-3">
                 <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-emerald-700 font-bold">
                    RD
                 </div>
                 <div>
                    <p className="font-bold text-stone-900">Resultado Definitivo</p>
                    <p className="text-xs text-stone-500">Protocolo Royal Face</p>
                 </div>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                 <div className="bg-emerald-500 w-[95%] h-full rounded-full"></div>
              </div>
              <p className="text-right text-xs font-bold text-emerald-600 mt-1">98% Eficaz</p>
           </div>
        </div>
      </div>
    </div>
  );
};
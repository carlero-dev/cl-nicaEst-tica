import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Flower2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Flower2 className="h-8 w-8 text-emerald-500" />
              <span className="text-2xl font-serif font-bold text-white">Sua Clínica</span>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Dedicados a realçar sua beleza com tecnologia avançada e cuidado humanizado. Sua autoestima é nossa prioridade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-emerald-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-emerald-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-emerald-600 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 font-serif">Procedimentos</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Harmonização Facial</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Botox e Preenchimento</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Lipo Enzimática</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Bioestimuladores</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Protocolos Exclusivos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 font-serif">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span>Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span>contato@suaclinica.com.br</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 font-serif">Novidades</h3>
            <p className="text-sm mb-4">Receba ofertas exclusivas e dicas de beleza.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white placeholder-stone-500"
              />
              <button className="w-full px-4 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors">
                Inscrever-se
              </button>
            </form>
          </div>

        </div>
        
        <div className="border-t border-stone-800 mt-16 pt-8 text-center text-sm text-stone-500">
          <p>&copy; 2024 Sua Clínica. Todos os direitos reservados. Feito com React.</p>
        </div>
      </div>
    </footer>
  );
};

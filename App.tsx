import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceCard } from './components/ServiceCard';
import { SectionHeader } from './components/SectionHeader';
import { Footer } from './components/Footer';
import { SERVICES, FEATURES, TESTIMONIALS } from './constants';
import { Star, CheckCircle } from 'lucide-react';
import { Button } from './components/Button';

function App() {
  const facialServices = SERVICES.filter(s => s.category === 'facial');
  const bodyServices = SERVICES.filter(s => s.category === 'corporal');

  return (
    <div className="font-sans antialiased text-stone-800 bg-stone-50 selection:bg-amber-200 selection:text-emerald-900">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Features / Why Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-stone-50 transition-colors duration-300 group">
                  <div className="bg-stone-100 p-4 rounded-full mb-6 text-emerald-600 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-serif text-stone-800">{feature.title}</h3>
                  <p className="text-stone-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facial Aesthetics Section - Background: Light Taupe */}
        <section id="facial" className="py-24 bg-amber-50 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full filter blur-3xl opacity-50 -translate-y-1/2"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeader 
              title="Estética Facial" 
              subtitle="Rejuvenesça e realce sua beleza natural com nossos tratamentos faciais avançados, desenhados para a harmonia do seu rosto."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facialServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA / Promo - Background: Deep Pink/Raspberry */}
        <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/1920/1080?random=20')] bg-cover bg-fixed bg-center"></div>
          {/* Overlay to ensure text readability against the Dark Pink background */}
          <div className="absolute inset-0 bg-emerald-900/90 mix-blend-multiply"></div>
          
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-50">Carnê da Beleza</h2>
            <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
              Realize o sonho de cuidar de você. Parcele seus tratamentos em até 24x sem juros no boleto. Sem comprometer o limite do seu cartão.
            </p>
            <Button variant="secondary" size="lg" className="bg-amber-500 hover:bg-amber-600 text-white border-none shadow-lg">Quero saber mais</Button>
          </div>
        </section>

        {/* Body Aesthetics Section - Background: Pale Pink (Stone-100) */}
        <section id="corporal" className="py-24 bg-stone-100 relative">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-50 translate-y-1/2"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeader 
              title="Estética Corporal" 
              subtitle="Sinta-se bem em sua própria pele. Tecnologias não invasivas para modelar o corpo e tratar a pele com eficácia."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bodyServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="depoimentos" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              title="O que dizem nossas clientes" 
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {TESTIMONIALS.map(testimonial => (
                <div key={testimonial.id} className="bg-stone-50 p-8 rounded-2xl shadow-sm border border-stone-100 relative group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute -top-4 left-8 bg-amber-500 text-white px-3 py-1 rounded-lg shadow-lg">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < testimonial.rating ? "currentColor" : "none"} className={i < testimonial.rating ? "text-white" : "text-amber-200"} />
                      ))}
                    </div>
                  </div>
                  <p className="text-stone-600 italic mb-6 pt-4">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4 border-t border-stone-200 pt-4">
                     <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                        {testimonial.name.charAt(0)}
                     </div>
                     <div>
                        <p className="font-bold text-stone-900">{testimonial.name}</p>
                        <p className="text-xs text-stone-400">Cliente Verificada</p>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ / Simple list */}
        <section className="py-20 bg-amber-50">
          <div className="max-w-3xl mx-auto px-4">
             <SectionHeader title="Dúvidas Frequentes" centered />
             <div className="space-y-4">
                {[
                  "A avaliação é realmente gratuita?",
                  "Quais as formas de pagamento?",
                  "Os procedimentos doem?",
                  "Quanto tempo dura o efeito do Botox?"
                ].map((q, i) => (
                  <div key={i} className="bg-white border border-stone-200 rounded-lg p-5 hover:border-emerald-400 hover:bg-stone-50 transition-all cursor-pointer flex justify-between items-center group">
                    <span className="font-medium text-stone-700 group-hover:text-emerald-700">{q}</span>
                    <CheckCircle size={20} className="text-stone-300 group-hover:text-emerald-500" />
                  </div>
                ))}
             </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;
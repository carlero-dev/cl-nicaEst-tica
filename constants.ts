import { Service, Testimonial } from './types';
import { Star, Sparkles, Heart, Activity } from 'lucide-react';

export const SERVICES: Service[] = [
  {
    id: 'f1',
    title: 'Harmonização Facial',
    description: 'Realce seus traços naturais com preenchimentos estratégicos que promovem equilíbrio e simetria ao rosto.',
    category: 'facial',
    imageUrl: 'https://picsum.photos/600/400?random=1',
  },
  {
    id: 'f2',
    title: 'Botox Preventivo',
    description: 'Suavize linhas de expressão e previna rugas futuras com nossa aplicação precisa de toxina botulínica.',
    category: 'facial',
    imageUrl: 'https://picsum.photos/600/400?random=2',
  },
  {
    id: 'f3',
    title: 'Peeling de Diamante',
    description: 'Renovação celular profunda para uma pele mais luminosa, uniforme e livre de manchas.',
    category: 'facial',
    imageUrl: 'https://picsum.photos/600/400?random=3',
  },
  {
    id: 'c1',
    title: 'Drenagem Linfática',
    description: 'Massagem terapêutica que elimina a retenção de líquidos e toxinas, reduzindo inchaços.',
    category: 'corporal',
    imageUrl: 'https://picsum.photos/600/400?random=4',
  },
  {
    id: 'c2',
    title: 'Lipo Enzimática',
    description: 'Procedimento minimamente invasivo para quebra de gordura localizada através de enzimas potentes.',
    category: 'corporal',
    imageUrl: 'https://picsum.photos/600/400?random=5',
  },
  {
    id: 'c3',
    title: 'Depilação a Laser',
    description: 'Tecnologia de ponta para remoção definitiva dos pelos, com ponteira resfriada para máximo conforto.',
    category: 'corporal',
    imageUrl: 'https://picsum.photos/600/400?random=6',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Mariana S.',
    text: 'O atendimento na Sua Clínica é impecável. Fiz a harmonização e o resultado ficou super natural!',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Carlos B.',
    text: 'Profissionais excelentes e ambiente muito acolhedor. Recomendo os tratamentos corporais.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Fernanda L.',
    text: 'Amei o resultado do Botox. Me sinto 10 anos mais jovem. Obrigada a toda equipe!',
    rating: 4,
  },
];

export const FEATURES = [
  {
    icon: Sparkles,
    title: 'Tecnologia de Ponta',
    description: 'Equipamentos modernos para resultados superiores.'
  },
  {
    icon: Activity,
    title: 'Profissionais Especialistas',
    description: 'Equipe altamente qualificada e certificada.'
  },
  {
    icon: Heart,
    title: 'Cuidado Humanizado',
    description: 'Atendimento focado no seu bem-estar e autoestima.'
  }
];

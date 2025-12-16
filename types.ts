export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'facial' | 'corporal';
  imageUrl: string;
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

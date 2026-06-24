import type { Testimonial } from '../../types/testimonial';

export const testimonials: Testimonial[] = [
  {
    id: 'review-01',
    name: 'Harper Quinn',
    role: 'Homeowner',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote:
      'EstateFlow made our luxury purchase feel effortless. The team guided us through every step with thoughtful, personalized service and incredible market knowledge.',
  },
  {
    id: 'review-02',
    name: 'Ethan Cole',
    role: 'Investor',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    rating: 4,
    quote:
      'The search experience was smooth, with precise filters and premium imagery. We found the perfect property in a vibrant neighborhood in under two weeks.',
  },
  {
    id: 'review-03',
    name: 'Sophie Lane',
    role: 'Renter',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote:
      'I loved the modern UI and fast search tools. The agent recommendations were spot on and made touring properties easy from start to finish.',
  },
];

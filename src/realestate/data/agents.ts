import type { Agent } from '../../types/agent';

export const agents: Agent[] = [
  {
    id: 'agent-01',
    name: 'Avery Locke',
    title: 'Senior Luxury Agent',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
    email: 'avery.locke@estateflow.com',
    phone: '+1 (415) 807-1238',
    office: 'San Francisco, CA',
    experience: 12,
    rating: 4.9,
    reviews: 128,
    specialty: ['Luxury Homes', 'Bay Area', 'Modern Residences'],
    about:
      'Avery combines market expertise with refined service to match discerning buyers with exceptional properties. Her portfolio includes premium estates and stunning waterfront homes.',
  },
  {
    id: 'agent-02',
    name: 'Mila Hart',
    title: 'Residential Property Expert',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    email: 'mila.hart@estateflow.com',
    phone: '+1 (305) 982-3152',
    office: 'Miami, FL',
    experience: 9,
    rating: 4.8,
    reviews: 102,
    specialty: ['Beachfront', 'Urban Condos', 'Investment Properties'],
    about:
      'Mila delivers a premium search experience with tailored home tours and detailed market analysis for every client. She is known for her deep local insight and buyer-first approach.',
  },
  {
    id: 'agent-03',
    name: 'Noah Bennett',
    title: 'Commercial Real Estate Advisor',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
    email: 'noah.bennett@estateflow.com',
    phone: '+1 (212) 456-8423',
    office: 'New York, NY',
    experience: 15,
    rating: 4.95,
    reviews: 176,
    specialty: ['Office Buildings', 'Retail', 'Mixed-Use'],
    about:
      'Noah offers strong negotiation skills and a portfolio of high-profile commercial transactions. He helps businesses secure long-term assets in premium urban locations.',
  },
];

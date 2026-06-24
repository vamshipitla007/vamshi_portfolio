export interface FloorPlan {
  title: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  status: 'For Sale' | 'For Rent' | 'Sold';
  rating: number;
  image: string;
  gallery: string[];
  features: string[];
  amenities: string[];
  floorPlans: FloorPlan[];
  agentId: string;
  mapQuery: string;
  category: string;
}

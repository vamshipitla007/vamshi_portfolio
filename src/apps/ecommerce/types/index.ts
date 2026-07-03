export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: 'earbuds' | 'smartwatch' | 'headphones' | 'speakers' | 'chargers';
  description: string;
  features: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  token: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export interface CartState {
  items: CartItem[];
  total: number;
}

export interface WishlistState {
  items: Product[];
}

export interface NotificationState {
  message: string;
  type: 'success' | 'error' | 'info';
  visible: boolean;
}

export interface FilterOptions {
  category?: string;
  priceRange: [number, number];
  searchTerm: string;
  sortBy: 'newest' | 'price-low' | 'price-high' | 'rating';
}

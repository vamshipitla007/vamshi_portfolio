// User & Auth
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  addresses: Address[];
  preferences?: {
    vegetarian: boolean;
    spicy: boolean;
    dietary: string[];
  };
}

export interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  street: string;
  city: string;
  postalCode: string;
  coordinates?: { lat: number; lng: number };
  isDefault: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  token: string | null;
}

// Restaurant
export interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisine: string[];
  rating: number;
  reviewCount: number;
  deliveryTime: number;
  deliveryFee: number;
  minOrder: number;
  isOpen: boolean;
  tags: string[];
  description: string;
  address: string;
  phone: string;
}

// Dish
export interface Dish {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isVegetarian: boolean;
  isSpicy: boolean;
  isPopular: boolean;
  preparationTime: number;
  ingredients?: string[];
}

// Cart
export interface CartItem {
  id: string;
  dishId: string;
  restaurantId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  specialInstructions?: string;
}

export interface CartState {
  items: CartItem[];
  restaurantId: string | null;
  totalPrice: number;
  deliveryFee: number;
  isLoading: boolean;
}

// Wishlist
export interface WishlistItem {
  id: string;
  type: 'restaurant' | 'dish';
  itemId: string;
  name: string;
  image: string;
  addedAt: number;
}

export interface WishlistState {
  items: WishlistItem[];
}

// Order
export interface Order {
  id: string;
  restaurantId: string;
  restaurantName: string;
  items: CartItem[];
  totalAmount: number;
  deliveryFee: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'on-way' | 'delivered' | 'cancelled';
  createdAt: number;
  deliveryAddress: Address;
  estimatedDeliveryTime: number;
}

// UI State
export interface UIState {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  cartSidebarOpen: boolean;
  searchQuery: string;
  selectedFilters: {
    cuisine: string[];
    rating: number;
    deliveryTime: 'any' | '30' | '60';
    priceRange: [number, number];
  };
  isLoading: boolean;
  notification: {
    type: 'success' | 'error' | 'info' | 'warning';
    message: string;
  } | null;
}

// API Response
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Restaurant State
export interface RestaurantState {
  items: Restaurant[];
  selectedRestaurant: Restaurant | null;
  isLoading: boolean;
  error: string | null;
  filters: {
    cuisine: string[];
    rating: number;
    deliveryTime: 'any' | '30' | '60';
  };
}

// Dish State
export interface DishState {
  items: Dish[];
  selectedDish: Dish | null;
  isLoading: boolean;
  error: string | null;
  categoryFilter: string;
}

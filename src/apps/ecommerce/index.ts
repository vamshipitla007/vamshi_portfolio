// Context Exports
export { CartProvider, useCart } from './context/CartContext';
export { WishlistProvider, useWishlist } from './context/WishlistContext';
export { AuthProvider, useAuth } from './context/AuthContext';
export { ThemeProvider, useTheme } from './context/ThemeContext';

// Page Exports
export { HomePage } from './pages/HomePage';
export { ProductsPage } from './pages/ProductsPage';
export { ProductDetailsPage } from './pages/ProductDetailsPage';
export { CartPage } from './pages/CartPage';
export { WishlistPage } from './pages/WishlistPage';
export { AboutPage } from './pages/AboutPage';
export { ContactPage } from './pages/ContactPage';
export { LoginPage } from './pages/LoginPage';
export { SignupPage } from './pages/SignupPage';

// Type Exports
export * from './types/index';

// Data Exports
export { PRODUCTS, CATEGORIES, PRICE_RANGES } from './data/products';

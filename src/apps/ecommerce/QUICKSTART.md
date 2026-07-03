# ElectroHub E-Commerce - Developer Quick Start

## 🚀 Quick Navigation

### Access the Application
```
http://localhost:5173/ecommerce
```

### Key Routes
- `/ecommerce` - Home page
- `/ecommerce/products` - Products listing
- `/ecommerce/product/:id` - Product details
- `/ecommerce/cart` - Shopping cart
- `/ecommerce/wishlist` - Wishlist
- `/ecommerce/about` - About page
- `/ecommerce/contact` - Contact page
- `/ecommerce/login` - Login page
- `/ecommerce/signup` - Sign up page

## 📦 Component Usage Examples

### Using useCart Hook
```tsx
import { useCart } from './context/CartContext';

function MyComponent() {
  const { items, addToCart, removeFromCart, total } = useCart();
  
  return (
    <button onClick={() => addToCart(product, 1)}>
      Add to Cart ({total})
    </button>
  );
}
```

### Using useWishlist Hook
```tsx
import { useWishlist } from './context/WishlistContext';

function WishlistBtn() {
  const { addToWishlist, isInWishlist } = useWishlist();
  const isFavorite = isInWishlist(productId);
  
  return (
    <button onClick={() => addToWishlist(product)}>
      {isFavorite ? '❤️' : '🤍'}
    </button>
  );
}
```

### Using useAuth Hook
```tsx
import { useAuth } from './context/AuthContext';

function LoginForm() {
  const { login, isAuthenticated, user } = useAuth();
  
  const handleLogin = async (email, password) => {
    await login(email, password);
  };
}
```

### Using useTheme Hook
```tsx
import { useTheme } from './context/ThemeContext';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
```

## 🎨 Component Examples

### Button Component
```tsx
import { Button } from './components';

// Primary button
<Button variant="primary" size="lg">
  Shop Now
</Button>

// Secondary button
<Button variant="secondary" size="md">
  Cancel
</Button>

// Outline button
<Button variant="outline" size="sm">
  Learn More
</Button>
```

### Input Component
```tsx
import { Input } from './components';

<Input
  label="Email Address"
  type="email"
  placeholder="user@example.com"
  error={errors.email}
  helperText="Please enter a valid email"
/>
```

### ProductCard Component
```tsx
import { ProductCard } from './components';

<ProductCard product={productObject} />
```

## 🎯 Common Tasks

### Adding a New Product
1. Edit `data/products.ts`
2. Add to `PRODUCTS` array with all required fields

### Creating a New Page
1. Create component in `pages/`
2. Add route to `EcommerceApp.tsx`
3. Import and use `MainLayout` wrapper

### Adding a New Component
1. Create in `components/` folder
2. Export from `components/index.ts`
3. Use throughout the app

### Customizing Colors
- Primary: Blue to Purple gradient `from-blue-600 to-purple-600`
- Update in `components/`, `pages/`, or globally in Tailwind config

## 📊 Product Data Structure
```tsx
interface Product {
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
```

## 🔍 Debugging Tips

### Check Cart State
```tsx
const { items, total } = useCart();
console.log('Cart items:', items);
console.log('Total:', total);
```

### Check Auth State
```tsx
const { user, isAuthenticated } = useAuth();
console.log('User:', user);
console.log('Authenticated:', isAuthenticated);
```

### Check localStorage
```tsx
// In browser console
localStorage.getItem('cart')
localStorage.getItem('wishlist')
localStorage.getItem('user')
localStorage.getItem('theme')
```

## 🎬 Animation Examples

### Page Transition
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>
```

### Hover Effect
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Hover Me
</motion.button>
```

## 🧪 Testing Components

### Test Cart Functionality
1. Add product to cart
2. Check localStorage for 'cart' key
3. Remove and verify state updates
4. Clear cart and verify

### Test Search/Filter
1. Type in search box
2. Select categories
3. Change price range
4. Sort products
5. Verify results update

### Test Auth
1. Try login with invalid email (should show error)
2. Try password < 6 chars (should show error)
3. Fill form correctly
4. Verify redirect to home
5. Check user stored in localStorage

## 📝 Code Standards

- Use TypeScript for all new files
- Export components from index files
- Use Context API for state
- Prefer functional components with hooks
- Add error handling to async operations
- Include prop types for components
- Use Tailwind classes consistently
- Follow existing naming conventions

## 🐛 Common Issues & Solutions

### Dark Mode not working
- Check if `<ThemeProvider>` wraps the app
- Clear browser cache and localStorage
- Verify `dark:` classes in Tailwind CSS

### Cart not persisting
- Check localStorage is enabled
- Verify `CartProvider` wraps components
- Check browser's storage limits

### Images not loading
- Verify Unsplash URLs are accessible
- Check network tab in DevTools
- Ensure image URLs have correct dimensions

## 📚 File Organization Tips

- Keep components in `components/` folder
- Keep pages in `pages/` folder
- Keep context in `context/` folder
- Keep types in `types/` folder
- Keep mock data in `data/` folder
- Export from index files for cleaner imports

## 🚀 Performance Tips

- Use React.memo for ProductCard
- Lazy load images with Intersection Observer
- Memoize callbacks with useCallback
- Use useMemo for filtered products
- Optimize Framer Motion animations

## 📖 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [React Router](https://reactrouter.com)
- [TypeScript](https://www.typescriptlang.org)

---

Happy coding! 🚀

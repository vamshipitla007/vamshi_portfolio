# ElectroHub - Modern E-Commerce Application

A production-ready, fully responsive e-commerce website for consumer electronics built with React, Vite, Tailwind CSS, and Framer Motion.

## 🎯 Project Overview

ElectroHub is a modern, feature-rich e-commerce platform inspired by leading consumer electronics brands like boAt, Noise, Boult, Fire-Boltt, and Mivi. The application showcases best practices in frontend development with clean architecture, reusable components, and excellent user experience.

## ✨ Key Features

### 1. **Responsive Design**
- Mobile-first approach
- Fully responsive across all screen sizes (mobile, tablet, desktop)
- Smooth navigation and transitions

### 2. **Product Management**
- **Products Page**: Browse all products with grid layout
- **Product Details Page**: Detailed product information with image carousel
- **Search Functionality**: Real-time search across products
- **Advanced Filtering**:
  - By Category (Earbuds, Smartwatches, Headphones, Speakers, Chargers)
  - By Price Range
  - Multi-sort options (Newest, Price Low-High, Price High-Low, Highest Rated)

### 3. **Shopping Features**
- **Add to Cart**: Add products with quantity selection
- **Shopping Cart**: View, modify quantities, and remove items
- **Wishlist**: Save favorite products for later
- **Persistent Storage**: Cart and wishlist data saved to localStorage

### 4. **Authentication**
- **Login Page**: Email-based login with validation
- **Signup Page**: New account creation with password strength indicator
- **Form Validation**:
  - Email format validation
  - Password minimum 6 characters
  - Password confirmation match
- **Toast Notifications**: Visual feedback for all actions

### 5. **User Experience**
- **Dark/Light Mode**: Theme toggle with persistence
- **Smooth Animations**: Page transitions and hover effects with Framer Motion
- **Loading States**: Skeleton loaders for better UX
- **Toast Notifications**: React Hot Toast for all user feedback

### 6. **Pages**
- **Home Page**: Hero banner, featured products, categories, CTA section
- **Products Page**: Grid layout with search and filters
- **Product Details**: Carousel, specifications, related products
- **Cart**: Full cart management with order summary
- **Wishlist**: Saved products management
- **About Us**: Company story, statistics, values
- **Contact Us**: Contact form, location info, FAQ
- **Login/Signup**: Authentication pages

## 📁 Project Structure

```
src/apps/ecommerce/
├── components/              # Reusable UI components
│   ├── Button.tsx          # Button with variants
│   ├── Input.tsx           # Input with validation
│   ├── ProductCard.tsx     # Product card component
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer component
│   ├── Carousel.tsx        # Swiper carousel
│   └── Loader.tsx          # Loading skeleton
├── context/                # State management
│   ├── CartContext.tsx     # Shopping cart state
│   ├── WishlistContext.tsx # Wishlist state
│   ├── AuthContext.tsx     # Authentication state
│   └── ThemeContext.tsx    # Dark/Light mode
├── pages/                  # Page components
│   ├── HomePage.tsx
│   ├── ProductsPage.tsx
│   ├── ProductDetailsPage.tsx
│   ├── CartPage.tsx
│   ├── WishlistPage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── LoginPage.tsx
│   └── SignupPage.tsx
├── layouts/                # Layout components
│   └── MainLayout.tsx      # Main layout wrapper
├── types/                  # TypeScript types
│   └── index.ts           # All type definitions
├── data/                   # Mock data
│   └── products.ts        # Product data and constants
└── EcommerceApp.tsx       # Main app router
```

## 🛠 Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Routing**: React Router v7
- **State Management**: Context API + localStorage
- **Animations**: Framer Motion
- **Notifications**: React Hot Toast
- **Carousel**: Swiper.js
- **Icons**: Lucide React

## 🚀 Getting Started

### Installation

```bash
# Navigate to project directory
cd src/apps/ecommerce

# Install dependencies (already done in parent project)
npm install
```

### Running the Application

```bash
# From project root
npm run dev

# Navigate to:
# http://localhost:5173/ecommerce
```

### Building for Production

```bash
npm run build
npm run preview
```

## 📖 Component Documentation

### Button Component
```tsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>
```
**Props**: variant ('primary' | 'secondary' | 'outline'), size ('sm' | 'md' | 'lg')

### Input Component
```tsx
<Input
  label="Email"
  type="email"
  placeholder="user@example.com"
  error={errors.email}
  helperText="Enter valid email"
/>
```

### ProductCard Component
```tsx
<ProductCard product={product} />
```
Displays product with image, price, rating, and action buttons.

## 📊 Data Management

### Mock Products
- 12 pre-configured products
- Categories: Earbuds, Smartwatches, Headphones, Speakers, Chargers
- Each product includes: id, name, price, originalPrice, images, description, features, rating, reviews

### Price Ranges
- Under ₹2,000
- ₹2,000 - ₹5,000
- ₹5,000 - ₹10,000
- Above ₹10,000

## 🎨 Styling Features

- **Color Scheme**: Blue and Purple gradients
- **Dark Mode**: Full dark mode support
- **Responsive Grid**: Auto-adjusting layouts
- **Hover Effects**: Scale, shadow, and color transitions
- **Custom Animations**: Fade, slide, and scale animations

## 🔐 Authentication

- Email/Password validation
- Mock authentication (no backend)
- User data persisted in localStorage
- Protected routes ready for integration

## 🛒 Cart Features

- Add products with quantity
- Update quantities in real-time
- Remove individual items or clear cart
- Total price calculation
- Persistent storage

## 💝 Wishlist Features

- Add/remove products
- View all saved products
- Quick add to cart from wishlist
- Persistent storage

## 🎬 Animations

- **Page Transitions**: Smooth fade and slide effects
- **Hover States**: Scale and shadow effects
- **Loading States**: Skeleton loaders with pulse animation
- **Modal Animations**: Smooth open/close transitions
- **Button Interactions**: Click feedback and transitions

## 🔔 Notifications

All actions show toast notifications:
- Login/Signup success/errors
- Add to cart
- Remove from cart
- Wishlist actions
- Form submissions

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Mobile menu automatically appears on smaller screens with hamburger navigation.

## ⚙️ Configuration

### Theme Colors
```tsx
// Primary gradient
from-blue-600 to-purple-600

// Dark mode
dark:bg-gray-900
dark:text-white
```

### Product Image URLs
Using Unsplash CDN for high-quality product images with proper sizing.

## 🔄 State Management Flow

```
App (EcommerceApp)
├── ThemeProvider
│   └── AuthProvider
│       └── CartProvider
│           └── WishlistProvider
│               └── Routes
```

## 📝 Key Implementation Details

### Form Validation
- Email: RFC compliant regex
- Password: Minimum 6 characters
- Password confirmation: Match validation
- Real-time error display

### Search Implementation
- Case-insensitive search
- Searches across product name and description
- Real-time filtering

### Filter System
- Category filter with radio buttons
- Price range selection
- Sort options with multiple criteria
- Reset filters functionality

## 🎯 Usage Examples

### Add to Cart
```tsx
const { addToCart } = useCart();
addToCart(product, quantity);
```

### Manage Wishlist
```tsx
const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
```

### Toggle Theme
```tsx
const { isDark, toggleTheme } = useTheme();
```

## 🚢 Deployment Ready

- Optimized for production build
- No console errors
- Lazy loading ready
- Performance optimized
- SEO metadata ready

## 📦 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎓 Learning Resources

This project demonstrates:
- React Hooks and Context API
- TypeScript best practices
- Responsive design patterns
- Component composition
- State management
- Form handling and validation
- Animation techniques
- localStorage usage

## 🔄 Future Enhancements

- [ ] Backend integration with API
- [ ] Payment gateway integration
- [ ] Order tracking
- [ ] User profiles
- [ ] Product reviews and ratings
- [ ] Inventory management
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Social sharing
- [ ] Analytics integration

## 📞 Support

For questions or issues, refer to the Contact Us page in the application.

## 📄 License

This project is part of the Vamshi Portfolio project.

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**

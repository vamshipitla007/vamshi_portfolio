import { ThemeProvider } from './context/ThemeContext';
import { RealEstateRoutes } from './routes/RealEstateRoutes';

export function RealEstateApp() {
  return (
    <ThemeProvider>
      <RealEstateRoutes />
    </ThemeProvider>
  );
}

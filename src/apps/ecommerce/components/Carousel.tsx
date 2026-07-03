import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CarouselProps {
  slides: React.ReactNode[];
  autoplay?: boolean;
  effect?: 'slide' | 'fade';
  showNavigation?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoplay = true,
  effect = 'slide',
  showNavigation = true,
}) => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect={effect}
        autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: '.carousel-prev',
          nextEl: '.carousel-next',
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              {slide}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showNavigation && (
        <>
          <button className="carousel-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white dark:bg-gray-800/80 p-2 rounded-full transition-all hover:scale-110">
            <ChevronLeft size={24} className="text-gray-900 dark:text-white" />
          </button>
          <button className="carousel-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white dark:bg-gray-800/80 p-2 rounded-full transition-all hover:scale-110">
            <ChevronRight size={24} className="text-gray-900 dark:text-white" />
          </button>
        </>
      )}
    </div>
  );
};

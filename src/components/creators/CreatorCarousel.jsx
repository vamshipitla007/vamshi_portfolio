import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CreatorCard from './CreatorCard';
import { creatorData } from './creatorData';

const CreatorCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const creatorCount = creatorData.length;

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    const currentCarousel = carouselRef.current;
    if (currentCarousel) {
      currentCarousel.addEventListener('keydown', handleKeyDown);
      return () => currentCarousel.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % creatorCount);
  }, [creatorCount]);

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + creatorCount) % creatorCount);
  }, [creatorCount]);

  const handleCardClick = useCallback((index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }, [activeIndex]);

  // Get visible cards
  const getVisibleCards = () => {
    const cards = [];

    if (isMobile) {
      // Mobile: show only active card
      cards.push({
        index: activeIndex,
        offset: 0,
        isActive: true,
      });
    } else {
      // Desktop/Tablet: show previous, active, and next
      cards.push({
        index: (activeIndex - 1 + creatorCount) % creatorCount,
        offset: -1,
        isActive: false,
      });
      cards.push({
        index: activeIndex,
        offset: 0,
        isActive: true,
      });
      cards.push({
        index: (activeIndex + 1) % creatorCount,
        offset: 1,
        isActive: false,
      });
    }

    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <div
      ref={carouselRef}
      className="w-full focus:outline-none"
      tabIndex={0}
      role="region"
      aria-label="Creator carousel navigation"
    >
      {/* Carousel Container */}
      <div className="relative">
        {/* Cards Wrapper */}
        <div className="flex justify-center items-center">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleCards.map((card) => (
              <CreatorCard
                key={creatorData[card.index].id}
                creator={creatorData[card.index]}
                isActive={card.isActive}
                onClick={() => handleCardClick(card.index)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-4 md:px-8">
          {/* Previous Button */}
          <motion.button
            onClick={handlePrevious}
            className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 group"
            aria-label="Previous creator"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </motion.button>

          {/* Next Button */}
          <motion.button
            onClick={handleNext}
            className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 group"
            aria-label="Next creator"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </motion.button>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {creatorData.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleCardClick(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'bg-blue-600 w-8'
                : 'bg-gray-300 w-2 hover:bg-gray-400'
            }`}
            aria-label={`Go to creator ${index + 1}`}
            aria-current={index === activeIndex ? 'true' : 'false'}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-6 text-sm text-gray-600">
        <motion.span
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Creator {activeIndex + 1} of {creatorCount}
        </motion.span>
      </div>
    </div>
  );
};

export default CreatorCarousel;

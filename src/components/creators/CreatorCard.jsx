import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

const CreatorCard = React.memo(({ creator, isActive, onClick }) => {
  return (
    <motion.div
      layout
      onClick={onClick}
      className="cursor-pointer flex-shrink-0"
      style={{ width: '320px' }}
      initial={false}
      animate={{
        scale: isActive ? 1 : 0.85,
        opacity: isActive ? 1 : 0.7,
        zIndex: isActive ? 20 : 10,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.5,
      }}
    >
      <motion.div
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        whileHover={{
          y: -8,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Image Container */}
        <div className="relative h-80 overflow-hidden bg-gray-200">
          <img
            src={creator.image}
            alt={creator.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Container */}
        <div className="p-6 pb-8 relative z-10">
          {/* Category Badge */}
          <div className="mb-2">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
              {creator.category}
            </span>
          </div>

          {/* Creator Name */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {creator.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {creator.description}
          </p>

          {/* Rating and Projects */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold text-gray-900">
                {creator.rating}
              </span>
            </div>
            <span className="text-xs text-gray-500">
              {creator.projects} projects
            </span>
          </div>

          {/* CTA Button */}
          <motion.button
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 group/btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`View profile of ${creator.name}`}
          >
            <span>View Profile</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Active Indicator */}
        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    </motion.div>
  );
});

CreatorCard.displayName = 'CreatorCard';

export default CreatorCard;

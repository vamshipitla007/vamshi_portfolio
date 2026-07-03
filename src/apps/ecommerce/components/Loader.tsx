import React from 'react';
import { motion } from 'framer-motion';

export const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-600"
      />
    </div>
  );
};

export const Skeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.div
    animate={{ opacity: [0.5, 1, 0.5] }}
    transition={{ duration: 1.5, repeat: Infinity }}
    className={`bg-gray-300 dark:bg-gray-700 rounded-lg ${className}`}
  />
);

export const ProductCardSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden p-4">
    <Skeleton className="w-full h-64 mb-4" />
    <Skeleton className="w-3/4 h-6 mb-2" />
    <Skeleton className="w-1/2 h-4 mb-4" />
    <div className="flex gap-2">
      <Skeleton className="flex-1 h-10" />
      <Skeleton className="w-10 h-10" />
    </div>
  </div>
);

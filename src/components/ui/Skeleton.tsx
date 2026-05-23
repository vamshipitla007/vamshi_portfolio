import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  className?: string;
  count?: number;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '20px',
  borderRadius = '4px',
  className = '',
  count = 1,
}) => {
  const skeletons = Array(count).fill(null);

  return (
    <>
      {skeletons.map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            width,
            height,
            borderRadius,
          }}
          className={`bg-gray-200 dark:bg-gray-700 ${className}`}
        />
      ))}
    </>
  );
};

export const RestaurantCardSkeleton: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
  >
    <Skeleton height="160px" borderRadius="0" />
    <div className="p-4 space-y-4">
      <Skeleton height="24px" />
      <Skeleton height="14px" width="80%" />
      <div className="flex gap-4">
        <Skeleton width="100px" height="16px" />
        <Skeleton width="100px" height="16px" />
      </div>
    </div>
  </motion.div>
);

export const DishCardSkeleton: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
  >
    <Skeleton height="160px" borderRadius="0" />
    <div className="p-3 space-y-3">
      <Skeleton height="18px" />
      <Skeleton height="12px" width="90%" />
      <Skeleton height="16px" width="40%" />
    </div>
  </motion.div>
);

export const CartItemSkeleton: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
  >
    <Skeleton width="80px" height="80px" borderRadius="8px" />
    <div className="flex-1 space-y-3">
      <Skeleton height="18px" width="70%" />
      <Skeleton height="14px" width="50%" />
      <Skeleton height="32px" width="100px" borderRadius="8px" />
    </div>
  </motion.div>
);

export default Skeleton;

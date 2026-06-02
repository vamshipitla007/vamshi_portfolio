import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import CreatorCarousel from './CreatorCarousel';

const ExploreMillionsOfCreators = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top gradient blur */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" />
        {/* Bottom gradient blur */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="mb-12 md:mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">
                Explore Creators
              </span>
            </div>
          </motion.div>

          {/* Heading and Description */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left: Main Heading */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Explore Millions of{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Creators
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Connect with talented professionals from around the world and
                discover the perfect creator for your next project. Browse
                through our curated selection of verified creators across
                multiple disciplines.
              </p>
            </motion.div>

            {/* Right: Stats Card */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-1 flex flex-col justify-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Creators</p>
                    <p className="text-3xl font-bold text-gray-900">1M+</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm text-gray-500 mb-1">
                      Countries Covered
                    </p>
                    <p className="text-3xl font-bold text-gray-900">150+</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 15,
            delay: 0.3,
          }}
          className="py-8"
        >
          <CreatorCarousel />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-600 mb-4">
            Ready to find your next collaborator?
          </p>
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse All Creators
            <span className="text-lg">→</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50/50 pointer-events-none" />
    </section>
  );
};

export default ExploreMillionsOfCreators;

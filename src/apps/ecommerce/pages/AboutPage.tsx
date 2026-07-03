import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { motion } from 'framer-motion';
import { Users, Award, Zap, Globe } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to your doorstep',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'All products are verified and authentic',
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: '24/7 dedicated customer service team',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving customers across the country',
    },
  ];

  const stats = [
    { number: '50K+', label: 'Products' },
    { number: '1M+', label: 'Happy Customers' },
    { number: '500+', label: 'Brands' },
    { number: '99%', label: 'Satisfaction' },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            About ElectroHub
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-90 max-w-2xl mx-auto"
          >
            Your one-stop destination for premium consumer electronics at unbeatable prices
          </motion.p>
        </div>
      </div>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              ElectroHub was founded with a mission to make premium consumer electronics accessible to everyone.
              We believe that quality tech should not come with a premium price tag.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Starting with a small warehouse and a big dream, we've grown into one of the most trusted electronics
              retailers in the country. Our commitment to quality, customer service, and competitive pricing has
              earned us the trust of millions of customers.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Today, we partner with over 500 brands and offer more than 50,000 products to choose from.
              Every product is carefully selected and verified to ensure authenticity and quality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-8 h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-5xl">⚡</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">ElectroHub</p>
              <p className="text-gray-600 dark:text-gray-400">Your Tech Destination</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</p>
                <p className="text-gray-600 dark:text-gray-400 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'We believe in transparency and honesty in all our dealings',
              },
              {
                title: 'Excellence',
                description: 'We strive to deliver the best products and services',
              },
              {
                title: 'Customer First',
                description: 'Your satisfaction is our top priority',
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

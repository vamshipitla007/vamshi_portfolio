import React, { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Input } from '../components/Input';
import toast from 'react-hot-toast';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'support@electrohub.com',
      link: 'mailto:support@electrohub.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+91 1234567890',
      link: 'tel:+911234567890',
    },
    {
      icon: MapPin,
      title: 'Address',
      info: '123 Tech Street, Innovation City, India',
      link: '#',
    },
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
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-90"
          >
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          {contactInfo.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.info}</p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Your Name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />

              <Input
                label="Subject"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Image/Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-8 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why Contact Us?</h3>
            <ul className="space-y-4">
              {[
                'Get answers to your product questions',
                'Report issues or bugs',
                'Suggest new features',
                'Provide feedback',
                'Discuss partnerships',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                <strong>Response Time:</strong>
              </p>
              <p className="text-gray-900 dark:text-white">
                We typically respond within 24 hours on business days.
              </p>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'What are your shipping times?',
                a: 'We offer standard delivery within 5-7 business days and express delivery within 2-3 business days.',
              },
              {
                q: 'Do you offer returns?',
                a: 'Yes, we offer a 30-day return policy for all products in original condition.',
              },
              {
                q: 'Are all products authentic?',
                a: 'Absolutely! All our products are verified and come directly from authorized distributors.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept credit/debit cards, digital wallets, and net banking for seamless transactions.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6"
              >
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">{faq.q}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

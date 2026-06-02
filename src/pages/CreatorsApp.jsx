import React from 'react';
import ExploreMillionsOfCreators from '../components/creators/ExploreMillionsOfCreators';

const CreatorsApp = () => {
  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome to Creator Hub
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover, connect, and collaborate with the world's most talented
              creators across design, video, content, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Creators Section */}
      <ExploreMillionsOfCreators />

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-300 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Creator Hub</h3>
              <p className="text-sm text-gray-400">
                Connecting projects with perfect creators worldwide.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">For Creators</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Sell Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Grow Your Business
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">For Clients</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Browse Creators
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Creator Hub. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default CreatorsApp;

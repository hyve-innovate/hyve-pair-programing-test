import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
import { store } from './app/store';
import ProductsList from './features/products/ProductsList';
import CartWidget from './features/cart/CartWidget';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900">LumiHaus<span className="text-blue-500">.</span></h1>
              </div>
              
              <nav className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-sm font-medium text-blue-500">Home</Link>
                <Link to="/shop" className="text-sm font-medium text-gray-700 hover:text-gray-900">Shop</Link>
                <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900">About</Link>
                <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">Contact</Link>
              </nav>

              <div className="flex items-center space-x-4">
                <button className="text-gray-700 hover:text-gray-900">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
                <CartWidget />
              </div>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <section className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-semibold text-blue-500 tracking-widest uppercase mb-4">
                  WINTER COMFORT, TIMELESS DESIGN
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Discover Our Winter<br />Furniture Collection
                </h2>
                <p className="text-gray-600 mb-8 text-base">
                  Transform your space with pieces designed for warmth and<br />style this season.
                </p>
                <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md transition-colors">
                  BUY NOW
                </button>
              </div>
              <div className="relative flex items-center justify-center">
                {/* Hero image placeholder - candidates can add actual image */}
                <div className="relative w-full max-w-md">
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-gray-100 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <svg className="w-24 h-24 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Hero Image Placeholder</p>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
                  <div className="absolute bottom-4 left-4 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/shop" element={<ProductsList />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">LumiHaus.</h3>
                <p className="text-sm text-gray-600">
                  Carrer Fjord nº 23, Barris Nòrdic,<br />
                  08440, Ciutat Volàtilum,<br />
                  SUECIA
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">Links</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900">Home</Link></li>
                  <li><Link to="/shop" className="text-sm text-gray-600 hover:text-gray-900">Shop</Link></li>
                  <li><Link to="/about" className="text-sm text-gray-600 hover:text-gray-900">About</Link></li>
                  <li><Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link></li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <div className="flex justify-end space-x-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                2024 LumiHaus. All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Provider>
  );
};

export default App;

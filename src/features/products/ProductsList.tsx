import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import ProductCard from '../../components/ProductCard';

const ProductSkeleton: React.FC = () => (
  <div className="animate-pulse">
    <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="flex justify-between items-center">
        <div className="h-5 bg-gray-200 rounded w-16"></div>
        <div className="h-9 w-9 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  </div>
);

const ProductsList: React.FC = () => {
  const { items: products, loading, error } = useSelector((state: RootState) => state.products);

  const handleAddToCart = (productId: number) => {
    // TODO: Implement add to cart functionality
    console.log('Add to cart:', productId);
  };

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Products</h2>
          <div className="flex space-x-6">
            <button className="text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-1">
              New
            </button>
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 pb-1">
              Trendy
            </button>
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 pb-1">
              Sales
            </button>
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search a product"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <svg
            className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Error loading products</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
            Try Again
          </button>
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
            <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No products available</h3>
          <p className="text-gray-600">
            Start by fetching products from the API.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;

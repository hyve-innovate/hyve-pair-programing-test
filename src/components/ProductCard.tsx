import React from 'react';
import type { Product } from '../features/products/productsSlice';

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative">
      {/* Product Image */}
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
          {product.title}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold text-gray-900">
            {product.price.toFixed(2)}€
          </span>
          
          <button
            onClick={() => onAddToCart(product.id)}
            className="p-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full transition-colors"
            aria-label="Add to cart"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

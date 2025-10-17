import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';

const CartWidget: React.FC = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button className="relative text-gray-700 hover:text-gray-900">
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
      
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  );
};

export default CartWidget;

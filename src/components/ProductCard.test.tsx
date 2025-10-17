import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';

// Sample test to help candidates get started
describe('ProductCard', () => {
  const mockProduct = {
    id: 1,
    title: 'Test Product',
    price: 99.99,
    description: 'Test description',
    image: 'https://via.placeholder.com/150',
    category: 'test',
  };

  const mockOnAddToCart = vi.fn();

  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);

    expect(screen.getByText('Test Product')).toBeDefined();
    expect(screen.getByText(/99\.99€/)).toBeDefined();
    expect(screen.getByLabelText('Add to cart')).toBeDefined();
  });

  it('calls onAddToCart when add to cart button is clicked', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);

    const addButton = screen.getByLabelText('Add to cart');
    fireEvent.click(addButton);

    expect(mockOnAddToCart).toHaveBeenCalledWith(1);
  });

  // TODO: Add more tests
  // - Test product image rendering
  // - Test price formatting for different locales
});

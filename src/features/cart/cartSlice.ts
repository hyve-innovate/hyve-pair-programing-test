import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit'; // Uncomment when implementing reducers
import type { Product } from '../products/productsSlice';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // TODO: Implement cart reducers
  },
});

// export const {} = cartSlice.actions;
export default cartSlice.reducer;

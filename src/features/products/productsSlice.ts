import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit'; // Uncomment when implementing reducers

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // TODO: Implement reducers
  },
  extraReducers: () => {
    // TODO: Implement async thunk handling
  },
});

// export const {} = productsSlice.actions;
export default productsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { dashboardStats, recentOrders, products } from '../../data/mockData';

const initialState = {
  stats: dashboardStats,
  recentOrders: recentOrders,
  products: products,
  loading: false,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    }
  },
});

export const { addProduct, deleteProduct } = dashboardSlice.actions;
export default dashboardSlice.reducer;

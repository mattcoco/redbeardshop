import { createSlice } from '@reduxjs/toolkit';
// Get cart items from local storage
// If cart items are not in local storage, set cart items to an empty array
const initialState = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : { cartItems: [] };

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {},
});

export default cartSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
// Get cart items from local storage
// If cart items are not in local storage, set cart items to an empty array
const initialState = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : { cartItems: [] };

const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            // Get the item from the payload
            const item = action.payload;
            // Check if the item is already in the cart
            const existItem = state.cartItems.find((x) => x._id === item._id);
            // If the item is already in the cart, update the quantity
            if (existItem) {
                state.cartItems = state.cartItems.map((x) =>
                    x._id === existItem._id ? item : x
                );
            } else {
                // If the item is not in the cart, add the item to the cart
                //no usamos push porque el estado es inmutable
                state.cartItems = [...state.cartItems, item];
            }

            // Calculate items price
            // Usamos reduce, a high order function, para sumar los precios de los items en el carrito
            state.itemsPrice = state.cartItems.reduce(
                (acc, item) => acc + item.price * item.qty,
                0
            );
            state.itemsPrice = addDecimals(state.itemsPrice);
            // Calculate shipping price (if order is less than $100, shipping is $10)
            state.shippingPrice = state.itemsPrice > 100 ? 0 : 10;
            state.shippingPrice = addDecimals(state.shippingPrice);
            // Calculate tax price
            state.taxPrice = Number((0.15 * state.itemsPrice).toFixed(2));
            state.taxPrice = addDecimals(state.taxPrice);
            // Calculate total price
            state.totalPrice = (
                // Nos aseguramos de que los precios sean números con Number()
                Number(state.itemsPrice) +
                Number(state.shippingPrice) +
                Number(state.taxPrice)
            ).toFixed(2);

            // Save the cart items to local storage
            localStorage.setItem('cart', JSON.stringify(state));
        }
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
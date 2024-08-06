export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
    // Calculate items price
    state.itemsPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );
    state.itemsPrice = addDecimals(state.itemsPrice);
    // Calculate shipping price
    state.shippingPrice = state.itemsPrice > 100 ? 0 : 10;
    state.shippingPrice = addDecimals(state.shippingPrice);
    // Calculate tax price
    state.taxPrice = Number((0.15 * state.itemsPrice).toFixed(2));
    state.taxPrice = addDecimals(state.taxPrice);
    // Calculate total price
    state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
    ).toFixed(2);

    localStorage.setItem('cart', JSON.stringify(state));

    return state;
}
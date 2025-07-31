import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: [],
        showCart: false
    },
    reducers: {
        addProductToCart: (state, action) => {
            state.value = [...state.value, action.payload]
            console.log("Item Added To Cart");
            state.showCart = true

        },
        removeProduct: (state, action) => {
            const productId = action.payload;
            const index = state.value.findIndex(product => product.id === productId);
            state.value.splice(index, 1)
            console.log("Item Removed From Cart");
            if (state.value.length === 0) {
                state.showCart = false;
            }

        },
        clearCart: (state) => {
            state.value = []
             state.showCart = false;
            console.log("Cart Cleared");
        }
    }

})

export const { addProductToCart, clearCart, removeProduct } = cartSlice.actions
export default cartSlice.reducer
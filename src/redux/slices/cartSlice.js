import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: { 
        value: [] 
    },
    reducers: {
        addProductToCart: (state, action) => {
            state.value = [...state.value, action.payload]
            console.log(state.value);
            
        },
        removeProduct: (state, action) => {
            const productId= action.payload;
            const index= state.value.findIndex(product=> product.id===productId);
            state.value.splice(index,1)
            console.log(state.value);
        },
        clearCart: (state) => {
            state.value=[]
        }
    }

})

export const { addProductToCart, clearCart ,removeProduct } = cartSlice.actions
export default cartSlice.reducer
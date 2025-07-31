import { createSlice } from "@reduxjs/toolkit";
import Products from "../../components/Products";


const productSlice = createSlice({
  name: "product",
  initialState: {
    allProducts:Products,
    value: Products,
  },
  reducers: {
    filterBySearch:(state,action)=>{
      const value=action.payload.toLowerCase();
       state.value = state.allProducts.filter((product) => 
         product.fudname.toLowerCase().includes(value) || product.hotelName.toLowerCase().includes(value));
        
    },
    
    filterByPrice: (state, action) => {
      action.payload.split("-").map(Number);
      if (action.payload === "0-200") {
        state.value = state.allProducts.filter((product) => 
          product.price > 0 && product.price <= 200
)}
        else if (action.payload === "200-400") {
        state.value = state.allProducts.filter((product) => 
          product.price >= 200 && product.price <= 400
        )
      }
    },
        
filterByCategory: (state, action) => {
   if (action.payload === "Pure-Veg") {
        state.value = state.allProducts.filter((product) => 
         product.category.includes(action.payload)
)}
        else if (action.payload === "Non-Veg") {
        state.value = state.allProducts.filter((product) => 
         product.category.includes(action.payload)
        )
      }
},
  filterByRatings: (state, action) => {
    state.value = state.value.filter((product) =>
      product.rating >= 4)
  },
    sortByTime: (state) => {
      state.value = state.value.sort((a, b) => {
        const atime = parseInt(a.time.split("-")[0]);
        const btime = parseInt(b.time.split("-")[0]);
        return atime - btime;
      }
      )
    },
    sortByPrice: (state, action) => {
    state.value = state.value.sort((a, b) => {
        if (action.payload === "asc") return a.price - b.price;
        if (action.payload === "dsc") return b.price - a.price;
    });
},

      clearFilters:(state)=>{
        state.value = state.allProducts;
      }
    }

})

export const { filterByPrice, filterByRatings, filterByCategory, sortByTime, sortByPrice,filterBySearch,clearFilters } = productSlice.actions
export default productSlice.reducer
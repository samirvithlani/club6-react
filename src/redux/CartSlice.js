//reducer //actions
//reducer -->file --> actions -->file --> contianer..

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        //actions
        addToCart:(state, action) => {
            //state --> initial state .. cart
            //action --> payload [object] , type
            console.log("action", action); //payload
            state.cart.push(action.payload);
            
        },
    }

})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

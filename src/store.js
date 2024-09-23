import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./redux/CartSlice";
import DataSlice from "./redux/DataSlice";

export const store = configureStore({
    reducer:{
        cart:CartSlice,
        data:DataSlice
    }
})
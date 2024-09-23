//async thunk..

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    users: [],
    isLoading: false,
    error: null
}

export const fetchData = createAsyncThunk(
    "data/fetchData",
    async () => {
        const res = await axios.get("https://node5.onrender.com/user/user")
        return res.data
    }
)



const dataSlice = createSlice({
    name: "data",
    reducers: {},
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.isLoading = false
            state.users = action.payload
        })
        builder.addCase(fetchData.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.error.message
        })
    }
})
export default dataSlice.reducer
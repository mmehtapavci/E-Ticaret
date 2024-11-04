import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    product: [],
    selectedProduct: {},
    loading:false
}

const BASE_URL = "https://fakestoreapi.com/products";

export const getAllProducts = createAsyncThunk("getAllProducts", async()=>{
    axios.get('${BASE_URL}/products');
})

export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        
    },
    extraReducers :(builder) =>{

    }
})

export const {  } = productSlice.actions

export default productSlice.reducer
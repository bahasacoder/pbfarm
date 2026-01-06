<<<<<<< HEAD
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import React, { useEffect, useState } from "react";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data;
})


const productSlice = createSlice({
    name:'products',
    initialState:{
        items:[],
        status: 'idle'
    },
    extraReducers:(builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status='loading'
         })
        .addCase(fetchProducts.fulfilled,(state, action) => {
            state.status = "succeeded",
            state.items = action.payload    
        })
        .addCase(fetchProducts.rejected, (state) => {
            state.status = "failed"
        })
    }
})

export default productSlice.reducer
=======
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import React, { useEffect, useState } from "react";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data;
})


const productSlice = createSlice({
    name:'products',
    initialState:{
        items:[],
        status: 'idle'
    },
    extraReducers:(builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status='loading'
         })
        .addCase(fetchProducts.fulfilled,(state, action) => {
            state.status = "succeeded",
            state.items = action.payload    
        })
        .addCase(fetchProducts.rejected, (state) => {
            state.status = "failed"
        })
    }
})

export default productSlice.reducer
>>>>>>> b210e934a56c2325b18b4e88d2e4b0527105ee65

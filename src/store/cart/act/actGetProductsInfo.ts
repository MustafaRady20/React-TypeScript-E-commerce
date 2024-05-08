import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../..";



const actGetProductsInfo = createAsyncThunk("act/actGetProductsInfo", async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI

    const { cart } = getState() as RootState
    const ids = Object.keys(cart.items)
    if (!ids.length) {
        return fulfillWithValue([])
    }
    try {
        const conactenatedIds = ids.map(el => `id=${el}`).join("&")
        const response = await axios.get(`http://localhost:5005/products?${conactenatedIds}`)
        // console.log(response.data)
        return response.data

    } catch (err) {
        if (axios.isAxiosError(err)) {
            rejectWithValue("Error")
        } else {
            rejectWithValue("unexpected error ")
        }
    }


})

export default actGetProductsInfo
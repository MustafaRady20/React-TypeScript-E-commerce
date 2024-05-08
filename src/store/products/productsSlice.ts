import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "../../types/shared";
import actGetProductsByCatPrefix from "./act/actGetProductsByPrefix";


interface TProduct { id?: number; title: string; price: string; img: string; cat_prefix: string }

interface IProductState {
    records: TProduct[];
    loading: TLoading;
    error: string | null
}

const initialState: IProductState = {
    records: [],
    loading: "idle",
    error: null
}


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        productsCleanUp: (state) => {
            state.records = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actGetProductsByCatPrefix.pending, (state) => {
            state.loading = "pending"
            state.error = null
        });
        builder.addCase(actGetProductsByCatPrefix.fulfilled, (state, action) => {
            state.records = action.payload;
            state.loading = "succeeded"
        });
        builder.addCase(actGetProductsByCatPrefix.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload
            }
        })

    }
})


export const { productsCleanUp } = productsSlice.actions
export { actGetProductsByCatPrefix }
export default productsSlice.reducer
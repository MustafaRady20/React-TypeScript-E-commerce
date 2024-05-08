import { createSlice } from "@reduxjs/toolkit";
import actGetProductsInfo from "./act/actGetProductsInfo";
import { TLoading } from "../../types/shared";
interface IProductInfo {

    id: number,
    title: string,
    price: string,
    cat_perfix: string,
    img: string
    qunatity: number
}

interface ICartState {
    items: { [key: string]: number },
    productFullInfo: IProductInfo[],
    loading: TLoading,
    error: string | null
}

const initialState: ICartState = {
    items: {},
    productFullInfo: [],
    loading: "idle",
    error: null
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const id = action.payload
            if (state.items[id]) {
                state.items[id]++
            } else {
                state.items[id] = 1
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actGetProductsInfo.pending, (state) => {
            state.loading = "pending";
            state.error = null
        });
        builder.addCase(actGetProductsInfo.fulfilled, (state, action) => {
            state.productFullInfo = action.payload ;
            state.loading = "succeeded";
        });
        builder.addCase(actGetProductsInfo.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload
            }
        })

    }
})



export { actGetProductsInfo }
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
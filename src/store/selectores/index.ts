
import { createSelector } from "@reduxjs/toolkit"
import { RootState } from ".."
const getCartTotlaQuantity = createSelector((state: RootState) => state.cart.items, (items) => {
    console.log("fire")
    const totlaQuantity = Object.values(items).reduce((acc, curr) => acc + curr, 0)
    return totlaQuantity
})

export { getCartTotlaQuantity }

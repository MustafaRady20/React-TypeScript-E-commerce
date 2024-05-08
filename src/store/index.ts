import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

import categories from "./categories/categoriesSlices";
import products from "./products/productsSlice";
import cart from "./cart/cartSlice";


const cartPresistConfig = {
    key: "cart",
    storage,
    whiteList: ["items"]
};

const rootReducer = combineReducers({ categories, products, cart: persistReducer(cartPresistConfig, cart) })

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            },
        })
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch


const presistor = persistStore(store)
export { store, presistor }
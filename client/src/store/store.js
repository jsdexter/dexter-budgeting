import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { transactionSlice } from "./reducers/transactionSlice";

export const reducer = combineReducers({
    transaction: transactionSlice.reducer,
});

const store = configureStore({ reducer });

export default store;
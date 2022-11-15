import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./reducers/transactionSlice";

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});

export default store;

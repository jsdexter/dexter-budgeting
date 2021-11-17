import { createStore, combineReducers } from "redux";
import { transactionSlice } from "./reducers/transactionSlice";

export const reducer = combineReducers({
    transaction: transactionSlice.reducer,
});

const store = createStore(reducer);

export default store;
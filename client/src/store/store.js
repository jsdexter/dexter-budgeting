import { configureStore } from "@reduxjs/toolkit";

import billReducer from "./reducers/billSlice";

const store = configureStore({
    reducer: {
        bill: billReducer,
    }
});

export default store;
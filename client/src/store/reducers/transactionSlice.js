import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        transaction: []
    },

    reducers: {
        addTransaction: (state, action) => {
            state.id = state.id; // this is a no op line
            state.transaction.push(action.payload);
        },
        deleteTransaction: (state, action) => {
            const transaction = state.transaction.filter(item => item.id !== action.payload.id);
            return { transaction };
        },
        loadTransactions: (state, { payload }) => {
            state.transaction = payload;
        },
        changeTransaction: (state, action) => {
            const transaction = state.transaction.map((item) => {
                if (item.id !== action.payload.id) {
                    return item;
                }

                return action.payload;
            });

            return { transaction };
        }
    }
});

const addTransaction = transactionSlice.actions.addTransaction;
const deleteTransaction = transactionSlice.actions.deleteTransaction;
const loadTransactions = transactionSlice.actions.loadTransactions;
const changeTransaction = transactionSlice.actions.changeTransaction;
export { addTransaction, deleteTransaction, loadTransactions, changeTransaction };

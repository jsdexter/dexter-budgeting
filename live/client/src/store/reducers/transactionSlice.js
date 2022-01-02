import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        transaction: []
    },

    reducers: {
        addTransaction: (state, action) => {
            state.id = state.id;
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


// 2021-11-12T00:00:

// const t = new Date('2021-11-05');
// t.toISOString(); // 2018-06-13T12:11:13+05:00

// t.getMonth() // 11
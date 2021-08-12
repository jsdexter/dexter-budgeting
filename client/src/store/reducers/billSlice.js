import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

// export const incomeSlice = createSlice({
//     name: 'income',
//     initialState: {
//         income: []
//     },
//     prepare: (text) => {
//         const id = nanoid();
//         return { payload: { id, text } };
//     },
//     reducers: {
//         addIncome: (state, action) => {
//             state.id = state.id;
//             state.income.push(action.payload);
//         },
//         deleteIncome: (state, action) => {
//             return state.filter(income => income !== action.payload);
//         },
//     }
// });

export const billSlice = createSlice({
    name: 'bill',
    // initialState: [],
    initialState: {
        bill: [],
        income: []
    },
    prepare: (text) => {
        const id = nanoid();
        return { payload: { id, text } };
    },
    reducers: {
        addBill: (state, action) => {
            state.id = state.id;
            state.bill.push(action.payload);
            // state.id = state.billCards.length - 1;
        },
        addIncome: (state, action) => {
            state.id = state.id;
            state.income.push(action.payload);
        },
        deleteBill: (state, action) => {
            return state.filter(bill => bill !== action.payload);
        },
    }
});

// export const billSlice = createSlice({
//     name: 'bill',
//     // initialState: [],
//     initialState: {
//         id: nanoid,
//         bill: []
//     },
//     reducers: {
//         addBill: (state, action) => {
//             state.id = state.id;
//             state.bill.push(action.payload);
//             // state.id = state.billCards.length - 1;
//         },
//         deleteBill: (state, action) => {
//             return state.filter(bill => bill !== action.payload);
//         },
//     }
// });

export default billSlice.reducer;
const addBill = billSlice.actions.addBill;
const deleteBill = billSlice.actions.deleteBill;
export { addBill, deleteBill };


// export const billSlice = createSlice({
//     name: 'bill',
//     // initialState: [],
//     initialState: {
//         current: 0,
//         isBill: true,
//         billCards: [
//             {
//                 id: 0,
//                 amount: 1234,
//                 date: "Jan 12 2021",
//                 name: "City of Monticello"
//             }
//         ]
//     },
//     reducers: {
//         //key = addBill
//         //key value pair
//         addBill: (state, action) => {
//             action.payload.id = state.billCards.length + 1;
//             state.billcards.push(action.payload);
//             state.current = state.billCards.length - 1;
//         },
//         deleteBill: (state, action) => {
//             return state.filter(bill => bill !== action.payload);
//         },
//     }
// });
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   addTransaction,
//   allTransactions,
//   deleteTransaction,
//   updateTransaction,
// } from "../actions/actions";
// import { SERVER_ADDRESS } from "../../constants";

// // let id = state.id;

// const initialState = {
//   loading: false,
//   transaction: [],
//   error: "",
// };

// const url = `${SERVER_ADDRESS}/api/transactions`;

// export const fetchAllTransactionsFromAPI = createAsyncThunk(
//   allTransactions,
//   async () => {
//     const response = await fetch(url);
//     const item = await response.json();

//     return item;
//   }
// );

// const transactionSlice = createSlice({
//   name: "transaction",
//   initialState,
//   extraReducers: {},
// });

// // const fetchTransactionsFromAPI = createAsyncThunk(
// //   "transactions/fetchTransactions",
// //   async (ENDPOINT) => {
// //     item.isPaid = 0;
// //     const requestOptions = {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(item),
// //     };
// //     try {
// //       const response = await fetch(ENDPOINT, requestOptions).then(
// //         (response) => {
// //           response.json();
// //         }
// //       );
// //       if (response.status === 422) {
// //         throw new Error();
// //       }

// //       await response.json();
// //       dispatch(addTransaction(item));
// //       closeModal();
// //     } catch (err) {
// //       setError("Something broke - add transaction");
// //     }
// //   }
// // );

// export const transactionReducer = (state = initialState, action) => {
//   // if (action.type === addTransaction) {
//   //   state.transaction.push(action.payload);
//   // }

//   if (action.type === addTransaction) {
//     state.id = state.id; // this is a no op line
//     state.transaction.push(action.payload);
//   }
//   if (action.type === deleteTransaction) {
//     const transaction = state.transaction.filter(
//       (item) => item.id !== action.payload.id
//     );
//     return { transaction };
//   }

//   if (action.type === allTransactions) {
//     // state.transaction = action.payload;
//     fetchAllTransactionsFromAPI();
//   }

//   if (action.type === updateTransaction) {
//     const transaction = state.transaction.map((item) => {
//       if (item.id !== action.payload.id) {
//         return item;
//       }

//       return action.payload;
//     });

//     return { transaction };
//   }

//   // export const transactionReducer = (state = initialState, action) => {
//   //   // if (action.type === addTransaction) {
//   //   //   state.transaction.push(action.payload);
//   //   // }

//   //   if (action.type === addTransaction) {
//   //     item.isPaid = 0;
//   //     const requestOptions = {
//   //       method: 'POST',
//   //       headers: { 'Content-Type': 'application/json' },
//   //       body: JSON.stringify(item)
//   //     };

//   //     try {
//   //       setError(); // reset error
//   //       const response = await fetch([`${SERVER_ADDRESS}/api/transactions`], requestOptions);
//   //       if (response.status === 422) {
//   //         throw new Error();
//   //       }

//   //       await response.json();
//   //       dispatch(addTransaction(item));
//   //       closeModal();
//   //     } catch (err) {
//   //       setError("Something broke");
//   //     }
//   //   }
//   //   if (action.type === deleteTransaction) {
//   //     const transaction = state.transaction.filter(
//   //       (item) => item.id !== action.payload.id
//   //     );
//   //     return { transaction };
//   //   }

//   //   if (action.type === allTransactions) {
//   //     state.transaction = action.payload;
//   //   }

//   //   if (action.type === updateTransaction) {
//   //     const transaction = state.transaction.map((item) => {
//   //       if (item.id !== action.payload.id) {
//   //         return item;
//   //       }

//   //       return action.payload;
//   //     });

//   //     return { transaction };
//   //   }

//   return state;
// };

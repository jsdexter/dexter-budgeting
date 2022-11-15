import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_ADDRESS } from "../../constants";

const initialState = {
  transactions: [],
  status: null,
  // error: null,
};

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:3070/api/transactions"
      );
      return [...response.data];
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const addTransaction = createAsyncThunk(
  "transaction/addTransaction",
  async (params, thunkAPI) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      };

      const response = await fetch(
        [`${SERVER_ADDRESS}/api/transactions`],
        requestOptions
      );
      await response.json();

      return params;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "something went wrong with adding a transaction"
      );
    }
  }
);

export const removeTransaction = createAsyncThunk(
  "transaction/removeTransaction",
  async (params, thunkAPI) => {
    try {
      await axios.delete(`${SERVER_ADDRESS}/api/transactions/${params.id}`);
      return params;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "something went wrong deleting the transaction"
      );
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "transaction/updateTransaction",
  async (params, thunkAPI) => {
    try {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      };
      const response = await fetch(
        [`${SERVER_ADDRESS}/api/transactions/${params.id}`],
        requestOptions
      );

      await response.json();
      return params;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "something went wrong deleting the transaction"
      );
    }
  }
);

const transactionSlice = createSlice({
  name: "transaction",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.status = "success";
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(removeTransaction.fulfilled, (state, action) => {
        const deletedTransaction = state.transactions.filter(
          (item) => item.id !== action.payload.id
        );
        state.transactions = deletedTransaction;
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        const updatedTransaction = state.transactions.map((item) => {
          if (item.id !== action.payload.id) {
            return item;
          }
          return action.payload;
        });
        state.transactions = updatedTransaction;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
      });
  },
});

// export const loadAllTransactions = (state) => state.transactions;
export const getTransactionsStatus = (state) => state.status;
// export const getTransactionsError = (state) => state.error;
export default transactionSlice.reducer;

// const addTransaction = transactionSlice.actions.addTransaction;
// const deleteTransaction = transactionSlice.actions.deleteTransaction;
// const loadTransactions = transactionSlice.actions.loadTransactions;
// const changeTransaction = transactionSlice.actions.changeTransaction;
// export {
// addTransaction,
// deleteTransaction,
//   loadTransactions,
// changeTransaction,
// };

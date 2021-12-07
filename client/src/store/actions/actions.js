//Action Types
export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const UPDATE_TRANSACTION = "UPDATE_TRANSACTION";
export const ALL_TRANSACTIONS = "ALL_TRANSACTIONS";

//Actions
export const addTransaction = () => ({ type: ADD_TRANSACTION });
export const deleteTransaction = () => ({ type: DELETE_TRANSACTION });
export const updateTransaction = () => ({ type: UPDATE_TRANSACTION });
export const allTransactions = (transactions) => {
    return {
        type: ALL_TRANSACTIONS,
        payload: transactions,
    };
};

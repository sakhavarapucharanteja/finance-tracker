import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Transaction } from './TransactionTypes';

interface TransactionState {
  transactions: Transaction[];
}

const initialState: TransactionState = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
    },
    removeTransaction: (state, action: PayloadAction<string>) => {
      state.transactions = state.transactions.filter(t => t.id !== action.payload);
    },
  },
});

export const { addTransaction, removeTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
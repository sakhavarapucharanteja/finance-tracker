import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export const useTransactions = () => {
  const transactions = useSelector((state: RootState) => state.transactions.transactions);

  const totalIncome = transactions
    .filter(tx => tx.type === 'income')
    .reduce((acc, tx) => acc + tx.amount, 0);

  const totalExpense = transactions
    .filter(tx => tx.type === 'expense')
    .reduce((acc, tx) => acc + tx.amount, 0);

  const balance = totalIncome - totalExpense;

  return { transactions, totalIncome, totalExpense, balance };
};
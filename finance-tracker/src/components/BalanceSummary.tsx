import React from 'react';
import { useTransactions } from '../features/transactions/useTransactions';

const BalanceSummary: React.FC = () => {
  const { totalIncome, totalExpense, balance } = useTransactions();

  return (
    <div>
      <h2>Balance Summary</h2>
      <p>Total Income: ${totalIncome.toFixed(2)}</p>
      <p>Total Expense: ${totalExpense.toFixed(2)}</p>
      <h3>Balance: ${balance.toFixed(2)}</h3>
    </div>
  );
};

export default BalanceSummary;
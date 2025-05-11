import React from 'react';
import { useDispatch } from 'react-redux';
import { useTransactions } from '../features/transactions/useTransactions';
import { removeTransaction } from '../features/transactions/transactionSlice';

const TransactionList: React.FC = () => {
  const dispatch = useDispatch();
  const { transactions } = useTransactions();

  return (
    <div>
      <h3>Transaction List</h3>
      <ul>
        {transactions.map(tx => (
          <li key={tx.id}>
            <div>
              <span>{tx.title} - </span>
              <span style={{ color: tx.type === 'income' ? 'green' : 'red' }}>
                ${tx.amount.toFixed(2)}
              </span>
              <span> on {tx.date}</span>
              <button onClick={() => dispatch(removeTransaction(tx.id))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
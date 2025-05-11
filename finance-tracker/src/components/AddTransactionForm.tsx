import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../features/transactions/transactionSlice';
import { v4 as uuidv4 } from 'uuid';

const AddTransactionForm: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<'income' | 'expense'>('income');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !amount || !date) {
      setError('All fields are required');
      return;
    }

    setError('');

    dispatch(addTransaction({
      id: uuidv4(),
      title,
      amount,
      type,
      date,
    }));

    setTitle('');
    setAmount(0);
    setType('income');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Transaction</h2>
      {error && <div className="error">{error}</div>}
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} placeholder="Amount" required />
      <select value={type} onChange={e => setType(e.target.value as 'income' | 'expense')}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTransactionForm;
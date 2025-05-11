import React from 'react';
import BalanceSummary from '../components/BalanceSummary';
import TransactionList from '../components/TransactionList';

const Home: React.FC = () => (
  <div>
    <BalanceSummary />
    <TransactionList />
  </div>
);

export default Home;
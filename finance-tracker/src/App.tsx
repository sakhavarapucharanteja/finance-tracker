import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddTransaction from './pages/AddTransaction';

const App: React.FC = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
      </Routes>
    </div>
  );
};

export default App;
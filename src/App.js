import React from 'react';
import './App.css';
import TransactionList from './Components/TransactionList';
import Header from './Components/Header';
import Filtration from './Components/Filtration';
import NewTransactionButton from './Components/NewTransactionButton';
import Pagination from './Components/Pagination';
import Navigation from './Components/Navigation';

const App = () => {
  return (
    <div id="container">
      <Header />
      <Filtration />
      <TransactionList />
      <Pagination />
      <div class="fixed">
        <NewTransactionButton />
        <Navigation />
      </div>
    </div>
  );
}

export default App;

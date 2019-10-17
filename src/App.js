import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Content from './components/Content';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title name={"Whatever"} />
        <Content />
      </header>
    </div>
  );
}

export default App;

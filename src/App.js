import React from 'react';
import './App.css';
import Sidebar from './Component/Sidebar';
import Header from './Component/Header';
import Table from './Component/Table';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='top'>
      <Header />
      <Table />
      </div>
    </div>
  );
}

export default App;

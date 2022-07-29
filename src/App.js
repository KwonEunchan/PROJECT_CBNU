import React from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Menu></Menu>
    </div>
  );
}

export default App;

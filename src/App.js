import React from 'react';
import './App.scss';
import Header from './components/Header';
import ADBar from './components/ADBar';
import Slide from './components/Slide';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  // 광고란
  const adText = `광고 입력하세요!`
  return (
    <div className="App">
       <Header></Header>
       <ADBar adText = {adText}></ADBar>
       
       <Routes>
        <Route path='/' element={<Slide></Slide>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/sign' element={<SignUp></SignUp>}></Route>
       </Routes>
       
    </div>
  );
}

export default App;

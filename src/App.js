import React, { useEffect, useState } from 'react';
import './App.scss';
import list from './list.json'
import logo from './images/logo.png'

function App() {
  const [rotateCount,setRotateCount] = useState(0)
  const [randomValue,setRandomValue] = useState(Math.floor(Math.random()*list.list.length))
  useEffect(()=>{
    document.querySelector('.cardFront').style.transform = `rotateY(${180*rotateCount}deg)`
    document.querySelector('.cardBack').style.transform = `rotateY(${180*(rotateCount-1)}deg)`
    let temp = randomValue
    while(randomValue===temp){
      temp = Math.floor(Math.random()*list.list.length)
    }
    setTimeout(() => {
      setRandomValue(temp)
    }, 250)
  },[rotateCount])
  return (
    <div className="App">
      <div className='background'>
        <div className='cardBox'>
          <div className='cardFront' onClick={(e)=>{
            
          }}>
            <div className='logoBox'>
              <img className='logo' alt="logo" src={logo}></img>
            </div>
            <div className='infoBox'>
              <p className='nameText'>{ list.list[randomValue].name }</p>
              <p className='locText'>{ `도보 ${list.list[randomValue].loc}` }</p>
              <p className='bestText'>{ list.list[randomValue].best }</p>
              <p className='priceText'>{ list.list[randomValue].price !== 0 ? `${list.list[randomValue].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원` : `변동` }</p>
            </div>      
          </div>
          <div className='cardBack'>
          <div className='logoBox'>
              <img className='logo' alt="logo" src={logo}></img>
            </div>
            <div className='infoBox'>
              <p className='nameText'>{ list.list[randomValue].name }</p>
              <p className='locText'>{ `도보 ${list.list[randomValue].loc}` }</p>
              <p className='bestText'>{ list.list[randomValue].best }</p>
              <p className='priceText'>{ list.list[randomValue].price !== 0 ? `${list.list[randomValue].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원` : `변동`  }</p>
            </div>      
          </div>
        </div>
        <div className='btnReplay' onClick={(e)=>{
          setRotateCount(rotateCount+1)
        }}>다른 거 먹어요!</div>
      </div>
      
    </div>
  );
}

export default App;

import '../styles/Menu.scss';
import { ReactComponent as Home } from '../images/home.svg';
import { ReactComponent as Search } from '../images/search.svg';
import { ReactComponent as Loc } from '../images/location.svg';
import { ReactComponent as Fav } from '../images/favorite.svg';
import { ReactComponent as My } from '../images/my.svg';

export default function Menu(){
  return(
    <div className="menuBar">
      <div className="menu" onClick={()=>{
        const targets = document.querySelectorAll('.icon');
        const targetTexts = document.querySelectorAll('.menu>p');
        targets.forEach((target,index)=>{
          target.style.fill = `#BDBDBD`;
          targetTexts[index].style.color = `#BDBDBD`
        })
        targets[0].style.fill = `#FC5230`;
        targetTexts[0].style.color = `#FC5230`;
      }}>
        <Home fill="#BDBDBD" className="icon"></Home>
        <p>홈</p>
      </div>

      <div className="menu" onClick={()=>{
        const targets = document.querySelectorAll('.icon');
        const targetTexts = document.querySelectorAll('.menu>p');
        targets.forEach((target,index)=>{
          target.style.fill = `#BDBDBD`;
          targetTexts[index].style.color = `#BDBDBD`
        })
        targets[1].style.fill = `#FC5230`;
        targetTexts[1].style.color = `#FC5230`;
      }}>
        <Search fill="#BDBDBD" className="icon"></Search>
        <p>검색</p>
      </div>

      <div className="menu" onClick={()=>{
        const targets = document.querySelectorAll('.icon');
        const targetTexts = document.querySelectorAll('.menu>p');
        targets.forEach((target,index)=>{
          target.style.fill = `#BDBDBD`;
          targetTexts[index].style.color = `#BDBDBD`
        })
        targets[2].style.fill = `#FC5230`;
        targetTexts[2].style.color = `#FC5230`;
      }}>
        <Loc fill="#BDBDBD" className="icon"></Loc>
        <p>주변</p>
      </div>

      <div className="menu" onClick={()=>{
        const targets = document.querySelectorAll('.icon');
        const targetTexts = document.querySelectorAll('.menu>p');
        targets.forEach((target,index)=>{
          target.style.fill = `#BDBDBD`;
          targetTexts[index].style.color = `#BDBDBD`
        })
        targets[3].style.fill = `#FC5230`;
        targetTexts[3].style.color = `#FC5230`;
      }}>
        <Fav fill="#BDBDBD" className="icon"></Fav>
        <p>찜</p>
      </div>

      <div className="menu" onClick={()=>{
        const targets = document.querySelectorAll('.icon');
        const targetTexts = document.querySelectorAll('.menu>p');
        targets.forEach((target,index)=>{
          target.style.fill = `#BDBDBD`;
          targetTexts[index].style.color = `#BDBDBD`
        })
        targets[4].style.fill = `#FC5230`;
        targetTexts[4].style.color = `#FC5230`;
      }}>
        <My fill="#BDBDBD" className="icon"></My>
        <p>마이</p>
      </div>
      
    </div>
  )
}
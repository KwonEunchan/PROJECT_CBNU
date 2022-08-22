import {useState,useEffect} from 'react'
import '../styles/Slide.scss'

export default function Slide(){
  let [ptr,setPtr] = useState(0);
  useEffect(() => {
    document.querySelector('.slideInfo').innerHTML = `${-(ptr-100)/100} / ${document.querySelectorAll('.slideEl').length}`
    document.querySelector('.slideBox').style.left = ptr + `vw`
  }, [ptr]);

  return(
    <div className="slideContainer">
      <div className="slideViewer">
        <div className="slideBox">
          <div className="slideEl">1</div>
          <div className="slideEl">2</div>
          <div className="slideEl">3</div>
          <div className="slideEl">4</div>
        </div>
      </div>
       <div className="btnBox">
        <span className="material-symbols-outlined" onClick={()=>{
          ptr>=0? setPtr(0) : setPtr(ptr+100)
          }}>  
          arrow_circle_left
        </span>
        <span className="slideInfo"></span>
        <span className="material-symbols-outlined" onClick={()=>{
          ptr<=-300? setPtr(0): setPtr(ptr-100)
        }}>
          arrow_circle_right
        </span>
      </div>
    </div>
  )
}
import '../styles/Header.scss'
import logo from '../images/logo_text.png';

export default function Header(){
  return(
    <>
      <header>
        <img src={logo} alt="Logo"></img>
      </header>
    </>
  )
}

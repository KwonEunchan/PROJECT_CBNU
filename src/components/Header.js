import '../styles/Header.scss'
import { Link } from 'react-router-dom';

export default function Header(){

  return(
    <>
      <header>
      <Link to="/" className="home"><div className="logo"></div></Link>
        <ul className="menu">
          <li>관광지</li>
          <li>코스</li>
          <li>주변</li>
          <li>이벤트</li>
          <li>마이</li>
        </ul>
        <ul className="sign">
          <li><Link to="login">로그인</Link></li>
          <li><Link to="sign">회원가입</Link></li>
        </ul>
      </header> 
    </>
  )
}

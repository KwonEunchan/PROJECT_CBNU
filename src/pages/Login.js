import '../styles/Login.scss'

export default function Login(){
  return(
    <div className="login">
      <div className="loginBg"></div>
      <form action="" className="loginForm">
        <div className="logo"></div>
        <div className="loginBox">
          <div className="inputBox">
            <label class="material-symbols-outlined">
              person
            </label>
            <input type="text" placeholder='아이디를 입력하세요' name="id"/>
          </div>
          <div className="inputBox">
            <label class="material-symbols-outlined">
              lock
            </label>
            <input type="password" placeholder='비밀번호를 입력하세요' name="pw"/> 
          </div>
        </div>
        <ul className="optionBox">
          <li>아이디 찾기</li>
          <li>비밀번호 찾기</li>
        </ul>
        <div className="btnBox">
          <input type="submit" value="로그인" />
        </div>
      </form>
    </div>
  )
}
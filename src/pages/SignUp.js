import '../styles/SignUp.scss'

export default function Login(){
  return(
    <div className="sign">
      <div className="signBg"></div>
      <form action="" className="signForm">
        <div className="logo"></div>
        <div className="signBox">
          <div className="inputBox">
            <label class="material-symbols-outlined">
              badge
            </label>
            <input type="text" placeholder='이름을 입력하세요' name="id"/>
          </div>
          <div className="inputBox">
            <label class="material-symbols-outlined">
              person
            </label>
            <input type="text" placeholder='아이디를 입력하세요' name="pw"/> 
          </div>
          <div className="inputBox">
            <label class="material-symbols-outlined">
              lock
            </label>
            <input type="password" placeholder='비밀번호를 입력하세요' name="pw"/> 
          </div>
          <div className="inputBox">
            <label class="material-symbols-outlined">
              smartphone
            </label>
            <input type="text" placeholder='전화번호를 입력하세요 ( - 제외 )' name="pw"/> 
          </div>
          <div className="inputBox">
            <label class="material-symbols-outlined">
              cake
            </label>
            <input type="text" placeholder='생년월일을 입력하세요 ( 8자리 )' name="pw"/> 
          </div>
        </div>
        <div className="btnBox">
          <input type="submit" value="회원가입" />
        </div>
      </form>
    </div>
  )
}
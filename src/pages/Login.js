import '../styles/Login.scss';

export default function Login(){  
  return(<>
    <main>
      <form class="login-form">
        <input type="text" className="inputId" placeholder="아이디를 입력하세요"></input>
        <input type="password" placeholder="비밀번호를 입력하세요" required></input>
        <input type="submit" className="inputSubmit" value="로그인"></input>
      </form>
    </main>
    </>)
}
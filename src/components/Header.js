import '../styles/Header.scss'

export default function Header(){
  return(
    <>
      <header>
        <div className="header-top">
          <p>로그인이 필요합니다</p>
        </div>
        <div className="header-bottom">
          <input type="text" placeholder='검색어를 입력하세요'/>
        </div>
      </header>
    </>
  )
}

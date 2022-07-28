import '../styles/Header.scss'

export default function Header(){
  return(
    <>
      <header>
        <div class="header-top">
          <p>로그인이 필요합니다</p>
        </div>
        <div class="header-bottom">
          <input type="text" placeholder='검색어를 입력하세요'/>
        </div>
      </header>
    </>
  )
}

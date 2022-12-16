# PWA
## 모바일 앱처럼 동작할 수 있는 웹 사이트
1. npx create-react-app [PROJECT_NAME] -–template cra-template-pwa 
2. 다양한 ICON을 준비해야 하며, 특히 512x512 사이즈는 필수로 필요한 듯 하다. ( 오류 발생 있었음 ) 
3. index.html에서 link 태그를 이용해 icon을 불러와야 하며, 이를 manifest.json 파일에도 명시할 필요가 있었다.
4. index.js에서 Service-Worker를 등록해야만 했다.

# SASS/SCSS
## CSS 전처리를 통해 직관적인 문법을 제공
1. 기존에는 npm i node-sass을 이용했으나, 최근에는 권장되지 않음 ( 오류 발생 있었음 )
2. npm i sass-loader와 npm i sass 키워드를 이용해 환경 설정

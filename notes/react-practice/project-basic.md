https://fonts.google.com/ 해당 링크에서 Font 를 Import 해서 사용할 수 있다.

```css
// App.css
@import url("https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Yeon+Sung&display=swap");

.App {
  padding: 20px;
  font-family: "Nanum Pen Script", cursive;
  font-family: "Yeon Sung", cursive;
}
```

React 의 모든 요소들은 root 라는 Id 를 가진 <div> 아래 들어온다.

## 기본 구조

- 기본적으로 margin 이 지정되어있기 때문에 Margin 을 없애기 위해서는 `margin: 0px` 로 지정해주면 된다.
- @media 쿼리를 통해서 CSS 의 규칙을 정할 수 있다. 아래의 코드는 최소 650px 이상에서만 적용되는 코드이다. 즉, 화면에 크기에 따라 CSS 의 규칙을 지정해주는 것이다.

```
@media (min-width: 650px) {
  Body {
    //...
  }
}
```

- process.env.PUBLIC_URL 으로 public 폴더에 접근이 가능하다.

## 공통 컴포넌트 만들기

자주 사용하는 버튼이나 헤더 등은 컴포넌트로 미리 만들어 놓고 사용하면 된다.

- css 에서 display: flex 로 한다면 가로로 묶인다.

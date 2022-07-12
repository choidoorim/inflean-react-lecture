# JSX
React 에서 주로 사용하는 표현식으로 HTML 과 Javascript 를 혼용해서 사용하는 것이다.
컴포넌트를 만드는데 유용하게 사용할 수 있다.

```javascript
// MyHeader.js
const MyHeader = () => {
  return <header>헤더</header>
};

export default MyHeader;

// App.js
import MyHeader from './MyHeader';
// ...
<div className="App">
  <MyHeader />
```
위와 같이 MyHeader 라는 컴포넌트를 만든 뒤 태그와 비슷한 형태(```<MyHeader />```)로 사용하는 것이다.

JSX 에서는 반드시 Closing Tag 를 사용해야 하는데, 만약 사용하지 않고 싶다면 태그를 바로 닫는 것과 같이 ```<div />, <image />``` 이런식으로 사용해야 한다.
그리고 이것을 **Self-Closing Tag** 라고 한다.

최상위 태그란 가장 바깥쪽에 있는 것이라고 생각하면 된다.
```javascript
<div className="App">
  <MyHeader />
  <header className="App-header">
    <h2>Hello React {name}</h2>
  </header>
  <MyFooter />
</div>
```
만약 위와 같다면 ```div``` 태그가 최상위 태그인 것이다.

최상위 태그가 없다면 JSX 는 Error 가 발생하는데 만약 최상위 태그를 대체하고 싶다면 React 의 Fragment 기능을 사용하면 된다.
```javascript
import React from 'react';
//...
<React.Fragment>
  <MyHeader />
  <header className="App-header">
    <h2>Hello React {name}</h2>
  </header>
  <MyFooter />
</React.Fragment>
```
또는 빈 태그를 만들어줘도 해결이 가능하다.
```javascript
<>
  <MyHeader />
  // ...
</>
```

## JSX + CSS 스타일링
그리고 JSX 의 스타일링을 CSS 로 할 수도 있다.
```javascript
// App.js
<div className="App">
  <MyHeader />
  <h2>Hello React {name}</h2>
  <b id='bold_text'> React.JS </b>
  <MyFooter />
</div>

```
```css
.App{
  background-color: black;
}

h2 {
  color: white;
}

header {
  color: white;
}

#bold_text {
  color: green;
}

footer {
  color: red;
}
```
```.``` 은 class 선택자, ```#``` 은 id 선택자이다.

## 인라인 스타일링 방식
CSS 파일을 사용하지 않고 스타일하는 방식이다.   
Object 로 CSS 를 작성하는 것처럼 하면 된다.
```javascript
const Style = {
    App : {
      backgroundColor: 'black',
    },
    h2 : {
      color: 'red',
    },
    bold_text : {
      color: 'green',
    },
}

return (
  <div style={Style.App}>
    <h2 style={Style.h2}>Hello React {name}</h2>
    <b id='bold_text' style={Style.bold_text}> React.JS </b>
  </div>
);
```
그리고 위와 같이 태그 안에 ```style={Style.App}``` 처럼 점표기법 방식으로 스타일을 지정할 수 있다.

## JSX 에 Javascript 값을 사용하는 법
JSX 는 Javascript 변수, 함수, 값 등을 포함할 수 있는데, 표현식도 표현이 가능하다.   
하지만 배열이나 불리언 타입 을 넣는다면 렌더링이 되지 않는다.
따라서 JSX 중괄호 안에는 숫자나 문자열만 포함할 수 있다.
```
const name = 'choi';
<h2 style={Style.h2}>Hello React {name}</h2> - (O)
const isTrue = true;
<h2 style={Style.h2}>Hello React {isTrue}</h2> - (X)
```

그리고 삼항 연산자를 통해서 조건에 따라 다른 것을 렌더링 하도록 할 수가 있다.
```javascript
const num = 5;
<h2> {num} : {num % 2 == 0 ? '짝수' : '홀수'} </h2> 
```
이런 방식의 렌더링을 조건부 렌더링이라고 한다.
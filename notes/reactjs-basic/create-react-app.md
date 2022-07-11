# Create React App
React 를 도와주는 대표적인 2개의 라이브러리가 있다. 
- Webpack
다수의 자바스크립트 파일을 하나의 파일로 합쳐주는 라이브러리

- Babel
자바스크립트의 컴파일러로 JSX 등의 쉽고 직관적인 자바스크립트 문법을 사용할 수 있도록 해주는 라이브러리. JSX 란 HTML 과 Javascript 를 혼영해서 사용하는 것

기초 셋팅 작업을 미리 해놓은 패키지는 Boiler Plate 라고 한다. 
```npx``` 는 ```npm``` 을 편리하게 이용할 수 있는 도구로 설치되어 있는 패키지를 단 한번만 사용하고 싶을 때 사용하는 것이다.
이것을 사용해서 React Boiler Plate 을 설치할 수 있다.

```javascript
function App() {
  const name = 'Choi Doorim';

  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello React {name}</h2>
      </header>
    </div>
  );
}
```
위와 같이 App 이라는 함수 안에 지역 변수를 넣어서 값을 지정할 수도 있다. 
이렇게 Javascript 와 HTML 을 섞어서 사용할 수 있는 것을 **JSX** 라고 한다.   
JSX 문법은 Javascript 값을 HTML 안에 포함시켜 사용할 수 있도록 고안된 문법이다.
즉, React 는 JSX 문법을 사용해서 웹에 필요한 HTML 요소들을 만들어낸다.

React 는 ES Module 시스템을 사용하기 때문에 module.exports 가 아닌 export 를 사용한다.
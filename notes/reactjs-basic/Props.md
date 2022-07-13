# Props
Props 란 컴포넌트에게 데이터를 효율적으로 전달할 수 있도록 해주는 것이다. 

자식 컴포넌트에게 인자처럼 값을 전달할 수 있다.
```
<Counter initialValue={5} />
```
부모 컴포넌트에서 자식컴포넌트에게 이름을 지어서 전달하는 방식을 Props 라고 한다.    
그리고 자식 컴포넌트는 매개변수로 값을 전달받을 수 있다.
```javascript
const Counter = (props) => {
  //...
}
```
매개변수로 받은 props 를 확인해보면 객체 안에서 받는 것을 확인할 수 있다.
```javascript
// 부모 컴포넌트
<Counter initialValue={5} />

// 자식 컴포넌트
const Counter = (props) => {
  console.log(props);   // {initialValue: 5}
  //...
}
```
그리고 부모 컴포넌트에서 몇 개를 보내든 객체 안에 담겨서 받을 수 있다.
만약 전달해야 할 Props 가 많을 경우에는 Spread 연산자(```...object```)를 통해서 한 번에 전달할 수 있다.
```javascript
const counterProps = {
  a: 1,
  b: 2,
  c: 3,
  initialValue: 5,
}
//...
<Counter {...counterProps} />
```
그리고 값을 받을 때는 Destructuring(비구조화) 되어 받을 수 있다.
```javascript
const Counter = ({initialValue, a, b, c}) => {
  //...
}
```

만약 컴포넌트에게 중요한 Props 를 내려주려다가 깜빡하고 할당하지 못하는 경우가 발생할 수 있다.
이런 일을 방지하기 위해서 ```defaultProps``` 라는 것을 설정하여 사전에 에러를 방지할 수 있다는 장점이 있다.
```javascript
const Counter = ({initialValue, a, b, c}) => {
  //...
}

Counter.defaultProps = {
  initialValue: 0,
}
```

### 리렌더링이 발생하는 경우
React 에서 리렌더링이 발생하는 경우는 크게 3가지가 있다.
```
1. 본인의 컴포넌트의 State 가 변경될 때
2. 나의 부모가 리렌더링이 될 때
3. 본인에게 내려오는 Props 의 값이 변경될 때
```

### Props 를 통해 컴포넌트 전달하기
Props 를 통해서 컴포넌트를 인자로 넘기는 것도 가능하다.
```javascript
// Container.js
const Container = ({ children }) => {
  return (
    <div style={{margin : 20, padding: 20, border: '1px solid gray'}}>
      {children}
    </div>
  )
}

export default Container;
```
```javascript
// App.js
<Container>
  <div>
    <MyHeader />
    <Counter {...countProps} />
  </div>
</Container>
```
위의 코드는 App.js 의 HTML 요소들을 Container 컴포넌트의 자식으로 넘기는 것이다.

# State(상태)
State 만으로 React 의 상당히 중요한 기능이다.    
상태란 계속해서 변화하는 어떤 값이고, 그 값에 따라 다른 동작을 수행하도록 하는 것이다.    

예를 들면 요즘 유행하는 웹 페이지별 다크 테마가 있다.
어떤 컴포넌트가 테마라는 상태를 가지고 있고, 테마라는 상태는 다크와 라이트를 가질 수 있다.   
그리고 사용자는 on/off 스위치 같은 것을 통해 다크와 라이트를 변경시키는 이런 방식과 비슷하다. 

State 는 React 의 기능이기 때문에 ```import React, {useState} from 'react'``` 로 상태를 사용하겠다고 받아와야 한다.    

```javascript
const [count, setCount] = useState(0);
```
useState 메서드에서 배열 비구조할당 방식으로 count, setCount 를 받아왔다. 
0번째 인덱스인 count 는 상태의 값으로 사용이 된다. 1번째 인덱스 setCount 는 count 라는 상태의 값을 변경하는 상태 변환 함수로 사용한다.     
그리고 useState 함수를 넘겨주면서 사용한 인자는 count 라는 상태의 초기값으로 사용된다.     
즉, count 는 실질적인 값이 들어있고, setCount 를 통해 값을 변경할 수 있다는 것이다.

React 와 JSX 에서는 중괄호를 통해서 메서드를 사용한다.
```javascript
<button onClick={onIncrease}>+</button>   // O
<button onClick='onIncrease()'>+</button> // X
```

각각의 컴포넌트는 상태가 변경될 때마다 화면을 다시그리는 리렌더 작업을 수행한다.   
밑의 예제에서 Counter 컴포넌트의 count 상태가 변경된다면 Counter 컴포넌트를 사용하는 곳(App.js)에서는 화면을 다시 리렌더 하는 것이다. 
```javascript
// Counter.js
import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  //...
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}

export default Counter
```
```javascript
// App.js
//...
  return (
    <div>
      <MyHeader />
      <Counter/>    // 상태가 변할 때마다 리렌더 작업을 수행
      <MyFooter />
    </div>
  );
```
React 의 이러한 특징 때문에 우리는 실시간으로 값을 변경시키는 기능을 개발할 수 있는 것이다.

그리고 React 는 하나의 컴포넌트에 여러 개의 State 를 가지는 것이 가능하다.
```javascript
import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  //...
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>

      <h2>{count2}</h2>
      <button onClick={onIncrease2}>+</button>
      <button onClick={onDecrease2}>-</button>
    </div>
  )
}

export default Counter
```
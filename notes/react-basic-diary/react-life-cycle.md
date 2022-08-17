# React LifeCycle 제어하기

React 에는 LifeCycle 이 존재합니다.

```
1. 화면에 나타나는 것: Mount ->
2. 업데이트(리랜더): Update(State 가 바뀌거나, 부모가 리랜더되거나 Props 가 바뀌어 컴포넌트 자신이 리랜더되는 과정) ->
3. 화면에서 사라지는 것: UnMount(컴포넌트가 화면에서 사라지는 것)
ex) 1. 초기화 작업 -> 2. 예외 처리 작업 -> 3. 메모리 정리 작업
```

React 에서는 LifeCycle 마다 실행할 수 있는 메서드들이 존재합니다.

```
ComponentDidMount -> ComponentDidUpdate -> ComponentDidUnMount
```

하지만 이러한 메서드들은 클래스형 컴포넌트 함수에서만 사용할 수 있다.
리액트에서는 클래스형 컴포넌트가 가지고 있는 기능을 함수형 컴포넌트에서 Hooking 해서 사용할 수 있는 기능을 React Hooks 라고 불린다.
예를 들면 `useState, useEffect, useRef` 가 있다.  
React Hook 가 나온 이유는 Class형 컴포넌트의 길어지는 코드문제와 중복 문제, 가독성 등을 해결하기 위해서 등장했습니다.

useEffect 는 LifeCycle 을 훔쳐올 수 있는 기능을 한다.

```javascript
import React, { useEffect } from "react";

useEffect(() => {
  // todo...
}, []);
```

useEffect 에서 `[]` 은 의존성 배열입니다. 그리고 배열 내의 값이 변화할 때마다 useEffect 의 콜백함수가 실행됩니다.

### Mount 시점 제어하기

```javascript
useEffect(() => {
  console.log(`mount!!`);
}, []);
```

`useEffect` 의 2번째 인자에 빈 배열을 전달해주고 콜백함수에서 원하는 것을 하면 확인할 수 있습니다.

### Update 시점 제어하기

컴포넌트가 업데이트 되는 시점은 state 가 변경되거나, 부모 컴포넌트가 리랜더링 될 때 입니다.

```javascript
useEffect(() => {
  console.log(`Update!!`);
});
```

`useEffect` 2번째 인자를 넣지않고 콜백함수에서 원하는 것을 하면 확인할 수 있습니다.  
위의 예제 코드를 실행해보면 state 가 변경될 때마다 `` console.log(`Update!!`); `` 가 실행되는 것을 확인할 수 있습니다.

즉, 컴포넌트가 변경되는 시점에 무언가를 하고 싶다면 위의 예제와 같이 사용하면 된다.

```javascript
const [count, setCount] = useState(0);
const [text, setText] = useState("");

useEffect(() => {
  console.log(`Count Update!! ${count}`);
}, [count]);

useEffect(() => {
  console.log(`Count Update!! ${text}`);
}, [text]);
```

그리고 이런식으로 2번째 인자의 배열에 state 값을 넣으면 state 값이 변경되는 시점에 콜백함수가 실행된다.
예를 들면 `count` 가 변경될 때마다 useEffect 의 콜백함수의 `Count Update!! ${text}` 가 실행되는것 입니다.

```javascript
const [count, setCount] = useState(0);

useEffect(() => {
  console.log(`Count Update!! ${count}`);
  if (count > 5) {
    setCount(0);
  }
}, [count]);
```

위의 코드처럼 값을 초기화할 때도 사용할 수 있습니다.

### UnMount 시점 제어하기

```javascript
useEffect(() => {
  console.log(`Mount!!`);
  return () => {
    console.log(`Unmount!!`);
  };
}, []);
```

위의 코드처럼 `useEffect` 의 콜백함수에 함수를 return 하게되면 UnMount 를 제어할 수 있습니다.

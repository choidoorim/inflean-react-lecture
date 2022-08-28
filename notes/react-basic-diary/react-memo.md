# React.memo

부모 컴포넌트가 변경돼서 자식 컴포넌트까지 리랜더링되는 것은 비효율적이다.
이것을 컴포넌트 재사용으로 해결할 수 있다.

```javascript
const Textview = React.memo(({ text }) => {
  useEffect(() => {
    console.log(`Update :: Text : ${text}`);
  });
  return <div>{text}</div>;
});
```

이렇게 `React.memo` 를 컴포넌트를 감싸주면 Prop(text) 이 변경될 때만 리랜더링 됩니다.

하지만 Object 를 Prop 를 넘길 때는 React.memo 가 정확하게 작동되지 않는 것처럼 보이지만 사실 React.memo 는 정확히 동작되는 것이다.

```javascript
const CounterB = React.memo(({ obj }) => {
  useEffect(() => {
    console.log(`Update :: CounterB : ${obj.count}`);
  });
  return <div>{obj.count}</div>;
});
```

그 이유는 Javascript 에서는 객체를 비교할 때 얕은 비교를 하기 때문에 발생되는 것이다.
Javascript 에서는 객체, 함수 등을 비교할 때 값이 아닌 **고유한 메모리 주소를 비교**하기 때문에 정확히 비교를 하지 못합니다.

```javascript
let a = { count: 1 };
let b = { count: 1 };

if (a === b) {
  // 동작 X
  console.log("EQUAL");
} else {
  // 동작 O
  console.log("NOT EQUAL");
}
```

이 문제를 해결하기 위해서는 아래와 같이 수정해서 보안이 가능하다.

```javascript
const areEqual = (prev, next) => {
  return prev.obj.count === next.obj.count;
};

const MemoizedCounterB = React.memo(CounterB, areEqual);
```

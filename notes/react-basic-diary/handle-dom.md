# React 에서 DOM 조작하기
조건에 맞지 않은 입력이 들어왔다고해서 ```alert``` 를 통해 띄우는 것은 요새 트렌드에 벗어납니다.   
따라서 보통 웹 사이트들은 사용하지 자주 사용하지 않고, Focus 를 사용한다.

```useRef``` 는 **HTML Dom 요소에 접근할 수 있도록 도와주는 역할, 기능**을 한다.   
```javascript
const authorInput = useRef();
//...
if (state.author < 1) {
  authorInput.current.focus();
  return;
}
//...
<input ref={authorInput} name="author" value={state.author} onChange={handleChangeState}/>
```
```authorInput.current.focus();``` 코드의 의미는 ```useRef()``` 로 생성한 authorInput 객체에서 현재 가리키는 값을 current 라는 Property 로 불러와서 사용할 수 있습니다.
이 불러온 태그의 focus 라는 기능을 사용할 수 있게 하는 것입니다.

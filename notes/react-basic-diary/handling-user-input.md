# React 에서 사용자 입력 처리
보통 컴포넌트를 나눌 때는 파일을 별도로 분리해서 사용한다.

그리고 직관적으로 스타일 코드를 일치시키기 위해서 className 은 컴포넌트명과 같이 사용하기도 한다.
```javascript
const DiaryEditor = () => {
  return <div className="DiaryEditor"></div>
}
```

useState 는 set 이 없다면 절대로 상태를 변경시킬 수 없다.
```javascript
const [author, setAuthor] = useState("")
```

onChange 라는 이벤트의 콜백함수는 이벤트 객체인 ```e``` 를 매개변수로 전달받는다.
onChange 이벤트는 값이 변경되었을 때 수행하는 이벤트이다.
```javascript
<input value={author} onChange={(event) => {
  console.log(event.target.value);
  setAuthor(event.target.value);
}} />
```
그리고 키보드에서 입력받는 값들은 ```event.target.value``` 데이터에서 받을 수 있다.
set 에 해당 값을 전달하면 State 와 함께 Input 을 이용할 수 있게 된다.

```<textarea/>``` 테그를 사용하면 여러 줄의 문자들을 입력받을 수 있다.
```<textarea/>``` 테그도 ```<input/>``` 태그와 동일하게 사용할 수 있다. 
이런 경우에는 State 를 하나에 묶어서 사용할 수가 있다.
```javascript
const [state, setState] = useState({
  author: "choi",
  contents: 'Contents',
})

return (
  <div className="DiaryEditor">
    <h2>오늘의 일기</h2>
    <div>
      <input value={state.author} onChange={(event) => {
        setState({ author: event.target.value, contents: state.contents });
      }} />
    </div>
    <div>
      <textarea value={state.contents} onChange={(event) => {
        setState({ author: state.author, contents: event.target.value });
      }}/>
    </div>
  </div>
)
```

그리고 event handler 를 통해 공통되는 상태변화 로직을 합칠 수도 있다.
```javascript
const handleChangeState = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
}

return (
<div className="DiaryEditor">
  <h2>오늘의 일기</h2>
  <div>
    <input name="author" value={state.author} onChange={handleChangeState} />
  </div>
  <div>
    <textarea name="contents" value={state.contents} onChange={handleChangeState}/>
  </div>
</div>
)
```
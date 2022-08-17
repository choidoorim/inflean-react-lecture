# 리스트 데이터 추가하기

같은 레벨의 컴포넌트끼리는 데이터를 주고 받을 수 없습니다.  
React 는 **단방향으로만 데이터가 흐릅니다**.  
만약 같은 레벨의 컴포넌트 간에 데이터를 주고 받기 위해서는 부모 컴포넌트에서 공통으로 사용하는 state 를 두고
자식 컴포넌트에게 data 와 상태변화 함수를 전달합니다.

React 에서 데이터들은 트리 구조의 위에서 아래로 흐르지만, 추가/삭제/수정 같은 이벤트들은 아래에서 위로 흐른다.

### Examples

상위 컴포넌트에서 data, 상태 변화 함수를 만들고, data 를 추가할 수 있는 함수를 만들어서 하위 컴포넌트에게 전달합니다.
그리고 하위 컴포넌트에서는 전달받은 함수를 사용합니다.

```javascript
// 상위 컴포넌트
const [diary, setDiary] = useState([]);
const onCreate = ({ author, contents, emotion }) => {
  //...
};

return (
  <div className="App">
    <DiaryEditor onCreate={onCreate} />
    //...
  </div>
);

// 하위 컴포넌트 - DiaryEditor
const DiaryEditor = ({ onCreate }) => {
  //...
  const handleClick = () => {
    //...
    onCreate({
      author: state.author,
      contents: state.contents,
      emotion: state.emotion,
    });
  };
};
```

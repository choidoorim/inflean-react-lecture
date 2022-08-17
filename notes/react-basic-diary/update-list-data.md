# React 에서 데이터 수정하기

데이터를 수정하고 싶을 때 데이터 수정 폼이 나오는 기능을 구현하기 위해서 State 를 사용할 수 있습니다.

```javascript
const [isEdit, setIsEdit] = useState(false);
const toggleIsEdit = () => setIsEdit(!isEdit);
//...
<button onClick={toggleIsEdit}>수정</button>;
```

isEdit 의 값이 true 일 때만 수정 중인 것을 감지해서 수정 창을 띄워준다.
그리고 수정 버튼을 눌렀을 때 마다 `toggleIsEdit` 함수를 실행시켜 state 를 바꿔준다.

isEdit 상태마다 다른 뷰를 보여주기 위해서는 아래와 같이 활용할 수도 있다.

```javascript
{
  isEdit ? (
    <>
      <button onClick={handleQuickEdit}>수정 취소</button>
      <button onClick={handleEdit}>수정 완료</button>
    </>
  ) : (
    <>
      <button onClick={toggleIsEdit}>수정</button>
      <button onClick={handleRemove}>삭제</button>
    </>
  );
}
```

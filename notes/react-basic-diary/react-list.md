# React 에서 리스트 사용하기

배열 리스트를 아래와 같은 방식으로 표현할 수 있습니다.

```javascript
<div>
  {diaryList.map((diary) => (
    <div>
      <div>작성자: {diary.author}</div>
      <div>감정 수치: {diary.emotion}</div>
      <div>작성 일자: {diary.createdAt}</div>
    </div>
  ))}
</div>
```

그리고 props 가 undefined 일 때의 default 값을 아래와 같이 설정할 수 있습니다.

```javascript
const DiaryList = ({ diaryList }) => {
  //...
};
//...
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
```

데이터의 고유 값은 key Props 에 설정해줘야 합니다.
key Props 는 리스트를 수정, 삭제할 때 사용하는 고유 값입니다.

```javascript
{
  diaryList.map((diary) => <div key={diary.id}>//...</div>);
}
```

List 안에서 사용하는 Item 들에 대한 것들을 별도의 컴포넌트로 분할하는 것이 좋다.
Item 들의 값들은 Props 를 통해 전달받으면 된다.

```javascript
<div>
  {diaryList.map((diary) => (
    <DiaryItem key={diary.id} {...diary} />
  ))}
</div>;

// DiaryItem.js
export const DiaryItem = ({ id, author, emotion, createdAt, contents }) => {
  return (
    <div className="DiaryItem" key={id}>
      <div>작성자: {author}</div>
      <div>감정 점수: {emotion}</div>
      <div>작성 일자: {new Date(createdAt).toLocaleString()}</div>
      <div>내용: {contents}</div>
      <br />
    </div>
  );
};
```

# React 에서 데이터 삭제하기

React 에서 상태가 변경될 때 마다 렌더링이 됩니다.
아래와 같은 코드를 통해서 배열의 값을 삭제할 수 있습니다.

```javascript
const [diary, setDiary] = useState([]);

const onDelete = (diaryId) => {
  const newDiaryList = diary.filter((data) => data.id !== diaryId);
  setDiary(newDiaryList);
};
```

filter 함수를 통해 해당 id 의 값을 제외한 새로운 배열을 만드는 것입니다.

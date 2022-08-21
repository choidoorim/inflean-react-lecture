# React 에서 API 호출하기

```javascript
const [diary, setDiary] = useState([]);
const diaryId = useRef(0);

// 1. API 호출
const getCommentData = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments"
  ).then((res) => res.json());

  const data = response.slice(0, 20).map((it) => {
    return {
      author: it.email,
      contents: it.body,
      emotion: 1,
      createdAt: new Date().getTime(),
      id: it.id,
    };
  });

  setDiary(data);
};

// 2. Mount 시점에 API 호출 함수를 실행시켜서 초기값을 설정한다.
useEffect(() => {
  getCommentData();
}, []);
```

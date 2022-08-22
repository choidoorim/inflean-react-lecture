# 최적화 1 - useMemo

### Memoization

이미 계산 해 본 연산결과를 기억해 두었다가 동일한 계산을 시키면, 다시 연산하지 않고 기억해두었던 데이터를 반환 시키게 하는 방법이다.

예를 들면 리스트에 대한 감정 비율을 계산하는 로직이 있다고 가정해보자.

```javascript
function App() {
  const[(diary, setDiary)] = useState([]);

  const getDiaryAnalysis = () => {
    console.log("일기 분석 시작!");

    const goodCount = diary.filter((it) => it.emotion >= 3).length;
    const badCount = diary.length - goodCount;
    const goodRatio = (goodCount / diary.length) * 100;
    return { goodCount, badCount, goodRatio };
  };

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis();
  //...
}
export default App;
```

하지만 업데이트 시 감정점수가 수정되지 않는다고 할 때, 업데이트가 수행된다면 리랜더링이 되면서 비효율적인 계산로직이 들어가게 된다.
따라서 이럴 때 `useMemo` 의 Memoization 기법을 사용하여 이러한 문제를 해결할 수 있다.

```javascript
const getDiaryAnalysis = useMemo(() => {
  console.log("일기 분석 시작!");

  const goodCount = diary.filter((it) => it.emotion >= 3).length;
  const badCount = diary.length - goodCount;
  const goodRatio = (goodCount / diary.length) * 100;
  return { goodCount, badCount, goodRatio };
}, [diary.length]);

const { goodCount, badCount, goodRatio } = getDiaryAnalysis;
```

`useMemo` 에 2 번째 인자 배열에 값은 해당 값이 변경될 때마다 `useMemo` 를 실행하겠다는 의미이다.
그리고 `useMemo` 함수는 변수처럼 사용해야 한다.

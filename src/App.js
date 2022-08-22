import React, { useState, useRef, useEffect, useMemo } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// https://jsonplaceholder.typicode.com/comments
function App() {
  const [diary, setDiary] = useState([]);
  const diaryId = useRef(0);

  const getCommentData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const data = response.slice(0, 20).map((it) => {
      return {
        author: it.email,
        contents: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        createdAt: new Date().getTime(),
        id: it.id,
      };
    });

    setDiary(data);
  };

  useEffect(() => {
    getCommentData();
  }, []);

  const onCreate = ({ author, contents, emotion }) => {
    const createdAt = new Date().getTime();
    const newItem = {
      id: diaryId.current,
      author,
      contents,
      emotion,
      createdAt,
    };
    diaryId.current += 1;
    setDiary([newItem, ...diary]);
  };

  const onDelete = (diaryId) => {
    console.log(`${diaryId} 를 삭제합니다`);
    const newDiaryList = diary.filter((data) => data.id !== diaryId);
    setDiary(newDiaryList);
  };

  const onEdit = (diaryId, newContents) => {
    setDiary(
      diary.map((data) =>
        data.id === diaryId ? { ...data, contents: newContents } : data
      )
    );
  };

  const getDiaryAnalysis = useMemo(() => {
    console.log("일기 분석 시작!");

    const goodCount = diary.filter((it) => it.emotion >= 3).length;
    const badCount = diary.length - goodCount;
    const goodRatio = (goodCount / diary.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [diary.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div className="App">
      <div>전체 일기: {diary.length}</div>
      <div>기분 좋은 일기 개수: {goodCount}</div>
      <div>기분 나쁜 일기 개수: {badCount}</div>
      <div>비율: {goodRatio}</div>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onDelete={onDelete} onEdit={onEdit} diaryList={diary} />
    </div>
  );
}

export default App;

import React, { useState, useRef, useEffect } from "react";
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
        emotion: 1,
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

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onDelete={onDelete} onEdit={onEdit} diaryList={diary} />
    </div>
  );
}

export default App;

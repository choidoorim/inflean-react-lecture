import React, { useState, useRef } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import LifeCycle from "./LifeCycle";

// const diaryList = [
//   {
//     id: 1,
//     author: "최두림",
//     emotion: 1,
//     contents: "test",
//     createdAt: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "최두림2",
//     emotion: 3,
//     contents: "test1",
//     createdAt: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "최두림3",
//     emotion: 2,
//     contents: "test2",
//     createdAt: new Date().getTime(),
//   },
// ];
// const diaryList = undefined;

function App() {
  const [diary, setDiary] = useState([]);
  const diaryId = useRef(0);

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
      <LifeCycle />
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onDelete={onDelete} onEdit={onEdit} diaryList={diary} />
    </div>
  );
}

export default App;

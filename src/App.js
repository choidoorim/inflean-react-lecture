import React from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const diaryList = [
  {
    id: 1,
    author: "최두림",
    emotion: 1,
    contents: "test",
    createdAt: new Date().getTime(),
  },
  {
    id: 2,
    author: "최두림2",
    emotion: 3,
    contents: "test1",
    createdAt: new Date().getTime(),
  },
  {
    id: 3,
    author: "최두림3",
    emotion: 2,
    contents: "test2",
    createdAt: new Date().getTime(),
  },
];
// const diaryList = undefined;

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={diaryList} />
    </div>
  );
}

export default App;

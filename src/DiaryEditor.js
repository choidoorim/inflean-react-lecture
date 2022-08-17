import { useState, useRef } from "react";

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentsInput = useRef();

  const [state, setState] = useState({
    author: "작성자",
    contents: "내용",
    emotion: 1,
  });

  const handleChangeState = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  // 일기저장하기 버튼을 눌렀을 때
  const handleClick = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.contents.length < 5) {
      contentsInput.current.focus();
      return;
    }
    onCreate({
      author: state.author,
      contents: state.contents,
      emotion: state.emotion,
    });
    alert("저장 성공");
    setState({
      author: "작성자",
      contents: "내용",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentsInput}
          name="contents"
          value={state.contents}
          onChange={handleChangeState}
        />
      </div>
      <div>
        오늘의 감정점수:
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleClick}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;

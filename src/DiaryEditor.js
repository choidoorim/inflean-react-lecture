import { useState } from 'react';

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: 'choi',
    contents: 'Contents',
    emotion: 1,
  })

  const handleChangeState = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  const handleClick = () => {
    console.log(state.author, state.contents, state.emotion);
    alert('저장 성공');
  }

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input name="author" value={state.author} onChange={handleChangeState} />
      </div>
      <div>
        <textarea name="contents" value={state.contents} onChange={handleChangeState}/>
      </div>
      <div>
        <select name="emotion" value={state.emotion} onChange={handleChangeState}>
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
  )
}

export default DiaryEditor;
export const DiaryItem = ({ id, author, emotion, createdAt, contents }) => {
  return (
    <div className="DiaryItem" key={id}>
      <div className="info">
        <span>
          작성자: {author} | 감정 점수: {emotion}{" "}
        </span>
        <br />
        <span className="date">
          작성 일자: {new Date(createdAt).toLocaleString()}
        </span>
      </div>
      <div className="content">내용: {contents}</div>
      <br />
    </div>
  );
};

export default DiaryItem;

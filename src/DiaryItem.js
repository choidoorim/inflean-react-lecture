import { useState, useRef } from "react";

export const DiaryItem = ({
  onDelete,
  onEdit,
  id,
  author,
  emotion,
  createdAt,
  contents,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editContent, setEditContent] = useState(contents);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const editContentsInput = useRef();

  const handleRemove = () => {
    if (window.confirm(`정말 삭제하시겠습니다?`)) {
      onDelete(id);
    }
  };

  // 수정 취소 클릭 시 기존 editContent 내용을 원본 값으로 복구한다.
  const handleQuickEdit = () => {
    toggleIsEdit();
    setEditContent(contents);
  };

  const handleEdit = () => {
    if (editContent.length < 5) {
      editContentsInput.current.focus();
      return;
    }
    if (window.confirm(`${id} 를 정말 수정하시겠습니까?`)) {
      onEdit(id, editContent);
      toggleIsEdit();
    }
  };

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
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={editContentsInput}
              value={editContent}
              onChange={(event) => {
                setEditContent(event.target.value);
              }}
            />
          </>
        ) : (
          `내용: ${contents}`
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuickEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={toggleIsEdit}>수정</button>
          <button onClick={handleRemove}>삭제</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;

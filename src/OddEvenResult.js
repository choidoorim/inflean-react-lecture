const OddEvenResult = ({count}) => {
  return (
    <div>
      <b>{count % 2 === 0 ? '짝수' : '홀수'}</b>
    </div>
  )
}

export default OddEvenResult
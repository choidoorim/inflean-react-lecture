import React, { useState, useEffect } from "react";

// const Textview = React.memo(({ text }) => {
//   useEffect(() => {
//     console.log(`Update :: Text : ${text}`);
//   });
//   return <div>{text}</div>;
// });

// const CountView = React.memo(({ count }) => {
//   useEffect(() => {
//     console.log(`Update :: Count : ${count}`);
//   });
//   return <div>{count}</div>;
// });

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`Update :: CounterA : ${count}`);
  });
  return <div>{count}</div>;
});

const CounterB = React.memo(({ obj }) => {
  useEffect(() => {
    console.log(`Update :: CounterB : ${obj.count}`);
  });
  return <div>{obj.count}</div>;
});

const areEqual = (prev, next) => {
  return prev.obj.count === next.obj.count;
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });
  // const [text, setText] = useState("");

  return (
    <div style={{ padding: 50 }}>
      {/* <div>
        <h2>count</h2>
        <CountView count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div> */}
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B Button
        </button>
      </div>
      {/* <div>
        <h2>text</h2>
        <Textview text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
      </div> */}
    </div>
  );
};

export default OptimizeTest;

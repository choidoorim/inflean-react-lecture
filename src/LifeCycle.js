import React, { useState, useEffect } from "react";

const UnMountTest = () => {
  useEffect(() => {
    console.log(`Mount!!`);
    return () => {
      console.log(`Unmount!!`);
    };
  }, []);

  return <div className="UnMountTest">Testing Component</div>;
};

export const LifeCycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");

  // useEffect(() => {
  //   console.log(`Mount!!`);
  // }, []);

  // useEffect(() => {
  //   console.log(`Update!!`);
  // });

  // useEffect(() => {
  //   console.log(`Count Update!! ${count}`);
  //   if (count > 5) {
  //     setCount(0);
  //   }
  // }, [count]);

  // useEffect(() => {
  //   console.log(`Count Update!! ${text}`);
  // }, [text]);

  return (
    <div className="LifeCycle" style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnMountTest />}
      {/* <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        ></input>
      </div> */}
    </div>
  );
};

export default LifeCycle;

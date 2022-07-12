import React from "react";

// import './App.css';
import MyHeader from './MyHeader';
import MyFooter from "./MyFooter";

function App() {
  const name = 'Choi Doorim';
  const num = 5;

  const Style = {
    App : {
      backgroundColor: 'black',
    },
    h2 : {
      color: 'red',
    },
    bold_text : {
      color: 'green',
    },
  }

  return (
    <div style={Style.App}>
      <MyHeader />
      <h2 style={Style.h2}>Hello React {name}</h2>
      <b id='bold_text' style={Style.bold_text}> React.JS / {num} : {num % 2 === 0 ? '짝수' : '홀수'}  </b>
      <MyFooter />
    </div>
  );
}

export default App;

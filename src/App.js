import React from "react";

// import './App.css';
import MyHeader from './MyHeader';
import MyFooter from "./MyFooter";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  // const Style = {
  //   App : {
  //     backgroundColor: 'black',
  //   },
  //   h2 : {
  //     color: 'red',
  //   },
  //   bold_text : {
  //     color: 'green',
  //   },
  // }
  const countProps = {
    initialValue: 5,
  }

  return (
    <Container>
      <div>
        <MyHeader />
        {/*<h2 style={Style.h2}>Hello React {name}</h2>*/}
        {/*<b id='bold_text' style={Style.bold_text}> React.JS / {num} : {num % 2 === 0 ? '짝수' : '홀수'}  </b>*/}
        <Counter {...countProps} />
        <MyFooter />
      </div>
    </Container>
  );
}

export default App;

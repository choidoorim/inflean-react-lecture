# 페이지 라우팅

### 라우팅이란

- 경로를 정해주는 행위 자체와 그런 과정들을 다 포함하여 일컫는 말

React 는 SPA/CSR 을 따릅니다.

Router 라이브러리는 React-Router 라이브러리를 사용합니다

```javascript
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

Route 의 path 는 '/' 경로에 있을 경우 <Home /> 컴포넌트를 렌더링하라는 뜻이다.

<a> 태그의 href 속성을 사용하는 것은 외부의 새로운 페이지로 이동할 때만 사용한다.

```javascript
<a href={"/new"}>이동<a/>
```

React 에서는 Link 를 사용해서 페이지간의 이동을 빠르게 한다.

```javascript
<>
  <Link to={"/"}>Home</Link>
  <br />
  <Link to={"/diary"}>Diary</Link>
  <br />
  <Link to={"/new"}>New</Link>
  <br />
  <Link to={"/edit"}>Edit</Link>
</>
```

### Path Variable

만약에 Path Variable 기능을 사용하기 위해서는 Route 에서 path 속성에 추가적인 처리가 필요하다.

```javascript
<Route path="/diary/:id" element={<Diary />} />
```

만약 그리고 Diary 컴포넌트에서 path variable 값을 받고 싶다면 useParams 기능을 사용하면 된다.
useParams 는 객체로 path variable 을 전달해준다.

```javascript
import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  //...
};
```

### Query String

react-router-dom 라이브러리의 useSearchParams 으로 query string 값을 가져올 수 있다.

```javascript
const [searchParams, setSearchParams] = useSearchParams();
console.log(searchParams.get("id"));
```

그리고 setSearchParams 상태함수를 통해 url 의 Query String 을 바꿀 수도 있다.

```javascript
const [searchParams, setSearchParams] = useSearchParams();

<button onClick={() => setSearchParams({ who: "test" })}>
  Query String 바꾸기
</button>;
```

### Navigate

useNavigate 를 통해 다른 url 로 이동이 가능하다.

```javascript
const navigate = useNavigate();
//...
<button onClick={() => navigate("/home")}>Home 으로 가기</button>;
```

이 기능은 로그인 안된 사용자를 로그인 페이지로 강제로 보내는 기능을 한다.

```javascript
<button onClick={() => navigate(-1)}>뒤로 가기</button>
```

위와 같이 -1 을 넣어서 뒤로가기 기능을 구현할 수도 있다.

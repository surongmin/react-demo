import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard'
import LikeButton from './components/LikeButton'
import DigitalClock from './components/DigitalClock'
import Comment from './components/Comment'
import ThemeBox from './components/Theme'
import TestContext from './components/TestContext'
import ChildrenContext from './components/Theme/ChildrenContext'

function App() {

  const data = {
    name: "Viking",
    isHUamn: false,
    phone: 21111111111,
    tags: ["打球", "外星人"]
  }

  return (
    <div className="App" style={{ width: "50%" }}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h2>Props实例：名片</h2>
      <NameCard data={data} />
      <h2>State实例：点赞按钮</h2>
      <LikeButton />
      <h2>生命周期实例：点赞按钮</h2>
      <DigitalClock />
      <h2>综合实例：留言板</h2>
      <Comment />
      <ThemeBox />
      <TestContext />
      <ChildrenContext />
    </div>
  );
}

export default App;

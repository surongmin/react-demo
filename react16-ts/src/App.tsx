import React, { useState } from 'react';
import {
  Hello,
  LikeButton,
  OnButton,
  // MouseTracker,
  OnButtonEffect,
  Buttonref,
  ButtonContext
} from './conponents';
// import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'

interface IShowResult {
  message: string;
  status: string
}

// usecontext
interface IThemeProps {
  [key: string]: { color: string; background: string }
}
let themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee'
  },
  'dark': {
    color: '#fff',
    background: '#222'
  }
}
export const ThemeContext = React.createContext(themes.light)

function App() {
  let [show, setShow] = useState(true);
  // let positions = useMousePosition()
  let [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
  let dogResult = data as IShowResult

  return (
    <ThemeContext.Provider value={themes.dark}>
      <div className="App">
        <Hello message="Hello World" />
        <LikeButton />
        <hr />
        <OnButton />
        <hr />
        <div>
          <p><button onClick={() => { setShow(!show) }}>Toggle Tracker</button></p>
          {/* {show && <MouseTracker />} */}
          {loading ? <p> 🐶读取中 </p> : <img src={dogResult && dogResult.message} alt='' />}
        </div>
        <OnButtonEffect />
        <hr />
        {/* <p>X:{positions.x}, Y: {positions.y}</p> */}
        <div>
          <Buttonref />
        </div>
        <ButtonContext />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

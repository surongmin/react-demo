import React, { useState } from 'react';
import {
  Hello,
  LikeButton,
  OnButton,
  MouseTracker,
  OnButtonEffect
} from './conponents';
import useMousePosition from './hooks/useMousePosition'

function App() {
  let [show, setShow] = useState(true);
  let positions = useMousePosition()

  return (
    <div className="App">
      <Hello message="Hello World" />
      <LikeButton />
      <hr />
      <OnButton />
      <hr />
      <button onClick={() => { setShow(!show) }}>Toggle Tracker</button>
      {/* {show && <MouseTracker />} */}
      <hr />
      <OnButtonEffect />
      <hr />
      <p>X:{positions.x}, Y: {positions.y}</p>
    </div>
  );
}

export default App;

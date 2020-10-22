import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <Button disabled>测试按钮</Button>
      <Button autoFocus onClick={(e) => { alert("123") }}>测试按钮</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>测试按钮</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>测试按钮</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>测试按钮</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" target='_blank'> 百度 </Button>
      <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com"> 百度 </Button>
    </div>
  );
}

export default App;

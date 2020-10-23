import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  return (
    <div className="App">
      <Menu defaultIndex={0} onSelect={(index) => { alert(index) }}>
        <MenuItem index={0}>
          test
        </MenuItem>
        <MenuItem index={1} disabled>
          test
        </MenuItem>
        <MenuItem index={2}>
          test
        </MenuItem>
      </Menu>

      <Button disabled>测试按钮</Button>
      <Button autoFocus onClick={(e) => { alert("123") }}>测试按钮</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>测试按钮</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>测试按钮</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>测试按钮</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" target='_blank'> 百度 </Button>
      <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com"> 百度 </Button>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
        </a>
    </div>
  );
}

export default App;

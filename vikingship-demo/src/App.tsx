import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

function App() {
  return (
    <div className="App">
      <Menu defaultIndex={0} mode='horizontal'>
        <MenuItem>
          test
        </MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>
            test
          </MenuItem>
          <MenuItem>
            test
          </MenuItem>
        </SubMenu>
        <MenuItem disabled>
          test
        </MenuItem>
        <MenuItem>
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

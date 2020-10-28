import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
// 引入图标容器
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// 引入具体的图标
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Icon from './components/Icon/Icon'
import { library } from '@fortawesome/fontawesome-svg-core'
// 引入全部图标
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// library.add(fab, faCheckSquare, faCoffee)

library.add(fas)

function App() {
  return (
    <div className="App">
      <Icon icon='bowling-ball' theme='primary' />
      <Icon icon='angle-down' className='arrow-icon' />
      <Icon icon='coffee' theme='secondary' size='10x' />
      <hr />
      <FontAwesomeIcon icon="check-square" />
      <FontAwesomeIcon icon={faCheckSquare} size='2x' />
      <FontAwesomeIcon icon={faCoffee} size='3x' />
      <FontAwesomeIcon icon={faCoffee} size='4x' />
      <FontAwesomeIcon icon={faCoffee} size='5x' />
      <FontAwesomeIcon icon={faCoffee} size='6x' />
      <FontAwesomeIcon icon={faCoffee} size='7x' />
      <FontAwesomeIcon icon={faCoffee} size='8x' />
      <FontAwesomeIcon icon={faCoffee} size='9x' />
      <FontAwesomeIcon icon={faCoffee} size='10x' />
      <Menu defaultIndex='0' onSelect={(index) => { alert(index) }} defaultOpenSubMenus={['1']} mode='vertical'>
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
        <SubMenu title="dropdown">
          <MenuItem>
            test
          </MenuItem>
          <MenuItem>
            test
          </MenuItem>
        </SubMenu>
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

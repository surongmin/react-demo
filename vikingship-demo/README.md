
# 项目
创建项目
create-react-app vikingship --typescript

安装css
npm install node-sass --save

npm install classnames --save
npm install @types/classnames --save

npx/create-react-app 内置了test测试命令
npx jest jest.test.js
npx jest jest.test.js --watch

react 测试工具
react testing Library
最新版本内置 无需安装

"react-scripts": "3.3.0", 之前的没有内置test-library
安装： npm install --save-dev @testing-library/react


网址 https://create-react-app.dev/docs/running-tests

Filename Conventions
Jest will look for test files with any of the following popular naming conventions:

Files with .js suffix in __tests__ folders.
Files with .test.js suffix.
Files with .spec.js suffix.


运行
npm run test

小测试插件（已有内置）
<!-- 旧版本 npm install --save-dev @testing-library/jest-dom  -->
jest-dom
<!-- 之前的test断言库 大多是基本数据类型的断言 -->
jest-dom 是对于dom的断言


学习flex网站
css-tricks
css-tricks.com/snippets/css/a-guide-to-flexbox/


defaultProps的类型是any 没有受到约束 
 FC没有类型 props没有类型

没有这个文件 node_modules/@types/react/index.d.ts
重新npm install


## 图标
使用现有的图标库

官网
https://github.com/FortAwesome/react-fontawesome

https://fontawesome.com/
https://fontawesome.com/icons?d=gallery&m=free

安装
npm i --save @fortawesome/fontawesome-svg-core \
             @fortawesome/free-solid-svg-icons \
             @fortawesome/react-fontawesome

使用——第一种方式
// 引入图标容器
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// 引入具体的图标
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


第二种方式使用
①
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee)
 <Icon icon={faCheckSquare} theme='danger' />

①
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee)

<FontAwesomeIcon icon={faCoffee} />

①使用字符串icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add( faCheckSquare, faCoffee)

<FontAwesomeIcon icon="check-square" />

<Icon icon='bowling-ball' theme='primary' />
<Icon icon='angle-down' className='arrow-icon' />
<Icon icon='coffee' theme='secondary' size='10x' />

引入全部图标
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)


## react 中使用动画
React Transition Group
http://reactcommunity.org/react-transition-group/

npm install react-transition-group --save
<!-- npm install @types/react-transition-group --save -->


## storybook
https://storybook.js.org/

安装
npx -p @storybook/cli sb init

npx sb init

最新版运行不出来
用视频里的版本 不知道如何安装不同的版本的storybook
直接修改package.json  再npm install

  "devDependencies": {
    "@storybook/addon-actions": "^5.2.8",
    "@storybook/addon-info": "^5.2.8",
    "@storybook/addon-links": "^5.2.8",
    "@storybook/addons": "^5.2.8",
    "@storybook/react": "^5.2.8",
  }


运行 storybook
npm run storybook

storybook  addon插件
可以书写文档

安装
npm i -D @storybook/addon-info
npm install --save @types/storybook__addon-info


书写代码参数 工具

npm install --save-dev react-docgen-typescript-loader


api
https://api.github.com/search/users?q=ab
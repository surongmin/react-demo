import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import Button from './button'
// import Button, { ButtonType, ButtonSize } from './button'

// 添加样式、装饰器
// const styles: React.CSSProperties = {
//   textAlign: 'center',
// }

// const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>

const defaultButton = () => (
  <Button onClick={action('clicked')}>
    default Button
  </Button>
)

const buttonWithSize = () => (
  <>
    <Button size='lg'>large button</Button>
    <Button size='sm'>large button</Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button btnType='primary'>primary button</Button>
    <Button btnType='danger'>danger button</Button>
    <Button btnType='link' href='https://baidu.com'>link button</Button>
  </>
)

storiesOf('Button Component', module)
  // .addDecorator(CenterDecorator)
  .addDecorator(withInfo)
  // 编写参数  可以写文档
  .addParameters({
    info: {
      // text: 'this is a very nice component',
      // text里面可以使用Markdown
      // text: `
      // this is a very nice component
      // ## this is a header
      // ~~~js
      // const a = 'hello'
      // ~~~
      // `,
      inline: true
    }
  })
  // Button.tsx的注释内容自动显示 需要名称一致
  .add('Button', defaultButton)
  // .add('默认 Button', defaultButton)
  // .add('不同尺寸的 Button', buttonWithSize)
  // 第三个参数是 参数信息  优先级最高
  .add('不同尺寸的 Button', buttonWithSize, { info: { inline: false } })
  .add('不同类型的 Button', buttonWithType)


// import React from 'react'
// import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

// import Button from './button'

// const defaultButton = () => (
//   <Button onClick={action('clicked')}> default button </Button>
// )

// const buttonWithSize = () => (
//   <>
//     <Button size="lg"> large button </Button>
//     <Button size="sm"> small button </Button>
//   </>
// )

// const buttonWithType = () => (
//   <>
//     <Button btnType="primary"> primary button </Button>
//     <Button btnType="danger"> danger button </Button>
//     <Button btnType="link" href="https://google.com"> link button </Button>
//   </>
// )
// storiesOf('Button Component', module)
//   .add('Button', defaultButton)
//   .add('不同尺寸的 Button', buttonWithSize)
//   .add('不同类型的 Button', buttonWithType)
import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

// https://github.com/Lstoryc/lstoryc.github.io/issues/28
// Typescript报错：接口只能扩展使用静态已知成员的对象类型或对象类型的交集。ts(2312)
// interface TransitionProps extends  CSSTransitionProps {
//     animation?: AnimationName
// }

type TransitionProps = CSSTransitionProps & {
    animation?: AnimationName,
    wrapper? : boolean,
  }
  
  const Transition: React.FC<TransitionProps> = (props) => {
    const {
      children,
      classNames,
      animation,
      wrapper,
      ...restProps
    } = props
    return (
      <CSSTransition
        classNames = { classNames ? classNames : animation}
        {...restProps}
      >
        {wrapper ? <div>{children}</div> : children}
      </CSSTransition>
    )
  }
  Transition.defaultProps = {
    unmountOnExit: true,
    appear: true,
  }
  
  export default Transition
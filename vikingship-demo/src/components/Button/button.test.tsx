import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, ButtonSize, ButtonType } from './button'

// test('our first react test case', () => {
//     const wrapper = render(<Button>Nice</Button>)
//     const element = wrapper.queryByText('Nice')
//     expect(element).toBeTruthy()
//     expect(element).toBeInTheDocument()
// })

// 例——一个点击事件
const defaultProps = {
    // onClick: () => {}
    // 创建一个被监控的模拟函数
    onClick: jest.fn()
}
// Mock Functions  测试事件 测试函数有没有被调用 调用了多少次
// Firing Events 模拟用户操作

// 测试不同的按钮
const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'klass'
}

// disabled按钮
const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
}

// 分类
describe('test Button component', () => {
    // it() 和 test() 一样
    it('should render the correct default button', () => {
        const wrapper = render(<Button {...defaultProps}>Nice</Button>)
        const element = wrapper.getByText('Nice') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        // 测试是不是button按钮
        expect(element.tagName).toEqual('BUTTON')
        // 测试button上的class是否准确
        expect(element).toHaveClass('btn btn-default')
        expect(element.disabled).toBeFalsy()
        // 测试用户的交互行为
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    it('should render the correct component based on different props', () => {
        const wrapper = render(<Button {...testProps}>Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn-primary btn-lg klass')
    })
    it('should render a link when btnType equals link and href is provided', () => {
        const wrapper = render(<Button btnType={ButtonType.Link} href="http://anisdh" >Link</Button>)
        const element = wrapper.getByText('Link')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-link')
    })
    it('should render disabled button when disabled set to true', () => {
        const wrapper = render(<Button {...disabledProps}>Nice</Button>)
        const element = wrapper.getByText('Nice') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
        // 测试用户的交互行为
        fireEvent.click(element)
        expect(disabledProps.onClick).not.toHaveBeenCalled()
    })
})
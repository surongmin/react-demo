import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm'
// export enum ButtonSize {
//     Large = 'lg',
//     Small = 'sm'
// }

export type ButtonType = 'primary' | 'default' | 'danger' | 'link'
// export enum ButtonType {
//     Primary = 'primary',
//     Default = 'default',
//     Danger = 'danger',
//     Link = 'link'
// }

interface BaseButtonProps {
    className?: string;
    /** 设置 Button 的禁用 */
    disabled?: boolean;
    /** 设置 Button 的大小 */
    size?: ButtonSize;
    /** 设置 Button 的类型 */
    btnType?: ButtonType;
    children: React.ReactNode,
    href?: string
}

// button的所有属性
// type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement>

// 交叉类型 两种类型都要
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
// 最终的类型
// Partial 把所有的属性变为可选的
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 * 
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */

export const Button: FC<ButtonProps> = (props) => {
    // ...restProps 除了前面的 剩下的属性
    const {
        className,
        disabled,
        size,
        btnType,
        children,
        href,
        ...restProps
    } = props

    // btn,btn-lg,btn-primary
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === 'link') && disabled
    })

    //
    if (btnType === 'link' && href) {
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                {children}
            </button>
        )
    }
}
// 默认props属性
Button.defaultProps = {
    disabled: false,
    btnType: 'default'
    // btnType: ButtonType.Default
}

export default Button;
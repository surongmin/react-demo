import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const ButtonContext: React.FC = () => {
    let theme = useContext(ThemeContext)
    console.log(theme)
    const style = {
        background: theme.background,
        color: theme.color
    }

    return (
        <>
            <button style={style}>测试按钮
            </button>
        </>
    )
}

export default ButtonContext
import { Button } from 'antd'
import React, { Component } from 'react'
import ThemeContext from '../../../ThemeContext'

class ThemeButton extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    theme => {
                        console.log(theme)
                        return (
                            <div style={{ marginBottom: "100px", height: "100px", padding: "30px", color: theme.color, backgroundColor: theme.bgColor }}>
                                <Button type={theme.type}>测试按钮</Button>
                            </div>
                        )
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}

export default ThemeButton
import { Button } from 'antd'
import React, { Component } from 'react'
import ThemeContext from '../../ThemeContext'
import ThemeButton from './ThemeButton'

const theme = {
    light: {
        bgColor: "#eee",
        color: "#000"
    },
    dark: {
        bgColor: "#222",
        color: "#fff",
        type: "primary"
    }
}

class ThemeBox extends Component {
    constructor() {
        super()
        this.state = {
            theme: "light"
        }
        // this.handdleLight = this.handdleLight.bind(this)
        // this.handdleDark = this.handdleDark.bind(this)
        this.handdleChangeTheme = this.handdleChangeTheme.bind(this)
    }
    // handdleLight(theme){
    //     this.setState({
    //         theme:theme
    //     })
    // }
    // handdleDark(theme){
    //     this.setState({
    //         theme:theme
    //     })
    // }

    handdleChangeTheme(theme) {
        this.setState({
            theme: theme
        })
    }

    render() {
        return (
            <ThemeContext.Provider value={theme[this.state.theme]}>
                <div style={{ marginBottom: "20px" }}>
                    <Button onClick={() => { this.handdleChangeTheme('light') }}>浅色主题</Button>
                    <Button onClick={() => { this.handdleChangeTheme('dark') }} type="primary">深色主题</Button>
                </div>
                <ThemeButton />
            </ThemeContext.Provider>
        )
    }
}

export default ThemeBox
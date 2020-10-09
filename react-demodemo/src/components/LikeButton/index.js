import React, { Component } from 'react'
import { Button } from 'antd'

class LikeButton extends Component {
    constructor(){
        super()
        this.state = {
            like: 0
        }
        this.increaseLike = this.increaseLike.bind(this)
    }

    increaseLike(){
        this.setState({
            like: ++this.state.like
        })
    }

    render() {
        const { like } = this.state
        return (
        <div>
            <Button type="primary" onClick = {this.increaseLike}>👍 {like}</Button>
        </div>
        )
    }
}

export default LikeButton
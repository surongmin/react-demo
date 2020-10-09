import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props){
        super()
        this.handleItemClick = this.handleItemClick.bind(this)
    }

    handleItemClick(){
        this.props.onDeleteItem(this.props.index)
    }

    render(){
        let { item } = this.props
        return(
            <li onClick = {this.handleItemClick}>{item}</li>
        )
    }
}

export default TodoItem
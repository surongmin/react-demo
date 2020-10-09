import React, { Component } from 'react'

class TodoItemTwo extends Component {
    constructor(props) {
        super()
        this.handleItemClick = this.handleItemClick.bind(this)
    }

    handleItemClick(index) {
        this.props.onDeleteItem(index)
    }

    render() {
        let { list } = this.props
        return (
            <ul>
                {
                    list.map((item, index) =>
                        <li
                            onClick={() => { this.handleItemClick(index) }}
                            key={index}
                        >
                            {item}
                        </li>
                    )
                }
            </ul>
        )
    }
}

export default TodoItemTwo
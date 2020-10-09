import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
    constructor(props) {
        super()
        this.state = {
            list: [
                "naidhaso", "aoihsdoj"
            ],
            inputValue: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handdleClick = this.handdleClick.bind(this)
        this.handdleDeleteItem = this.handdleDeleteItem.bind(this)
    }

    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handdleClick() {
        let { list, inputValue } = this.state
        this.setState({
            list: [...list, inputValue],
            inputValue: ""
        })
    }

    handdleDeleteItem(index) {
        let list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list
        })
    }

    // ulListItem() {
    //     let { list } = this.state
    //     return (
    //         list.map((item, index) =>
    //             <TodoItem
    //                 key={index}
    //                 item={item}
    //                 index={index}
    //                 onDeleteItem={this.handdleDeleteItem}
    //             />
    //         )
    //     )
    // }
    ulListItem() {
        let { list } = this.state
        return (
            <ul>
                {
                    list.map((item, index) =>
                        <TodoItem
                            key={index}
                            item={item}
                            index={index}
                            onDeleteItem={this.handdleDeleteItem}
                        />
                    )
                }
            </ul>
        )
    }

    render() {
        let { inputValue } = this.state
        return (
            <div>
                <div>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handdleClick}>ADD</button>
                </div>
                {/* <ul>
                    {this.ulListItem()}
                </ul> */}
                {this.ulListItem()}
            </div>
        )
    }
}

export default TodoList
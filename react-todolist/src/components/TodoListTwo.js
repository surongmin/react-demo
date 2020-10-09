import React, { Component } from 'react'
import TodoItemTwo from './TodoItemTwo'

class TodoListTwo extends Component {
    constructor(props){
        super()
        this.state = {
            list:[
                "naidhaso","aoihsdoj"
            ],
            inputValue:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handdleClick = this.handdleClick.bind(this)
        this.handdleDeleteItem = this.handdleDeleteItem.bind(this)
    }

    handleChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }

    handdleClick(){
        let { list, inputValue } = this.state
        this.setState({
            list:[...list,inputValue],
            inputValue: ""
        })
    }

    handdleDeleteItem(index){
        let list = [...this.state.list]
        list.splice(index,1)
        this.setState({
            list
        })
    }

    render(){
        let { list, inputValue } = this.state
        return(
            <div>
                <div>
                    <input 
                      type="text"
                      value = {inputValue}
                      onChange = {this.handleChange}
                    />
                    <button onClick = {this.handdleClick}>ADD</button>
                </div>
                <TodoItemTwo 
                  onDeleteItem={this.handdleDeleteItem}
                  list = {list}
                />
            </div>           
        )
    }
}

export default TodoListTwo
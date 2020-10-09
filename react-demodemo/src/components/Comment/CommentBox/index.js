import React, { Component } from 'react'
import {
    Input,
    Button,
    Form
} from 'antd'

class CommentBox extends Component {
    constructor() {
        super()
        this.state = {
            value: ""
        }
        this.handdleChange = this.handdleChange.bind(this)
        this.handdleClick = this.handdleClick.bind(this)
        this.handdleKeyDown = this.handdleKeyDown.bind(this)
        // this.handdleSubmit = this.handdleSubmit.bind(this)
    }

    componentDidMount() {
        this.textInput.focus()
    }

    handdleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    handdleClick() {
        this.commentSubmit()
    }

    commentSubmit() {
        let { value } = this.state
        if (value.trim() !== "") {
            // console.log(value)
            this.props.onAddComment(value)
            this.setState({
                value: ""
            })
        }
    }

    handdleKeyDown(e) {
        if (e.keyCode === 13) {
            this.commentSubmit()
        }
    }
    // handdleSubmit() {
    //     console.log(this.state.value)
    //     this.setState({
    //         value: ""
    //     })
    // }

    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 10 },
        };
        const tailLayout = {
            wrapperCol: { offset: 9, span: 8 },
        };
        const { value } = this.state
        let { count } = this.props

        return (
            <Form {...layout} style={{ marginTop: "50px" }}
            // onSubmit = {this.handdleSubmit}
            >
                <Form.Item label="留言" rules={[{ required: true }]}>
                    <Input
                        placeholder="请留言"
                        onChange={this.handdleChange}
                        onKeyDown={this.handdleKeyDown}
                        value={value}
                        ref={(input) => { this.textInput = input; }}
                    />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="submit"
                        onClick={this.handdleClick}
                    >
                        留言
                 </Button>
                </Form.Item>
                <p>已有 {count} 条留言</p>
            </Form>
        )
    }
}

export default CommentBox
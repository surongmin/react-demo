import React, { Component } from 'react'
import CommentBox from './CommentBox'
import CommentList from './CommentList'

class Comment extends Component {
    constructor() {
        super()
        this.state = {
            comments: [
                'Racing car sprays burning fuel into crowd.',
                'Japanese princess to wed commoner.',
            ]
        }
        this.addComment = this.addComment.bind(this)
        this.deleteComment = this.deleteComment.bind(this)
    }
    addComment(comment) {
        this.setState({
            comments: [...this.state.comments, comment]
        })
    }
    deleteComment(index) {
        let arr = [...this.state.comments]
        arr.splice(index, 1)
        this.setState({
            comments: [...arr]
        })

    }
    render() {
        return (
            <div className="site-card-border-less-wrapper" style={{paddingLeft: "50px", paddingBottom: "100px" }}>
                <h2>From表单实例：input输入框</h2>
                <CommentBox onAddComment={this.addComment} count={this.state.comments.length} />
                <CommentList comments={this.state.comments} onDeleteComment={this.deleteComment} />
            </div>
        )
    }
}

export default Comment
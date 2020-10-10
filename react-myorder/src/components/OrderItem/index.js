import React, { Component } from 'react'
import './style.css'

export default class OrderItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            comment: props.data.comment || "",
            stars: props.data.stars || 0
        }
    }
    render() {
        let { picture, product, address, price, ifCommented } = this.props.data
        let { editing } = this.state
        return (
            <div className='orderItem'>
                <div className='orderItem__picContainer'>
                    <img className='orderItem__pic' src={picture} alt={product} />
                </div>
                <div className='orderItem__content'>
                    <div className='orderItem__product'>{product}</div>
                    <div className='orderItem__shop'>{address}</div>
                    <div className='orderItem__detail'>
                        <div className='orderItem__price'>{price}</div>
                        <div>
                            {
                                ifCommented ?
                                    (
                                        <button className='orderItem__btn orderItem__btn--grey'>已评价</button>
                                    ) : (
                                        <button className='orderItem__btn orderItem__btn--red' onClick={this.handleOpenEditArea} >评价</button>
                                    )
                            }

                        </div>
                    </div>
                </div>
                {
                    editing ? this.renderEditArea() : null
                }
            </div>
        )
    }

    renderEditArea() {
        let { comment } = this.state
        return (
            <div className="orderItem__commentContainer">
                <textarea className='orderItem__comment' onChange={this.handleCommentChange} value={comment} />
                {this.renderStars()}
                <button className='orderItem__btn orderItem__btn--red' onClick={this.handleSubmitComment} >提交</button>
                <button className='orderItem__btn orderItem__btn--grey' onClick={this.handleCancelComment} >取消</button>
            </div>
        )
    }

    renderStars() {
        let { stars } = this.state
        return (
            <div className='orderItem__starContainer'>
                {
                    [1, 2, 3, 4, 5].map((item, index) => {
                        let light = stars >= item ? "orderItem__star--light" : ""
                        return (
                            <span key={index}
                                // className={"orderItem__star" + light}
                                className={light}
                                onClick={this.handleClickStars.bind(this, item)} >★</span>
                        )
                    })
                }
            </div>
        )
    }

    handleOpenEditArea = () => {
        this.setState({
            editing: true
        })
    }

    handleCommentChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    handleClickStars = (stars) => {
        this.setState({
            stars: stars
        })
    }

    handleCancelComment = () => {
        let { comment, stars } = this.props.data
        this.setState({
            editing: false,
            comment: comment || "",
            stars: stars || 0
        })
    }

    handleSubmitComment = () => {
        let { id } = this.props.data
        let { comment, stars } = this.state
        this.setState({
            editing: false
        })
        this.props.onSubmit(id, comment, stars)
    }
}

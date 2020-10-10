import React, { Component } from 'react'
import OrderItem from '../OrderItem'

export default class OrderList extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('/mock/orders.json').then(res => {
            if (res.ok) {
                res.json().then(data => {
                    this.setState({
                        data
                    })
                })
            }
        })

        // fetch('/mock/orders.json').then(res =>
        //     res.json()).then(data =>
        //         console.log(data)
        //     )

    }

    handleSubmit = (id, comment, stars) => {
        let { data } = this.state
        let newData = data.map(item => {
            return item.id === id ? { ...item, comment, stars, ifCommented: true } : item
        })
        this.setState({
            data: newData
        })
    }

    render() {
        let { data } = this.state
        return (
            <div>
                {
                    data.map((item) => {
                        return (
                            <OrderItem key={item.id} data={item} onSubmit={this.handleSubmit} />
                        )
                    })
                }
            </div>
        )
    }
}

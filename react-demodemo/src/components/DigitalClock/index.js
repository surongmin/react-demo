import React, { Component } from 'react'
import moment from 'moment'

class DigitalClock extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }
    componentDidMount(){
        this.timer = setInterval(() =>{
            this.setState({
                date:new Date()
            })
        },1000)
        console.log("componentDidMount")
    }
    // componentDidUpdate(){
    //     this.timer = setInterval(() =>{
    //         this.setState({
    //             date:new Date()
    //         })
    //     },1000)
    //     console.log("componentDidUpdate")
    // }
    componentWillUnmount(){
        console.log("componentWillUnmount")
        clearInterval(this.timer)
    }
    render() {
        const { date } = this.state
        return (
            <div>
                <div style={{ width: "300px", height: "100px", backgroundColor: "#ccc" }}>
                    <h1>{date.toLocaleTimeString()}</h1>
                </div>
                <div style={{ width: "300px", height: "100px", backgroundColor: "#ccc" }}>
                <h1>{moment(date).format()}</h1>
                </div>
                <div style={{ width: "300px", height: "100px", backgroundColor: "#ccc" }}>
                    <h1>{moment(date).format("YYYY-MM-DD")}</h1>
                    <h1>{moment(date).format("HH:mm:ss")}</h1>
                </div>
            </div>
        )
    }
}

export default DigitalClock
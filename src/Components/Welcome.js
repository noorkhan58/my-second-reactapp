import React, { Component } from 'react'

export default class Welcome extends Component {

    constructor() {
        super()
        this.state = {
            message: "Welcome to react"
        }
    }

    changeMessage() {
        this.setState({
            message: "This is how you change state"
        });
    }

    render() {
        return (
            <div>
                <h2>This is class component {this.state.message}</h2>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

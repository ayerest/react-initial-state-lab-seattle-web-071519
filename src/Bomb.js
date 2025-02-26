// your Bomb code here!
import React, { Component } from 'react';


export default class Bomb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }
    decrementTimer = () => {
        this.setState({
            secondsLeft: secondsLeft -1
        })
    }
    render() {
        return (
            <div className="bomb" onClick={this.decrementTimer}>
                {this.state.secondsLeft === 0 ? "Boom!": `${this.state.secondsLeft} seconds left before I go boom!`}
            </div>
        )
    }

}

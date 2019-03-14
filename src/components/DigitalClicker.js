import React, { Component } from 'react'

export default class DigitalClicker extends Component {

  constructor() {
    super()

    this.state = {
      timesClicked: 0
    }
  }

  incrementTimes = () => {
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked + 1
    }))
  }

  render() {
    return <button onClick={this.incrementTimes}>{this.state.timesClicked}</button>
  }
}

import React, { Component } from 'react'
import chasing from './chasing.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={chasing} alt="chasing" />
      </div>
    )
  }
}

export default Spinner
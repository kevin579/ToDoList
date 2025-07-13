import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <input type="checkbox" name="finish"/>
        Completed x/x
        <button>Remove completed tasks</button>
    </div>
    )
  }
}

import React, { Component } from 'react'
import './index.css'
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        Add a task: <input type="text" placeholder="Enter your task and press enter"/>
        <button>Add</button>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" name="complete"/>
        <span>{this.props.task}</span>
        <button>Delete</button>
      </li>
    )
  }
}

import React, { Component } from 'react'

export default class Item extends Component {

  check = ()=>{
    this.props.check(this.props.todo.id);
  }

  delete = ()=>{
    this.props.delete(this.props.todo.id);
  }

  render() {
    const {task,done} = this.props.todo;
    return (
      <li>
        <input type="checkbox" name="complete" checked={done} onChange={this.check}/>
        <span>{task}</span>
        <button type='button' onClick={this.delete}>Delete</button>
      </li>
    )
  }
}

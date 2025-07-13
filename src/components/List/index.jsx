import React, { Component } from 'react'
import Item from '../Item/index'
import './index.css'

export default class List extends Component {
  render() {
    const {todos} = this.props;
    return (
      <div className="main">
        <ul className="list">
            {todos.map((todo)=>{
              return <Item key={todo.id} task = {todo.task}/>
            })
              
            }
        </ul>
    </div>
    )
  }
}

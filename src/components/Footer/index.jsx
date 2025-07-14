import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  countDone = ()=>{
    const num = this.props.todos.reduce((pre,current)=>{
      if (current.done){
        return pre+1;
      }else{
        return pre
      }
    },0)
    return num;
  }

  changeAll = ()=>{
    this.props.changeAll(this.countDone()===this.props.todos.length);
    this.setState()
  }

  deleteComplete = () =>{
    this.props.deleteComplete()
  }

  render() {
    return (
      <div className="footer">
        <input type="checkbox" name="finish" checked={this.countDone()===this.props.todos.length} onChange={this.changeAll}/>
        <span>Completed {this.countDone()}/{this.props.todos.length}</span>
        <button onClick={this.deleteComplete}>Remove completed tasks</button>
    </div>
    )
  }
}

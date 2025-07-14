import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'
export default class Header extends Component {
  myRef = React.createRef()
  render() {
    return (
      <div className="header">
        Add a task: <input type="text" onKeyUp={this.add} placeholder="Enter your task and press enter" ref={this.myRef}/>
        <button type='button' onClick={this.add}>Add</button>
      </div>
    )
  }
  add =(event)=>{
    if (event.keyCode===13){
      if (event.target.value.trim()===''){
        alert('task cannot be empty')
        return;
      }
      
      const obj = {id:nanoid(),task:event.target.value,done:false}
      event.target.value='';
      this.props.addTodo(obj);
    } 
    else if(event.target.type==='button'){
      if (this.myRef.current.value.trim()===''){
        alert('task cannot be empty')
        return;
      }
      
      const obj = {id:nanoid(),task:this.myRef.current.value,done:false}
      this.props.addTodo(obj)
      this.myRef.current.value='';
    }
  }
  
}

import React from 'react'
import './start.css'
import Header from './components/Header/index'
import List from './components/List/index'
import Footer from './components/Footer/index'

class App extends React.Component{
  state = {
    todos:[
      {id:1,task:'a',done:false},
      {id:2,task:'b',done:false},
      {id:3,task:'c',done:false},
      {id:4,task:'d',done:false},
      {id:5,task:'e',done:false},
    ],
    allDone:false
  }

  addTodo = (todoObj)=>{
    
    const {todos} = this.state;
    const newTodos = [...todos,todoObj]
    console.log(newTodos)
    this.setState({...this.state,todos:newTodos})
  }

  delete = (id)=>{
    const {todos} = this.state;
    let newTodos = [];
    for (let i = 0; i<todos.length;i++){
        if (todos[i].id!==id){
          newTodos.push(todos[i]);
          console.log(this.state)
          
        }
      }
    this.setState({todos:newTodos})
    
  }

  check = (id)=>{
    const {todos} = this.state;
    const newTodos = todos.map(todo=>{
      return {...todo,done:todo.id===id?!todo.done:todo.done}
    })
    
    this.setState({todos:newTodos},()=>console.log(this.state));
  }


  changeAll = (done)=>{
    const {todos} = this.state;
    const newTodos = todos.map(todo=>{
      return {...todo,done:!done}
    })
    this.setState({todos:newTodos},()=>console.log(this.state));
  }

  deleteComplete = ()=>{
    const {todos} = this.state;
    let newTodos = [];
    for (let i = 0; i<todos.length;i++){
        if (!todos[i].done){
          newTodos.push(todos[i]);          
        }
      }
    this.setState({todos:newTodos})
  }
  render(){
    
    return(
      <div className="container">
        <div className="wraper">
            <Header addTodo = {this.addTodo}/>
            <List todos = {this.state.todos} check = {this.check} delete={this.delete}/>
            <Footer todos = {this.state.todos} changeAll = {this.changeAll} deleteComplete = {this.deleteComplete}/>
        </div>
    </div>
    )
  }
}

export default App
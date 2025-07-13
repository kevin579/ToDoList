import React from 'react'
import './start.css'
import Header from './components/Header/index'
import List from './components/List/index'
import Footer from './components/Footer/index'

class App extends React.Component{
  state = {
    todos:[
      {id:1,task:'a'},
      {id:2,task:'b'},
      {id:3,task:'c'},
      {id:4,task:'d'},
      {id:5,task:'e'},
    ]
  }
  render(){
    
    return(
      <div className="container">
        <div className="wraper">
            <Header/>
            <List todos = {this.state.todos}/>
            <Footer/>
        </div>
    </div>
    )
  }
}

export default App
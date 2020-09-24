import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos'
import About from './components/pages/About'
import Additem from './components/AddItem'
import Header from './components/layout/Header'
import axios from 'axios'
import * as uuid from 'uuid'
import './App.scss';

class App extends Component {
  state = {
    todos: []
  }

  // GET REQUEST
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15')
    .then(response => { this.setState({ todos: response.data })})
  }

// Toggle True or False
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  // Delete object
  deleteItem = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => {
      this.setState({
        todos: [
          ...this.state.todos.filter(todo => 
            todo.id !== id
          )
        ]
      })
    })
    
  }

  // Add
  addTodo = (title) => {
    // const newItem = {
    //   id: uuid.v4(), // For custom object id
    //   title,
    //   completed: false
    // }

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(response => {
      this.setState({
        todos:[
          ...this.state.todos, response.data
        ]
      })
    })
    
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Additem addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem}/> 
            </React.Fragment>
          )} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;

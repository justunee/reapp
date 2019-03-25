import React, { Component } from "react";
import Todos from './Todo';
import Addtod from "./addForm"

class App extends Component {
  state = {
    todoOri: [{ id: 1, content: "Buy milk" }, { id: 2, content: "play game" }]
  };

  deleteTodo = (id) => 
  {
  const newTodos = this.state.todoOri.filter(todo =>{
      return todo.id !== id

  });
    this.setState({
      todoOri: newTodos
    }
      )
  }
  addTodo = (todo) =>{
    todo.id = Math.random();
    let a = [...this.state.todoOri, todo]
    this.setState({
      todoOri: a
    })
  }

  render() {
    return (<div className="todo-App container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todospass={this.state.todoOri } DeleteTodoPassProps={this.deleteTodo}/>
        <Addtod addTodo={this.addTodo}/>
    </div>
    )
  }
}

export default App;

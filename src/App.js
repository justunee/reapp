import React, { Component } from "react";
import Todos from './Todo';

class App extends Component {
  state = {
    todo: [{ id: 1, content: "Buy milk" }, { id: 2, content: "play game" }]
  };

  render() {
    return (<div className="App">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todo}/>


    </div>
    )
  }
}

export default App;

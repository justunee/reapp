import React, { Component } from "react";
import Tee from "./tee";
import AddTee from "./addTee";

class App extends Component {
  state = {
    teelist: [
      { name: "june", age: "20", belt: "white", id: 1 },
      { name: "junee", age: "30", belt: "red", id: 2 },
      { name: "just", age: "40", belt: "green", id: 3 }
    ]
  };

  addTolist = listFromAdd => {
    listFromAdd.id = Math.random();
    let TempArray = [...this.state.teelist, listFromAdd];

    this.setState({
      teelist: TempArray
    });

    console.log(listFromAdd);
  };

  deleteList = id => {
    let a = this.state.teelist.filter(b => {
      return b.id !== id;
    });
    this.setState({
      teelist: a
    });

    console.log(id);
  };

  componentDidMount(){
console.log('componet mount');
  }
  componentDidUpdate(prevProps,prevState){
    console.log("update");
    console.log(prevProps,prevState);

  }

  render() {
    return (
      <div className="App">
        {/* <Tee name="June" age="20" belt="white"/>
          <Tee name="junee" age="18" belt="green"/> */}
        <Tee PassdeleteList={this.deleteList} teelist={this.state.teelist} />
        <AddTee fromAddToList={this.addTolist} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Tee from './tee';
import AddTee from './addTee'


class App extends Component {
  state ={
    teelist : [
        {name:"june",age:"20",belt:'white',id:1},
        {name:"junee",age:"30",belt:'red',id:2},
        {name:"just",age:"40",belt:'green',id:3},
    ]
  }
  render() {
    return (
      <div className="App">     
          
          {/* <Tee name="June" age="20" belt="white"/>
          <Tee name="junee" age="18" belt="green"/> */}
          <Tee teelist={this.state.teelist}/>
          <AddTee/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Tee from './tee';


class App extends Component {
  render() {
    return (
      <div className="App">     
          
          <Tee name="June" age="20" belt="white"/>
          
      </div>
    );
  }
}

export default App;

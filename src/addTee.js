import React, { Component } from "react";

class AddTee extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  };
  handChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handSubmit = e => {
    e.preventDefault();
    this.props.fromAddToList(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handSubmit}>
          <label htmlFor="name">Name : </label>
          <input type="text" id="name" onChange={this.handChange} />
          <label htmlFor="name">Age : </label>
          <input type="text" id="age" onChange={this.handChange} />
          <label htmlFor="name">Belt : </label>
          <input type="text" id="belt" onChange={this.handChange} />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddTee;

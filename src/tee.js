import React, { Component } from 'react';

class tee extends Component{
render(){
const {name,age,belt} = this.props;

    return(
        <div className="Tee">
            <div>Name:{ this.props.name }</div>
            <div>age:{this.props.age}</div>
            <div>Belt:{this.props.belt}</div>
            <div>Name:{name}</div>
            <div>age:{age}</div>
            <div>Belt:{belt}</div>
        </div>
        )
    }

}

export default tee;
import React, { Component } from 'react';

class tee extends Component{
// render(){
// const {name,age,belt} = this.props;
// const{teelist} = this.props;
// const newteelist = teelist.map(cyclist => {
//     return (
//         <div className="Tee1">
//             <div>Name:{cyclist.name}</div>
//             <div>age:{cyclist.age}</div>
//             <div>Belt:{cyclist.belt}</div>
//         </div>
//             )
// })

//     return(
//         <div className="Tee">
//             <div>Name:{ this.props.name }</div>
//             <div>age:{this.props.age}</div>
//             <div>Belt:{this.props.belt}</div>
//             <div>Name:{name}</div>
//             <div>age:{age}</div>
//             <div>Belt:{belt}</div>      
//             { newteelist }      
//         </div>       

//         )
//     }

render(){
    const{teelist} = this.props;
    const newteelist = teelist.map(cyclist => {
        return (
            <div className="Tee1" key={cyclist.id}>
                <div>Name:{cyclist.name}</div>
                <div>age:{cyclist.age}</div>
                <div>Belt:{cyclist.belt}</div>
            </div>
                )
    })
    
        return(
            <div className="Tee">                   
                { newteelist }      
            </div>       
    
            )
        }

}

export default tee;
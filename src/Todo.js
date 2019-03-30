import React from 'react'
import { Button } from 'react-bootstrap';

const Todos = ({todospass,DeleteTodoPassProps}) =>{

    const todoList = todospass.length ? (

        todospass.map(todo =>{
            return(
                <div className="collection item" key={todo.id}>
                    <span>
                        {todo.content}
                    </span>
                <Button style={{float: "right"}} onClick = {() => {DeleteTodoPassProps(todo.id)}}> Delete </Button>
                
                </div>
            )

        })
    ) : (

        <p className="center">You have no todo left</p>
    )

    return(
        <div className="todo collection">
        {todoList}
        </div>
    )

}
export default Todos
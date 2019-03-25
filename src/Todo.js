import React from 'react'

const Todos = ({todospass,DeleteTodoPassProps}) =>{

    const todoList = todospass.length ? (

        todospass.map(todo =>{
            return(
                <div className="collection item" key={todo.id}>
                    <span onClick = {() => {DeleteTodoPassProps(todo.id)}}>
                        {todo.content}
                        
                    </span>
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
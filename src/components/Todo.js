import React, {useState} from 'react'
import TodoForm from './TodoForm'



function Todo({todos, completeTodo, removeTodo, updateTodo}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        }) 
    }


    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }



    return todos.map((todo, index) => (
        <div 
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
            key={index}> 
            <div className="show" key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                    <button onClick={() => setEdit({id: todo.id, value: todo.text})}
                    >Edit</button>

                    <button onClick={() => removeTodo(todo.id)}
                    >Delete</button>

            </div>
        </div>
    ))
}

export default Todo;
import {useState} from 'react'

export function RenderTodo({todos}){
    return <div>
        {todos.map( (todo) => {
            return <div>
                <h1>{todo.title}</h1>
                <h4>{todo.description}</h4>
                <button onClick={()=>{
                    try{
                        fetch('http://localhost:3000/completed',{
                        method : "PUT",
                        body : JSON.stringify({
                            _id : todo._id
                        }),
                        headers : {
                            "content-type" : "application/json"
                        }
                        })
                    }
                    catch(e){
                        console.log(e)
                    }
                    
                }}>{todo.completed == true ? "Completed" : "Mark as done"}</button>

                <button onClick={()=>{
                    try{
                        fetch('http://localhost:3000/todo',{
                        method : "DELETE",
                        body : JSON.stringify({
                            _id : todo._id
                        }),
                        headers : {
                            "content-type" : "application/json"
                        }
                        })
                    }
                    catch(e){
                        console.log(e)
                    }
                }}>Delete</button>
            </div>
        })}
        
    </div>
}
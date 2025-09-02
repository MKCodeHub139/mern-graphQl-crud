import React from 'react'
import {useQuery } from "@apollo/client/react";
import {GetTodo} from '../graphql/queries'

const TodoList = ({handleDeleteTodo ,handleEditTodoBtn}) => {
    const {data,loading,error} =useQuery(GetTodo)
    if(loading) return  <h1>Loading...</h1>
  return (
    <div>
        <table border="" style={{marginTop:"25px"}}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>UserId</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.getTodos?.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                                <td>{item.userId}</td>
                                <td>
                                    <button onClick={()=>handleEditTodoBtn(item)}>Edit</button>
                                    <button onClick={()=>handleDeleteTodo(item.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })  
                }
            </tbody>
        </table>
    </div>
  )
}

export default TodoList

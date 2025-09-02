import { useState } from 'react'
import './App.css'
import { useMutation, useQuery } from "@apollo/client/react";
import Login from './components/Login';
import CreateTodo from './components/CreateTodo';
import { GetTodo,GetUser } from './graphql/queries';
import { Create_TodoMutation,Create_UserMutation,Delete_TodoMutation,Edit_TodoMutation } from './graphql/mutations';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';

function App() {
  const [createLoginData ,setCreateLoginData] =useState({})
  const [createTodoData ,setCreateTodoData] =useState({
    id:'',
    title:'',
    body:'',
    userId:''
  })
  const [editTodoData ,setEditTodoData] =useState({})
  const [editable,setEditable] =useState(false)
  const [createUserMutation] =useMutation(Create_UserMutation)
  const [createTodoMutation] =useMutation(Create_TodoMutation)
  const [deleteTodoMutation] =useMutation(Delete_TodoMutation,{
    refetchQueries: ["GetTodos"],
  })
  const [editTodoMutation] =useMutation(Edit_TodoMutation,{
        refetchQueries: ["GetTodos"],
  })
  const handleCreateUser=async(e)=>{
      e.preventDefault()
      createUserMutation({variables:{
        name:createLoginData.name,
        email:createLoginData.email,
        password:createLoginData.password
      }})
  }
  const handleCreateTodo =(e)=>{
    e.preventDefault()
    createTodoMutation({variables:{
      title:createTodoData.title,
      body:createTodoData.body,
      userId:createTodoData.userId,
    }})
  }
  const handleDeleteTodo=(id)=>{
    deleteTodoMutation({variables:{
      id
    }})
  }
    const handleEditTodoBtn=(item)=>{
      setEditable(true)
      setEditTodoData({id:item.id,title:item.title,body:item.body,userId:item.userId})
    }
    const handleEditTodo =(e)=>{
      e.preventDefault()
      editTodoMutation({variables:{
        id:editTodoData.id,
        title:editTodoData.title,
        body:editTodoData.body
      }})

    }
  
  return (
    <>
    <Login setCreateLoginData={setCreateLoginData} handleCreateUser={handleCreateUser}/>
    <CreateTodo setCreateTodoData={setCreateTodoData} handleCreateTodo={handleCreateTodo}/>
    {editable && (
    <EditTodo editTodoData={editTodoData} setEditTodoData={setEditTodoData} handleEditTodo={handleEditTodo}/>
    )}
    <TodoList handleDeleteTodo={handleDeleteTodo} handleEditTodoBtn={handleEditTodoBtn} />
    </>
  )
}

export default App

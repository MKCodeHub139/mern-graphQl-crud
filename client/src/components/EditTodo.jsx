import React from 'react'

const EditTodo = ({setEditTodoData,editTodoData,handleEditTodo}) => {
  return (
    <div>
      <h2>Update Todo</h2>
        <form action=""onSubmit={handleEditTodo}>
            <input type="text" name="" id="" placeholder='title...' value={editTodoData.title? editTodoData.title : ''} onChange={(e)=> setEditTodoData((prev)=>({...prev,title:e.target.value}))}/>
            <input type="text" name="" id="" placeholder='body...' value={editTodoData.body? editTodoData.body : ''} onChange={(e)=> setEditTodoData((prev)=>({...prev,body:e.target.value}))}/>
            <input type="text" name="" id="" disabled placeholder='userId...' value={editTodoData.userId? editTodoData.userId : ''} onChange={(e)=> setEditTodoData((prev)=>({...prev,userId:e.target.value}))}/>
            <button type='submit'>Update Todo</button>
        </form>
    </div>
  )
}

export default EditTodo
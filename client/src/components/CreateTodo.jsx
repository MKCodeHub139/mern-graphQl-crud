import React from 'react'

const CreateTodo = ({setCreateTodoData,handleCreateTodo}) => {
// 68b6cce5cbfe6a85797a968a
  return (
    <div>
        <form action="" onSubmit={handleCreateTodo}>
            <input type="text" name="" id="" placeholder='title...' onChange={(e)=> setCreateTodoData((prev)=>({...prev,title:e.target.value}))}/>
            <input type="text" name="" id="" placeholder='body...' onChange={(e)=> setCreateTodoData((prev)=>({...prev,body:e.target.value}))}/>
            <input type="text" name="" id="" placeholder='userId...' onChange={(e)=> setCreateTodoData((prev)=>({...prev,userId:e.target.value}))}/>
            <button type='submit'>Create Todo</button>
        </form>
    </div>
  )
}

export default CreateTodo
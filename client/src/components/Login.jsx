import React from 'react'

const Login = ({setCreateLoginData,handleCreateUser}) => {

  return (
    <div>
        <form action="" onSubmit={handleCreateUser}>
            <input type="text" name="" id="" placeholder='name...' onChange={(e)=> setCreateLoginData((prev)=>({...prev,name:e.target.value}))}/>
            <input type="text" name="" id="" placeholder='email...' onChange={(e)=> setCreateLoginData((prev)=>({...prev,email:e.target.value}))}/>
            <input type="text" name="" id="" placeholder='password...' onChange={(e)=> setCreateLoginData((prev)=>({...prev,password:e.target.value}))}/>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Login
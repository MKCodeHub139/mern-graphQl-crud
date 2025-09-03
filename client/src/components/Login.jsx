import React from 'react'
import { useQuery } from '@apollo/client/react'
import  {GetUser} from '../graphql/queries'
const Login = ({setCreateLoginData,handleCreateUser}) => {
  const {data,loaing,error} =useQuery(GetUser)

  if(loaing) return <h2>Loading...</h2>
  return (
    <div>
      <h2>Create User</h2>
        <form action="" onSubmit={handleCreateUser}>
            <input type="text" name="" id="" placeholder='name...' onChange={(e)=> setCreateLoginData((prev)=>({...prev,name:e.target.value}))}/>
            <input type="text" name="" id="" placeholder='email...' onChange={(e)=> setCreateLoginData((prev)=>({...prev,email:e.target.value}))}/>
            <input type="text" name="" id="" placeholder='password...' onChange={(e)=> setCreateLoginData((prev)=>({...prev,password:e.target.value}))}/>
            <button type='submit'>Register</button>
        </form>
          <div>
        <h2>Show All Users</h2>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>name</th>
                    <th>email</th>
                    {/* <th>Password</th> */}
                </tr>
            </thead>
            <tbody>
                {
                    data?.getUsers?.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                {/* <td>{item.password}</td> */}
                            </tr>
                        )
                    })  
                }
            </tbody>
        </table>
    </div>

    </div>
  )
}

export default Login
import User from '../models/user.js';
import Todo from '../models/todo.js';
const resolvers ={
    Query:{
        getUsers:()=>{
            const getUsers=User.find({})
            return getUsers
        }
    },
    Mutation:{
        createUser:async(parent,args)=>{
            const {name,email,password} =args
            const createUser =await User.create({
                name,email,password
            })

            return createUser
        },
        createTodo:async(parent,args)=>{
            const {title,body,userId} =args
                const createTodo = await Todo.create({
                    title,
                    body,
                    userId,
                })
                return createTodo
        },
        updateTodo:async(parent,args)=>{
             const {id,title,body,userId} =args
             const updatableData ={}
             if(id !== undefined) updatableData.id=id ;
             if(title !== undefined) updatableData.title=title ;
             if(body !== undefined) updatableData.body=body ;
             if(userId !== undefined) updatableData.userId=userId;

             const updateTodo= await Todo.findByIdAndUpdate(id,updatableData,{new:true})
             return updateTodo
        }
    }
}

export default resolvers
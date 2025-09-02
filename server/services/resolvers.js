import User from '../models/user.js';
import Todo from '../models/todo.js';
const resolvers ={
    Query:{
        getUsers:async ()=>{
            const getUsers=await User.find({})
            return getUsers
        },
        getTodos:async()=>{
            const getTodos =await Todo.find({})
            return getTodos
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
             const {id,title,body} =args
             const updatableData ={}
             if(title !== undefined) updatableData.title=title ;
             if(body !== undefined) updatableData.body=body ;
             const updateTodo= await Todo.findByIdAndUpdate(id,updatableData,{new:true})
             return updateTodo
        },
        deleteTodo:async(parent,args)=>{
            const {id} =args
            if(id){
                const deleteTodo = await Todo.findByIdAndDelete(id)
                return deleteTodo
            }
        },

    }
}

export default resolvers
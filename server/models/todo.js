import {Schema,model} from 'mongoose'

const todoSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    userId:{
        type:Schema.ObjectId,
        ref:'user',
        required:true
    },
},{timestamps:true})

const Todo =model('todo',todoSchema)

export default Todo
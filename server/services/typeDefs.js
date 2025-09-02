const typeDefs =`
type User{
    id:ID!
    name:String
    email:String
    password:String
}
type Todo{
    id:ID!
    title:String
    body:String
    user:User
    userId:ID!
}
type Query{
    getUsers:[User]
    getTodos:[Todo]
}
type Mutation{
    createUser(name:String,email:String,password:String):User,
    createTodo(title:String,body:String,userId:String):Todo
    updateTodo(id:ID!,title:String,body:String,userId:String):Todo
    deleteTodo(id:ID!):Todo
}
`
export default typeDefs
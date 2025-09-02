import { gql } from "@apollo/client";
const Create_UserMutation =gql`
mutation createUser($name:String,$email:String,$password:String) {
  createUser(name:$name,email:$email,password:$password) {
    name
    email
    password
  }
}`
const Create_TodoMutation =gql`
mutation createTodo($title:String,$body:String,$userId:String) {
  createTodo(title:$title,body:$body,userId:$userId) {
    title
    body
    userId
  }
}`
const Delete_TodoMutation =gql`
mutation deleteTodo($id:ID!){
    deleteTodo(id:$id){
    id
    }
}
`
const Edit_TodoMutation =gql`
mutation editTodo($id:ID!,$title:String,$body:String){
  updateTodo(id:$id,title:$title,body:$body){
    id
    title
    body
  }
}
`

export {Create_TodoMutation,Create_UserMutation,Delete_TodoMutation ,Edit_TodoMutation}
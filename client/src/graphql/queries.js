import { gql } from "@apollo/client";
const GetUser = gql`
    query GetUsers {
      getUsers {
        email
        id
        name
        password
      }
    }
`
const GetTodo =gql`
query GetTodos {
  getTodos {
    body
    id
    title
    user {
      name
    }
    userId
  }
}`
export {GetTodo,GetUser}
import express from 'express'
import cors from 'cors'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4';
import typeDefs from './services/typeDefs.js'
import resolvers from './services/resolvers.js'
import mongoDbConnect from './conf/conn.js';

const app =express()
mongoDbConnect('mongodb://127.0.0.1:27017/todo').then(()=>console.log('mongodb connected'))
const server = new ApolloServer({
    typeDefs:typeDefs,
    resolvers:resolvers
})
await server.start()
app.use('/graphql',cors(),express.json(),expressMiddleware(server))

app.listen(8000,()=>console.log('server started at http://localhost:8000'))

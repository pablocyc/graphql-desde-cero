import {GraphQLServer} from 'graphql-yoga'
import Query from './resolvers/Query'
import Author from './resolvers/Author'
import db from './db'

const resolvers = {
  Query, 
  Author,
}

const context = {
  db
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context,
})

server.start( () => console.log('Server is running on localhost:4000') )

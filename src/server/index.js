const express = require('express');
const path = require('path');
const { ApolloServer, gql } = require('apollo-server-express');
path.resolve(__dirname, '../../');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type Query {
        hello: String
    }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.use(express.static('public'));

app.get('/test', (req, res) => {
    res.json({
        time: new Date().toString(),
        msg: 'server running',
    });
});

app.listen({ port: 3001 }, () =>
    console.log(`🚀 Server ready at http://localhost:3001${server.graphqlPath}`)
);

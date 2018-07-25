import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.scss';
import ApolloClient from 'apollo-boost';
import gql from "graphql-tag";

const client = new ApolloClient({
    uri: "http://localhost:3001/graphql"
});

client
  .query({
    query: gql`
      {
        hello
      }
    `
  })
  .then(result => console.log(result));

const App = () => (
    <div>
        <p>React here!</p>
    </div>
);
export default App;
ReactDOM.render(<App />, document.getElementById('app'));

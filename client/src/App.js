import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider} from 'react-apollo';

import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
// Apollo client setup
const client = new ApolloClient({
  // endpoint: graphiql
  uri: "/graphql"
});
  

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Header/>  
          <Main/>
          <Footer style={{bottom: '0px', position:'absolute', width:'100%'}}/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

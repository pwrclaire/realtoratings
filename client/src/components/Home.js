import React, { Component } from 'react';
import Featured from './Homepage/Featured';
import MarketNews from './Homepage/MarketNews';
import Search from './utils/search';

class Home extends Component {
  render() {
    return (
      <div>
        <Search/>
        <br/>
        <Featured/>
        <br/>
        <MarketNews/>
      </div>
  )}
}

export default Home;
import React, { Component } from 'react'
import FeaturedAgent from '../utils/featured';

class Featured extends Component {
  render() {
    return (
      <div>
        <div className="row">
            <h4 className="title">Featured Agents</h4>
              <FeaturedAgent realtor={'David J. Yuen'} identity={"5bec83306723f504184cc8cb"}img={1}/>
              <FeaturedAgent realtor={'Carolyn Hough'} identity={"5bec833f6723f504184cc8cd"} img={2}/>
              <FeaturedAgent realtor={'Ken Harris'} identity={"5bec83876723f504184cc8d5"}img={3}/>
          </div>
      </div>
    )
  }
}

export default Featured;
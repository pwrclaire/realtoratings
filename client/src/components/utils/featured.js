import React from 'react';
import { Link } from 'react-router-dom';

const featuredAgent = ({realtor, img, identity}) => (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <img src={require(`../../image/avatar-${img}.png`)} alt=""/>
          <span className="card-title"></span>
        <div className="card-content">
          <h5>
            {realtor}
          </h5>
        </div>
         <div className="card-action">
            <Link to={`/realtor/${identity}`}>Select</Link>
          </div>
        </div>
      </div>
    </div>
)


export default featuredAgent;
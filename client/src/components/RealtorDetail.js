import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import {
  getrealtorQuery,
  getCompanyQuery,
  getQuestions
} from "../queries/queries";
// import SimpleModalWrapped from "./utils/modal";
import Rating from './Rating.js';

class RealtorDetails extends Component {
  state = {
    open: false,
    questions: [],
    sort: ''
  };

  componentDidMount = () => {
    this.displayrealtorDetail();
  };

  componentDidUpdate() {
    this.displayrealtorDetail();
  }

  dynamicSort(input) {
    var sortOrder = 1;
    if(input[0] === "-") {
        sortOrder = -1;
        input = input.substr(1);
    }
    if(input.includes('dateCreated')) {
      // console.log('dDATE CREATED');
      return function (a,b) {
        var result = (a[input] > b[input]) ? -1 : (a[input] < b[input]) ? 1 : 0;
        return result * sortOrder;
      }
    }
    else {
      // console.log('OTHERS');
      return function (a,b) {
        var result = (a[input] > b[input]) ? -1 : (a[input] < b[input]) ? 1 : 0;
        return result * sortOrder;
      }
    }
    
  }

  // reloadComments = () => {
  //   this.fetchCount();
  //   this.fetchRating();
  //   console.log("reloadcomment function");
  // }

  fetchCount = () => {
    const realtor = this.props.data.realtor;
    if(realtor) {
      const numComments = realtor.comments.length;
      const knowledge = realtor.comments.map(k => k.knowledge).reduce((a, b) => a + b, 0);
      const responsiveness = realtor.comments.map(k => k.responsiveness).reduce((a, b) => a + b, 0);
      const interest = realtor.comments.map(k => k.interest).reduce((a, b) => a + b, 0);
      const professionalism = realtor.comments.map(k => k.professionalism).reduce((a, b) => a + b, 0);
      const sum = (knowledge + responsiveness + interest + professionalism) / (4 * numComments);
      return (
        <div>
          <h6>{numComments} {numComments > 1 ? "Reviews" : "Review"}</h6>
          <h6>Overall Rating: {!isNaN(sum) ? sum.toFixed(2) : "No ratings yet" }</h6>
        </div>
      )
    }
  }

  fetchRating = () => {
    const realtor = this.props.data.realtor;
    if(realtor) {
      return realtor.comments.sort(this.dynamicSort(this.state.sort)).map(c => {
      return (
        <div className="col s12" key={c.id}>
          <div className=" card-panel">
            <div className="card-title col s6">
              <h6>{c.text}</h6>
            </div>

            <div className="card-content col s6">
              <ul>
                <li>Knowledge: <b>{c.knowledge}</b></li>
                <li>Putting your interest first: <b>{c.interest}</b></li>
                <li>Professionalism: <b>{c.professionalism}</b></li>
                <li>Responding to your requests: <b>{c.responsiveness}</b></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    )}
  }

  displayrealtorDetail = () => {
    const realtor = this.props.data.realtor;
    if (realtor) {
      // console.log(realtor);
      let avatar;
      if(realtor.id === '5bec83306723f504184cc8cb') {
        avatar = require('../image/avatar-1.png');
      } else if (realtor.id === '5bec833f6723f504184cc8cd') {
        avatar = require('../image/avatar-2.png');
      } else if (realtor.id === '5bec83876723f504184cc8d5') {
        avatar = require('../image/avatar-3.png');
      } else {
        avatar = require('../image/avatar.png');
      }
      console.log(avatar);
      return (
        <div>
          <h4>{realtor.name}</h4>
          <h6>Company: {realtor.companyId.map(c => c.name)}</h6>
          <img src={avatar} width="100px" alt="avatar"/>
          {this.fetchCount()}
          <br/>

          <Rating name={realtor.name} id={realtor.id} reload={this.reloadComments}/>

          <br></br>
          <div className="row">
            {realtor.comments.length > 0 ? 
            <div className="row">
              <h5 className="col s8">User Ratings</h5>
              <div className="right-align">
                <div className="col s4">
                  <h6>Sort By:</h6>
                {/* eslint-disable-next-line */}
                <a className="waves-effect waves-light btn-small" onClick={() => this.setState({sort: 'dateCreated'})}> Recent </a>
                {/* eslint-disable-next-line */}
                <a className="waves-effect waves-light btn-small" onClick={() => this.setState({sort: 'starTotal'})}> Rating </a>
              </div>
              </div>
            </div>: 
            ""}
          </div>
         </div>
      );
    } else {
      return <div className="row">
              <div className="progress">
              <div className="indeterminate">
              </div>
              </div>
            </div>;
    }
  };

  render() {
    return (
      <div id="realtor-details">
        {/* <button onClick={() => this.reloadComments()}>ReLoad</button> */}
        {this.displayrealtorDetail()}
        {this.fetchRating()}
      </div>
    );
  }
}

export default compose(
  graphql(getrealtorQuery, {
    options: props => ({ variables: { id: props.match.params.id } })
  }),
  graphql(getCompanyQuery, { name: "getCompanyQuery" }),
  graphql(getQuestions, { name: "getQuestions" })
)(RealtorDetails);

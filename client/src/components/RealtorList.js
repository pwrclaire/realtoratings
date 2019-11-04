import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import {
  getrealtorsQuery,
  deleterealtorMutation,
  getcommentsQuery
} from "../queries/queries";
// import Pagination from 'react-js-pagination';

import { Link } from "react-router-dom";
import "../index.css";

class RealtorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      currentPage: 1,
      sortBy: "name",
      star: 0,
      perPage: 6,
      realtors: [],
      disableLeft: '',
      disableRight: ''
    };
  }

  componentDidUpdate() {
    // Typical usage (don't forget to compare props):
    if (this.state.realtors.length === 0) {
      this.fetchRealtors();
    }
  }

  componentDidMount() {
    if(this.state.realtors.length === 0) {
      this.fetchRealtors();
    }
  }

  dynamicSort = property => {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function(a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };

  fetchRealtors = () => {
    const data = this.props.getrealtorsQuery;
    if (data.loading) {
      return (
        <div className="row">
          <div className="progress">
            <div className="indeterminate" />
          </div>
        </div>
      );
    } else {
      this.setState({
        realtors: data.realtors.sort(this.dynamicSort(this.state.sortBy))
      });
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      currentPage: Number(e.target.id)
    })
  }

  handleChangeSort = (e) => {
    this.setState({
      sortBy: e.target.value
    })
  }

  togglePage = (e) => {
    // e.preventDefault();
    const lastPage = this.state.realtors.length / this.state.perPage;
    if(this.state.currentPage === 1) {
      this.setState({
        disableLeft: 'disabled'
      });
      // return;
    }
    
    if(this.currentPage >= lastPage) {
      this.setState({
        disableRight: 'disabled'
      })
      // return;
    }

    // console.log(e);
    // console.log(this.state.currentPage);
    this.setState(prevState => {
       return {currentPage: e === 'left' ? prevState.currentPage - 1 : prevState.currentPage + 1 };
      })
    }

  displayrealtors = () => {
    // const data = this.props.getrealtorsQuery;
    // if(data.loading) {
    //   return (
    //     <div className="row">
    //         <div className="progress">
    //         <div className="indeterminate">
    //         </div>
    //         </div>
    //       </div>
    //   )
    // } else {

    if (this.state.realtors) {
      const { realtors } = this.state;
      const { currentPage, perPage } = this.state;
      const indexOfLastPage = currentPage * perPage;
      const indexOfFirstPage = indexOfLastPage - perPage;
      const currentRealtors = realtors.slice(indexOfFirstPage, indexOfLastPage);
      
      const renderRealtors = currentRealtors.map(r => {
        const { comments } = r;
        const numComments = comments.length;
        const knowledge = comments.map(k => k.knowledge).reduce((a, b) => a + b, 0);
        const responsiveness = comments.map(k => k.responsiveness).reduce((a, b) => a + b, 0);
        const interest = comments.map(k => k.interest).reduce((a, b) => a + b, 0);
        const professionalism = comments.map(k => k.professionalism).reduce((a, b) => a + b, 0);
        const sum = (knowledge + responsiveness + interest + professionalism) / (4 * numComments);
        let avatar;
        if(r.id === '5bec83306723f504184cc8cb') {
          avatar = require('../image/avatar-1.png');
        } else if (r.id === '5bec833f6723f504184cc8cd') {
          avatar = require('../image/avatar-2.png');
        } else if (r.id === '5bec83876723f504184cc8d5') {
          avatar = require('../image/avatar-3.png');
        } else {
          avatar = require('../image/avatar.png');
        }
          return <div className="card" key={r.id}>
              <div className="card-content">
                <div className="col s1">
                  <img
                    src={avatar}
                    alt="avatar"
                    width="50px"
                  />
                </div>
                <div className="col s11">
                  <h5>
                    <Link to={`/realtor/${r.id}`}>{r.name}</Link>
                  </h5>
                  <p>Company: {r.companyId.map(n => n.name)}</p>
                  <p>Overall Rating {!isNaN(sum) ? sum.toFixed(2) : "No Ratings Yet"}</p>
                </div>
              </div>
            </div>
      })
  
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(realtors.length / perPage); i++) {
        pageNumbers.push(i);
      }

      // const cName = 'waves-effect' + active ? ' ' : '-';
      const renderPageNumbers = pageNumbers.map(number => {
        const cName = number === currentPage ? 'waves-effect active' : 'waves-effect';
        return (
          <li className={cName}
            key={number}
            id={number}
            onClick={this.handleClick}>
            {number}
          </li>

        );
      });
  
      return (
        <div>
          <ul>
            {renderRealtors}
          </ul>
          <ul className="pagination">
            {/* <li>
              <a onClick={() => this.togglePage('left')}>
              <i className="material-icons">chevron_left</i>
              </a>
            </li> */}
              {renderPageNumbers}
            {/* <li>
              <a onClick={() => this.togglePage('right')} >
              <i className="material-icons">chevron_right</i>
              </a>
            </li> */}
          </ul>
        </div>
      );
    }
  };

  render() {
    return (
      <div id="realtor-list">
        <div>
          <span className="row">
            <h5 className="col3">Realtors</h5>
          </span>
        </div>
        <ul>{this.displayrealtors()}</ul>
      </div>
    );
  }
}

export default compose(
  graphql(getrealtorsQuery, { name: "getrealtorsQuery" }),
  graphql(deleterealtorMutation, { name: "deleterealtorMutation" }),
  graphql(getcommentsQuery, { name: "getcommentsQuery" })
)(RealtorList)

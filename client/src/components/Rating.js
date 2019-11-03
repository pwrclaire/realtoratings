import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import { graphql, compose } from "react-apollo";
import { addCommentMutation, getrealtorQuery } from "../queries/queries";
import ReactTooltip from "react-tooltip";
import moment from 'moment';

class Rating extends Component {
  state = {
    rating: {
      knowledge: 0,
      responsiveness: 0,
      interest: 0,
      professionalism: 0
    },
    comment: ""
  };

  componentWillUpdate() {
    // console.log("Realtor id", this.props.id);
  }

  changeRating = (newRating, name) => {
    this.setState({
      rating: {
        ...this.state.rating,
        [name]: newRating
      }
    });
  };

  submitRating = e => {
    if (
      (this.state.rating.knowledge &&
        this.state.rating.responsiveness &&
        this.state.rating.interest &&
        this.state.rating.professionalism) === 0
    ) {
      alert("Please fill in the stars!");
      return;
    }
    if (this.state.comment.length < 9) {
      alert("At least 10 characters for comments are required!");
      return;
    } else {
      this.props.addCommentMutation({
        variables: {
          text: this.state.comment,
          knowledge: this.state.rating.knowledge,
          responsiveness: this.state.rating.responsiveness,
          interest: this.state.rating.interest,
          professionalism: this.state.rating.professionalism,
          realtorId: this.props.id,
          dateCreated: moment()
        }
      });
      this.setState({
        rating: {
            knowledge: 0,
            responsiveness: 0,
            interest: 0,
            professionalism: 0
        }
      });
      const comment = this.refs.comment;
      comment.value = "";
      window.location.reload();
      // this.props.reload();
      // this.props.reloadRatings();
      // console.log("Hello from this section", this.props);
    }
  };



  render() {
    return (
      <div>
        <span className="section">
          <h6>How would you rate {this.props.name}?</h6>
        </span>
        <span className="section" id="rating">
          <ul>
            <li>
              <span data-tip="How well did they know the market/neighbourhood?">
                Knowledge
              </span>
              <StarRatings
                rating={this.state.rating.knowledge}
                starRatedColor="red"
                changeRating={this.changeRating}
                numberOfStars={5}
                name="knowledge"
                starHoverColor="green"
                starDimension="33px"
                starSpacing="5"
              />
            </li>
            <li>
              <span data-tip="How responsive were they in answering your requets">
                Responsiveness
              </span>
              <StarRatings
                rating={this.state.rating.responsiveness}
                starRatedColor="red"
                changeRating={this.changeRating}
                numberOfStars={5}
                name="responsiveness"
                starHoverColor="green"
                starDimension="33px"
                starSpacing="5"
              />
            </li>
            <li>
              <span data-tip="Did they always look out for your best interest?">
                Putting your interest first
              </span>
              <StarRatings
                rating={this.state.rating.interest}
                starRatedColor="red"
                changeRating={this.changeRating}
                numberOfStars={5}
                name="interest"
                starHoverColor="green"
                starDimension="33px"
                starSpacing="5"
              />
            </li>
            <li>
              <span data-tip="Did they take care of you even after your transaction was completed?">
                Professionalism
              </span>
              <StarRatings
                rating={this.state.rating.professionalism}
                starRatedColor="red"
                changeRating={this.changeRating}
                numberOfStars={5}
                name="professionalism"
                starHoverColor="green"
                starDimension="33px"
                starSpacing="5"
              />
            </li>
          </ul>
          <p>Comments:</p>
          <div className="input-field col s12">
            <textarea className="materialize-textarea" ref="comment" onChange={e => this.setState({ comment: e.target.value })}></textarea>
          </div>
          <button className="btn" onClick={() => this.submitRating()}>
            Add rating
          </button>
        </span>
        <ReactTooltip />
      </div>
    );
  }
}

export default compose(
    graphql(addCommentMutation, { name: "addCommentMutation" }),
    graphql(getrealtorQuery, { name: "getrealtorQuery"})
)(Rating)
;

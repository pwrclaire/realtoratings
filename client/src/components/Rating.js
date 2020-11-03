import React, { useState, useRef } from "react";
import StarRatings from "react-star-ratings";
import { graphql, compose } from "react-apollo";
import { addCommentMutation, getrealtorQuery } from "../queries/queries";
import ReactTooltip from "react-tooltip";
import moment from "moment";
import { useAuth0 } from "@auth0/auth0-react";

const Rating = (props) => {
  const { isAuthenticated } = useAuth0();
  const [knowledge, setKnowledge] = useState(0);
  const [responsiveness, setResponsiveness] = useState(0);
  const [interest, setInterest] = useState(0);
  const [professionalism, setProfessionalism] = useState(0);
  const [comment, setComment] = useState("");

  const clearState = () => {
    setKnowledge(0);
    setResponsiveness(0);
    setInterest(0);
    setProfessionalism(0);
    setComment(0);
  };

  const submitRating = () => {
    if ((knowledge && responsiveness && interest && professionalism) === 0) {
      alert("Please fill in the stars!");
      return;
    }
    if (comment.length < 9) {
      alert("At least 10 characters for comments are required!");
      return;
    } else {
      props.addCommentMutation({
        variables: {
          text: comment,
          knowledge: knowledge,
          responsiveness: responsiveness,
          interest: interest,
          professionalism: professionalism,
          realtorId: props.id,
          dateCreated: moment(),
        },
      });
      clearState();
    }
  };

  return (
    <div>
      <span className="section">
        <h6>How would you rate {props.name}?</h6>
      </span>
      <span className="section" id="rating">
        <ul>
          <li>
            <span data-tip="How well did they know the market/neighbourhood?">
              Knowledge
            </span>
            <StarRatings
              rating={knowledge}
              starRatedColor="red"
              changeRating={(e) => setKnowledge(e)}
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
              rating={responsiveness}
              starRatedColor="red"
              changeRating={(e) => setResponsiveness(e)}
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
              rating={interest}
              starRatedColor="red"
              changeRating={(e) => setInterest(e)}
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
              rating={professionalism}
              starRatedColor="red"
              changeRating={(e) => setProfessionalism(e)}
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
          <textarea
            className="materialize-textarea"
            onChange={(e) => setComment(e.target.value)}
            disabled={!isAuthenticated}
            placeholder={!isAuthenticated ? "Please login to comment" : ""}
          />
        </div>
        <button
          className="btn"
          onClick={() => submitRating()}
          disabled={!isAuthenticated}
        >
          Add rating
        </button>
      </span>
      <ReactTooltip />
    </div>
  );
};

export default compose(
  graphql(addCommentMutation, { name: "addCommentMutation" }),
  graphql(getrealtorQuery, { name: "getrealtorQuery" })
)(Rating);

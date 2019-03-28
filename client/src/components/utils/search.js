import React, { Component } from "react";
import Autosuggest from "react-autosuggest";

import { withRouter } from 'react-router-dom';

import { graphql, compose } from "react-apollo";
import {
  getcommentsQuery,
  getrealtorsQuery
} from "../../queries/queries";

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderSuggestion(suggestion) {
  return <span>{suggestion.name}</span>;
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      suggestions: [],
      value: "",
      id: ""
    };
  }

  getSuggestionValue = suggestion => suggestion.name;

  getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    const realtors = this.props.getrealtorsQuery.realtors;
    // console.log("Whats this: ", this.props);
    if (escapedValue === "") {
      return [];
    }

    const regex = new RegExp("^" + escapedValue, "i");
    // console.log(this.props);

    return realtors.filter(realtor => regex.test(realtor.name));
  }

  // this the just the single second where a suggestion is being selected
  onSuggestionsFetchRequested = ({ value }) => {
    // console.log("fetched value: ", value);
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // when cursor dismisses the list of selections
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, { suggestion }) => {
    // this.setState({
    //   id: suggestion.id
    // });
    this.props.history.push(`/realtor/${suggestion.id}`);
  }

  onChange = (event, { newValue }) => {
    // console.log('NEW VALUE: ', newValue);
    this.setState({
      value: typeof newValue !== "undefined" ? newValue : ""
    });
    // console.log('Current value: ', this.state.value);
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "Search",
      value,
      onChange: this.onChange
    };

    const data = this.props.getcommentsQuery;
    // // console.log(data);
    if (data.loading) {
      return <div className="row">
            <div className="progress">
            <div className="indeterminate">
            </div>
            </div>
          </div>;
    } else {
      return (
        <form id="add-realtor">
          <div className="input-field">
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={this.getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
              onSuggestionSelected={this.onSuggestionSelected}
            />
            </div>

        </form>
      );
    }
  }
}

export default withRouter(compose(
  graphql(getcommentsQuery, { name: "getcommentsQuery" }),
  graphql(getrealtorsQuery, { name: "getrealtorsQuery" })
)(Search));

import React, { Component } from "react";
import Autosuggest from "react-autosuggest";

import { graphql, compose } from "react-apollo";
import {
  getcommentsQuery,
  addrealtorMutation,
  getrealtorsQuery,
  updateRealtorMutation
} from "../queries/queries";

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderSuggestion(suggestion) {
  return <span>{suggestion.name}</span>;
}

class AddRealtor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      comments: "",
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

  displaycomments = () => {
    const data = this.props.getcommentsQuery;
    if (data.loading) {
      return <option disabled>Loading comments...</option>;
    } else {
      return <div>Something great is coming</div>;
    }
  };

  submitForm = (e) => {
    e.preventDefault();
    // console.log("SUBMIT FORM: ", this.state);
    if (this.state.id === "") {
      if((this.state.name || this.state.company) === '') {
        return;
      }
      this.props.addrealtorMutation({
        variables: {
          name: this.state.name,
          company: this.state.company,
          comments: this.state.comments
        },
        refetchQueries: [{ query: getrealtorsQuery }]
      });
    }
    if (this.state.id !== "") {
      this.props.updateRealtorMutation({
        variables: {
          id: this.state.id,
          text: this.state.comments
        },
        refetchQueries: [{ query: getrealtorsQuery }]
      });
    }
  };

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
    // console.log('ON SUGGESTION SELECTED: ', suggestion);
    this.setState({
      id: suggestion.id
    })
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
      placeholder: "Name",
      value,
      onChange: this.onChange
    };

    const data = this.props.getcommentsQuery;
    // // console.log(data);
    if (data.loading) {
      return <div>Loading data</div>;
    } else {
      return (
        <form id="add-realtor" onSubmit={this.submitForm}>
  
          <div>HELLO!{this.state.id}</div>
          
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            onSuggestionSelected={this.onSuggestionSelected}
          />

          <div className="field">
            <label>Company:</label>
            <input
              type="text"
              onChange={e => this.setState({ company: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Comment:</label>
            <input
              type="text"
              onChange={e => this.setState({ comments: e.target.value })}
            />
          </div>
        
          <button className="waves-effect waves-light btn">Add</button>
        </form>
      );
    }
  }
}

export default compose(
  graphql(getcommentsQuery, { name: "getcommentsQuery" }),
  graphql(addrealtorMutation, { name: "addrealtorMutation" }),
  graphql(getrealtorsQuery, { name: "getrealtorsQuery" }),
  graphql(updateRealtorMutation, { name: "updateRealtorMutation" })
)(AddRealtor);

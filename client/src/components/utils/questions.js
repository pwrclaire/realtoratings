import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getQuestions } from '../../queries/queries';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      question: 1
    }
  }

  displayQuestions = () => {
    const loading = this.props.getQuestions.loading;
    if(!loading) {
      return this.props.getQuestions.questions.filter(q => q.order === this.state.question).map(q => 
        <p key={q.order}>{q.question}</p>);
    }
  }

  handleClick = (boo) => {
    this.setState({
      question:  this.state.question + 1
    });
    if (boo) {
      this.setState({
        count: this.state.count + 1
      })
    }
    if(this.state.question > 4) {
      return;
    };
  }

  displayText = () => {
    return (
      <div className="row">
        <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea"></textarea>
          <label htmlFor="textarea1">Comments</label>
        </div>
        <p>Happy Count: {this.state.count}</p>
        <button className="btn">Finish</button>
      </div>
    )
  }

  render() {
    if(this.state.question <= 4) {
      return (
        <div className="center">
          {this.displayQuestions()}
          <div className="row">
            <button className="btn" onClick={() => this.handleClick(true)}>Yes</button>
            <button className="btn" onClick={() => this.handleClick(false)}>NO</button>
          </div>
          <p>Happy Count: {this.state.count}</p>
        </div>
      )
    }
    // if(num === 4) {
    //   return (
    //     <div>WHATS IN VEGAS</div>
    //   )
    // }
    if(this.state.question > 4) {
      return (
        <div>
          {this.displayText()}
        </div>
      )
    }
  }
}

export default graphql(getQuestions, {name: "getQuestions"})(Question);
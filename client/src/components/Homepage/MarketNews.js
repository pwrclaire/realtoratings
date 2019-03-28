import React, { Component } from "react";

class MarketNews extends Component {
  componentDidMount() {
    this.fetchNews();
  }

  state = {
    news: ''
  }

  fetchNews = () => {
    const today = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    console.log(today);
    const url = 'https://newsapi.org/v2/everything?' +
    'q=Real Estate Market&' +
    'from='+ today +
    'sortBy=popularity&' +
    'apiKey=b07149fc1f174e04b0bcfaddf3327b33';

    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(news => {
      if(news.status === 'ok') {
        this.setState({
          news
        })
      }
    })
  }

  displayArticles = () => {
    const { articles } = this.state.news;
    console.log("THINGS: ", articles);
    if(articles) {
      return (
        <div>
          <div>{articles.map(x => 
            <p key={x.url}>
              {x.source.name} <br/>
              <a href={x.url}>{x.title}</a>
            </p>
            )}
          </div>
          <p>-Powered by <a href="https://newsapi.org/">newsapi.org</a></p>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h4 className="title">World Market</h4>
          {this.displayArticles()}
      </div>
    );
  }
}

export default MarketNews;

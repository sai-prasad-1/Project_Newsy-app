import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { article } = this.props;
    console.log(this.props+"props");
    return (
      <div className="card1" style={{width:"25rem"}} >
        <div className="card1__header">
        <img src={article.urlToImage} className=" card1__img" alt="..." />
        <div className="card__body">
        <div className="card-body">
          <h5 className="card1__title">{article.title}</h5>
          <p className="card-text">{article.description}
          </p>
          </div>
          <a href={article.url} className="btn btn-primary rd-btn" target="_blank"> 
            Read More
          </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

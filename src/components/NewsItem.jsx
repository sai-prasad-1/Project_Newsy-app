import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, url, urlToImage } = this.props;
    console.log(this.props+"props");
    return (
      <div className="card1" style={{width:"18rem"}} >
        <div className="card1__header">
        <img src={urlToImage} className=" card1__img" alt="..." />
        <div className="card__body">
        <div className="card-body">
          <h5 className="card1__title">{title}</h5>
          <p className="card-text">{description}
          </p>
          </div>
          <a href={url} className="btn btn-primary rd-btn"> 
            Read More
          </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

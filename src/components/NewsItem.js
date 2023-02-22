import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgurl, newsUrl, date, author } = this.props;

    return (
      <div className="container my-2">
        <div className="card text-white bg-dark  border-5 border-primary ">
          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-info"
            >
              Read More
            </a>
          </div>
          <div className="card-footer bg-warning text-dark">
            Published by {!author ? "Unknown" : author} on{" "}
            {new Date(date).toGMTString()}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

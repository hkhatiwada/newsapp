import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgurl, newsUrl, date, author } = this.props;

    return (
      <div className="row m-2">
        <div className="card text-white bg-dark">
          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Read More
            </a>
          </div>
          <div class="card-footer">
            Published by {!author ? "Unknown" : author} on{" "}
            {new Date(date).toGMTString()}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

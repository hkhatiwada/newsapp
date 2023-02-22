import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    category: "science",
    country: "in",
    pageSize: 6,
    setProgress:10
  };
  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    };
    document.title = `${this.props.category}- NewsApp`;
  }

  async componentDidMount() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&&category=${this.props.category}&apiKey=485a415305cc49179f3baba45d1f85c2&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let myObject = await fetch(url);
    this.props.setProgress(30);
    let myText = await myObject.json();
    this.props.setProgress(75);
    this.setState({
      articles: myText.articles ,
      totalResults: myText.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  };

  // handlePrev = async () => {
  //   console.log("handle prev was clicked");
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=485a415305cc49179f3baba45d1f85c2&page=${
  //     this.state.page - 1
  //   }&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let myObject = await fetch(url);
  //   let myText = await myObject.json();
  //   this.setState({
  //     articles: myText.articles,
  //     page: this.state.page - 1,
  //     loading: false,
  //   });
  // };
  fetchMoreData = async() => {
   this.setState({page: this.state.page + 1});
   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&&category=${this.props.category}&apiKey=485a415305cc49179f3baba45d1f85c2&page=${
          this.state.page + 1 }&pageSize=${this.props.pageSize}`;
  //  this.setState({ loading: true });
   let myObject = await fetch(url);
   let myText = await myObject.json();
   this.setState({
     articles: this.state.articles.concat(myText.articles),
     totalResults: myText.totalResults,
     loading: false,
   })
   
  };

  // handleNext = async () => {
  //   if (this.state.page + 1 > Math.ceil(this.state.totalResults / 12)) {
  //     console.log("last page reached");
  //   } else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${
  //       this.props.country
  //     }&category=${
  //       this.props.category
  //     }&apiKey=485a415305cc49179f3baba45d1f85c2&page=${
  //       this.state.page + 1
  //     }&pageSize=${this.props.pageSize}`;
  //     this.setState({ loading: true });
  //     let myObject = await fetch(url);
  //     let myText = await myObject.json();
  //     this.setState({
  //       articles: myText.articles,
  //       page: this.state.page + 1,
  //       loading: false,
  //     });
  //   }
  // }; 

  render() {
    return (
      <div className="container ">
        <h1 style={{ margin: "35px", textAlign: "center" }}>
          top headlines {this.props.category} category
        </h1>
        {this.state.loading && <Spinner />}
        
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
          >
            <div className="row my-3">
            {
              this.state.articles.map((element) => {
                return  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imgurl={
                        !element.urlToImage
                          ? "https://bsmedia.business-standard.com/_media/bs/img/article/2022-08/03/full/1659512756-1667.jpg"
                          : element.urlToImage
                      }
                      author={element.author}
                      date={element.publishedAt}
                      newsUrl={element.url}
                    />
                  </div>
            
                
              })}
              </div>
          </InfiniteScroll>
       
         
        </div>
      
    );
  }
}

export default News;

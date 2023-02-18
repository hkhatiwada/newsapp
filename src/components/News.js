import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';  
export class News extends Component {
 static defaultProps={
  category: 'science',
  country : 'in',
  pageSize: 6
 } 
 static propTypes={
  category: PropTypes.string,
  country : PropTypes.string,
  pageSize: PropTypes.number
 } 
  constructor(){
    super();
    this.state={
      articles: [],
      loading:false,
      page:1
    }
  }

  async componentDidMount() {
  let  url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&&category=${this.props.category}&apiKey=485a415305cc49179f3baba45d1f85c2&page=1&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});  
  let myObject = await fetch(url);
    let myText = await myObject.json();
    this.setState({articles: myText.articles, totalResults: myText.totalResults, loading:false})
  }

   handlePrev=  async ()=> {  
      console.log("handle prev was clicked")
      let  url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=485a415305cc49179f3baba45d1f85c2&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let myObject = await fetch(url);
      let myText = await myObject.json();
      this.setState({articles: myText.articles, page: this.state.page-1, loading:false});
  }
   handleNext= async ()=> {
   if(this.state.page+1 >Math.ceil(this.state.totalResults/12)){
    console.log("last page reached")
   }
   else{
    let  url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=485a415305cc49179f3baba45d1f85c2&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let myObject = await fetch(url);
    let myText = await myObject.json();
    this.setState({articles: myText.articles, page: this.state.page+1, loading:false});
   }
  }
  
  render() {
    return (
      <div className="container align-items-center">
            <h1 style={{margin: '35px', textAlign: "center"}}>This is news component.</h1>
            {this.state.loading && <Spinner/>}
                            <div className="row my-3" >    
                            { !this.state.loading && this.state.articles.map((element)=>{
                              return <div className="col-4" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imgurl={!element.urlToImage?"https://bsmedia.business-standard.com/_media/bs/img/article/2022-08/03/full/1659512756-1667.jpg":element.urlToImage} author={element.author} date={element.publishedAt}  newsUrl={element.url}/>
                                </div>

                            })}   
                          <div className="container d-flex justify-content-between">
                        <button type="button" disabled={this.state.page<=1} onClick={this.handlePrev} className="btn btn-dark my-2">Previous</button>
                        <button type="button" disabled={this.state.page +1 > Math.ceil(this.state.totalResults/12)} onClick={this.handleNext} className="btn btn-dark my-2">Next</button>
                        </div>
                </div>         

             

           
        
      </div>
    )
  }
}

export default News

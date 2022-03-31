import React, { Component, useEffect } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
    
    constructor(){
        super();
        let articles ={}
        this.state = {
          articles:this.articles,
          loading:true
        }  
    }
   async componentDidMount(){
   let url = "https://newsapi.org/v2/everything?q=india&page=3&apiKey=4c804de93f7a4cf294eb50d10cddcfb7";

   let data =await fetch(url)
   let json = await data.json();
   let arti = json.articles;
   this.setState({articles:arti,loading:true})
    

   
    }
    

  render() {
    
    return (
        <>
        <div className='news_heading'>
        <h2>News Monkey-TopHeadlines</h2>
        </div>
      <div className='news_container'>
        {

         this.state.articles ? this.state.articles.map(article => (<NewsItem article={article}/>)):""
        }  
      
      
      </div>
      </>
    )
  }
}

export default News
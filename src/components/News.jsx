import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super();  
    }
  render() {
    const {articles} = require('../sample.json');
 
    //
    return (
        <>
        <div className='news_heading'>

        <h2>News Monkey-TopHeadlines</h2>
        </div>
      <div className='news_container'>
         {articles.map(article =>  (<NewsItem description={article.description} title={article.title} url={article.url} urlToImage={article.urlToImage}/>))}
      
      </div>
      </>
    )
  }
}

export default News
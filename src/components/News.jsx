import React, { Component, useEffect } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Button } from '@mui/material';

export class News extends Component {
  
    
    constructor(){
        super();

        
        let articles ={}
        this.state = {
          articles:this.articles,
          loading:true,
          page:1,
          totalArticles:0,
          prevDisabled:false,
          nextDisabled:false
        }  
    }
   async componentDidMount(){
     axios.get(`https://newsapi.org/v2/everything?q=world&${this.state.page}&pageSize=20&apiKey=4c804de93f7a4cf294eb50d10cddcfb7`)
     .then((response)=>{
       let arti = response.data.articles;
       this.setState({articles:arti,loading:false,totalArticles:response.data.totalResults})
       
     }
     ).catch((error)=>{console.log(error);})
  

   
    }

    handlePrevClick=async()=>{
      console.log("prev");

      this.setState({
        page:this.state.page -1
      })
      axios.get(`https://newsapi.org/v2/everything?q=world&page=${this.state.page}&pageSize=20&       pageSize=20&apiKey=4c804de93f7a4cf294eb50d10cddcfb7`)
     .then((response)=>{
       let arti = response.data.articles;
       this.setState({articles:arti,loading:false,totalArticles:response.data.totalResults})
       
     }
     ).catch((error)=>{console.log(error);})
     window.scrollTo(0, 0);  


    }
    handlenextClick=async()=>{
      console.log("next");

      if (this.state.page+1>Math.ceil(this.state.totalArticles/20)) {
        this.setState({
          nextDisabled:true
        })
      }
        
      else{
      this.setState({
        page:this.state.page + 1
      })

      axios.get(`https://newsapi.org/v2/everything?q=world&page=${this.state.page}&pageSize=20&apiKey=4c804de93f7a4cf294eb50d10cddcfb7`)
     .then((response)=>{
       let arti = response.data.articles;
       this.setState({articles:arti,loading:false,totalArticles:response.data.totalResults})
       
     }
     ).catch((error)=>{console.log(error);})
     window.scrollTo(0, 0);  

    }}

  render() {
    
    return (
        <>
        <div className='news_heading'>
        <h2>News Monkey-TopHeadlines</h2>
        </div>
      <div className='news_container'>
        {
          
            this.state.articles ? this.state.articles.map((article,index) => (<NewsItem article={article} key={index}/>)):""
          

         
        }  
      
      
      </div>
        <div className="ctnr prev-nxt">
        {this.state.page<=1?<Button variant="outlined" > &larr; Previous</Button>:<Button variant="contained"  onClick={this.handlePrevClick}> &larr; Previous</Button>} 
     
      <Button variant="contained" disabled={this.state.nextDisabled} c onClick={this.handlenextClick}>Next &rarr;</Button>
     
        </div>
      
          
      </>
    )
  }
}

export default News
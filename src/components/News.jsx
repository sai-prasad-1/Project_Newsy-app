import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios';
import { Auth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';



const News = () => {
  const[articles,setArticle]=useState()
  const[TotalArticles,setTotalArticle]=useState()
  const[page,setPage]=useState(1)
  const[nextDisabled,setNextDisaabled]=useState(false)
  const {currentUser}=Auth();
  const navigate = useNavigate();
  useEffect(()=>{
    if (!currentUser) {
      navigate("/")
     
      
    }
    
  axios.get("https://newsapi.org/v2/everything?q=russia&apiKey=c575a485fdff451db3fd6b58b955eb4a")
     .then((response)=>{
       let arti = response.data.articles;
       setTotalArticle(response.data.totalResults)
      setPage(page+1)
setArticle(arti)       
     }
     )})
     const handlePrevClick=async()=>{
            console.log("prev");

          setPage(page-1)
            axios.get(`https://newsapi.org/v2/everything?q=world&page=${page}&pageSize=20&apiKey=c575a485fdff451db3fd6b58b955eb4a`)
           .then((response)=>{
            setTotalArticle(response.data.totalResults)
             let arti = response.data.articles;
             setArticle(arti) 

           }
           ).catch((error)=>{console.log(error);})
           window.scrollTo(0, 0);  
      
      
          }
          const handlenextClick=async()=>{
            console.log("next");
      
            if (page+1>Math.ceil(TotalArticles/20)) {
              setNextDisaabled(true)
            }
              
            else{
            setPage(page+1)
      
            axios.get(`https://newsapi.org/v2/everything?q=world&page=${page}&pageSize=20&apiKey=c575a485fdff451db3fd6b58b955eb4a`)
           .then((response)=>{
            setTotalArticle(response.data.totalResults)
             let arti = response.data.articles;
             setArticle(arti)
             
           }
           ).catch((error)=>{console.log(error);})
           window.scrollTo(0, 0);  
      
          }}
  return (
<>
    <div className='news_heading'>
       <h2>News Monkey-TopHeadlines</h2>
/      </div>
      <div className='news_container'>
        {
          
            articles ? articles.map((article,index) => (<NewsItem article={article} key={index}/>)):""
          

         
        }  
      
      
      </div>
        <div className="ctnr prev-nxt">
        {page<=1?<button variant="outlined" > &larr; Previous</button>:<button variant="contained"  onClick={handlePrevClick}> &larr; Previous</button>} 
     
      <button variant="contained" disabled={nextDisabled}  onClick={handlenextClick}>Next &rarr;</button>
     
        </div>
      </>
  )
}


export default News
import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios';



const News = () => {
  const[articles,setArticle]=useState()
  const[TotalArticles,setTotalArticle]=useState()
  const[page,setPage]=useState(1)
  const[nextDisabled,setNextDisaabled]=useState(false)
  useEffect(()=>{
  axios.get("https://newsapi.org/v2/everything?q=russia&apiKey=c575a485fdff451db3fd6b58b955eb4a")
     .then((response)=>{
       let arti = response.data.articles;
       setTotalArticle(response.data.totalResults)
      setPage(page+1)
setArticle(arti)       
     }
     )},[])
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



// export class News extends Component {
  
    
//     constructor(){
//         super();

        
//         let articles ={}
//         this.state = {
//           articles:this.articles,
//           loading:true,
//           page:1,
//           totalArticles:0,
//           prevDisabled:false,
//           nextDisabled:false
//         }  
//     }
//    async componentDidMount(){
//      axios.get(`https://newsapi.org/v2/everything?q=world&${this.state.page}&pageSize=20&apiKey=4c804de93f7a4cf294eb50d10cddcfb7`)
//      .then((response)=>{
//        let arti = response.data.articles;
//        this.setState({articles:arti,loading:false,totalArticles:response.data.totalResults})
       
//      }
//      ).catch((error)=>{console.log(error);})
  

   
//     }

//     handlePrevClick=async()=>{
//       console.log("prev");

//       this.setState({
//         page:this.state.page -1
//       })
//       axios.get(`https://newsapi.org/v2/everything?q=world&page=${this.state.page}&pageSize=20&       pageSize=20&apiKey=4c804de93f7a4cf294eb50d10cddcfb7`)
//      .then((response)=>{
//        let arti = response.data.articles;
//        this.setState({articles:arti,loading:false,totalArticles:response.data.totalResults})
       
//      }
//      ).catch((error)=>{console.log(error);})
//      window.scrollTo(0, 0);  


//     }
//     handlenextClick=async()=>{
//       console.log("next");

//       if (this.state.page+1>Math.ceil(this.state.totalArticles/20)) {
//         this.setState({
//           nextDisabled:true
//         })
//       }
        
//       else{
//       this.setState({
//         page:this.state.page + 1
//       })

//       axios.get(`https://newsapi.org/v2/everything?q=world&page=${this.state.page}&pageSize=20&apiKey=4c804de93f7a4cf294eb50d10cddcfb7`)
//      .then((response)=>{
//        let arti = response.data.articles;
//        this.setState({articles:arti,loading:false,totalArticles:response.data.totalResults})
       
//      }
//      ).catch((error)=>{console.log(error);})
//      window.scrollTo(0, 0);  

//     }}

//   render() {
    
//     return (
//         <>
//         <div className='news_heading'>
//         <h2>News Monkey-TopHeadlines</h2>
//         </div>
//       <div className='news_container'>
//         {
          
//             this.state.articles ? this.state.articles.map((article,index) => (<NewsItem article={article} key={index}/>)):""
          

         
//         }  
      
      
//       </div>
//         <div className="ctnr prev-nxt">
//         {this.state.page<=1?<button variant="outlined" > &larr; Previous</button>:<button variant="contained"  onClick={this.handlePrevClick}> &larr; Previous</button>} 
     
//       <button variant="contained" disabled={this.state.nextDisabled} c onClick={this.handlenextClick}>Next &rarr;</button>
     
//         </div>
      
          
//       </>
//     )
//   }
// }

export default News
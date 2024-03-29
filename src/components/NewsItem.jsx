import React ,{Component} from "react"

export default  class NewsItem extends Component {
  render() {
    let { article } = this.props;
    
    return (
      <div className="card1 max-w-[20rem]"  >
        <div className="card1__header">
        <img src={article.urlToImage?article.urlToImage:"https://www.gannett-cdn.com/presto/2022/03/25/USAT/d0e50d3c-8fdc-4b3d-98f1-f7f34fdbca0a-AP_APTOPIX_Russia_Ukraine_War.jpg?auto=webp&crop=5499,3094,x0,y559&format=pjpg&width=1200"} className=" card1__img" alt="..." />
        <div className="flex flex-col justify-center items-center w-full">
        <div className="w-[90%]">
          <h5 className="card1__title text-xl">{article.title?article.title.slice(0,45):""} .....</h5>
          <p className="card-text text-sm">{article.description?article.description.slice(0,88):""} ......
          </p>
          </div>
          <div className="ctnr ">

          <a href={article.url} className="bg-gray-800 pl-4 pr-4 p-2 text-white rounded-md" target="_blank"> 
            Read More
          </a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}


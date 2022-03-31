import React, { useEffect } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const NewsItem = ({article}) => {
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
  const [fav, setFav] = React.useState("#e3f2fd");
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const favorites=()=>{
     if(fav==="#e3f2fd"){
       setFav("#d32f2f")
      
     }
     else{
       setFav("#e3f2fd")
       
     }
    }

    let  copytoclip = ()=>{
      navigator.clipboard.writeText(article.url)
  }
  return (

    <div> <Card sx={{ maxWidth: 345 }}>
    
    <CardMedia
      component="img"
      height="194"
      image={article.urlToImage}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body1" fontWeight={"bold"} color="text.secondary">
        {article.title}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites" onClick={favorites}>
        <FavoriteIcon style={{"color":fav}}/>
      </IconButton>
      <IconButton aria-label="share" onClick={copytoclip}>
        <ShareIcon />
      </IconButton>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>
          {article.description}
         
        </Typography>
        
      </CardContent>
    </Collapse>
    <Box  justifyContent='center' display="flex" mb={3}  >
    <Button variant="contained" href={article.url}>
  Read More
</Button>
</Box>
  </Card>
 
    
  
   
    
  
  
  </div>
  )
}


// export class NewsItem extends Component {
//   render() {
//     let { article } = this.props;
    
//     return (
//       <div className="card1" style={{width:"20rem"}} >
//         <div className="card1__header">
//         <img src={article.urlToImage?article.urlToImage:"https://www.gannett-cdn.com/presto/2022/03/25/USAT/d0e50d3c-8fdc-4b3d-98f1-f7f34fdbca0a-AP_APTOPIX_Russia_Ukraine_War.jpg?auto=webp&crop=5499,3094,x0,y559&format=pjpg&width=1200"} className=" card1__img" alt="..." />
//         <div className="card__body">
//         <div className="card-body">
//           <h5 className="card1__title">{article.title?article.title.slice(0,45):""} .....</h5>
//           <p className="card-text">{article.description?article.description.slice(0,88):""} ......
//           </p>
//           </div>
//           <div className="ctnr ">

//           <a href={article.url} className="btn btn-primary rd-btn" target="_blank"> 
//             Read More
//           </a>
//           </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default NewsItem;

import React from 'react'
import { useWindowSize,useWindowWidth} from "@react-hook/window-size"
import mobileImage from "../assets/404 Mobile.png"
import normalImage from "../assets/404 normal.png"
import Right from "../assets/404rr.png"
import Left from "../assets/404BottomLeft.png"
import only from "../assets/404only.png"

const Error404 = () => {
    const [width, height] = useWindowSize()
    console.log(width);
  return (
    
    <div className="flex flex-col items-center justify-center h-screen  ">
        {width>=700?
        <img src={normalImage} className="w-[45%]" />:
        <img src={mobileImage} className="w-[105%]" />}
    
    </div>
  )
}

export default Error404
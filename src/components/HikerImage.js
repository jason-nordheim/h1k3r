import React from 'react'
import HikerImg from "../images/man-in-hike-svgrepo-com.svg";


export const HikerImage = ({style}) => {
  return (
    <img src={HikerImg} alt="hiker" style={style} />
  )
}
import React from 'react'
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa'
import "../styles/Loader.css"
const Loading = () => {
  return (
    <div className='loader'>
        <FaHandScissors className='icon icon1'/>
        <FaHandRock className='icon icon2'/>
        <FaHandPaper className='icon icon3'/>
    </div>
  )
}

export default Loading
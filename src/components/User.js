import React, { useState } from 'react'
import { FaHandRock,FaHandPaper, FaHandScissors } from "react-icons/fa";
import Machine from './Machine';
import "../styles/User.css"
const User = () => {
    const [action,setAction]=useState("")
    const [clicked,setClicked]=useState(false)
 
    const handleClick=(e)=>{
         setAction(e)
         setClicked(true)
    }
  return (
    <div>
        {clicked ?
        <Machine action={action}/> :(
        <div className='actionDiv'>
         <p>Select One</p>
         <div className='action'>
         <FaHandRock  onClick={()=>handleClick('rock')} className='myAction' />
        <FaHandPaper onClick={()=>handleClick('paper')} className='myAction' />
        <FaHandScissors onClick={()=>handleClick('scissors')} className='myAction' />
         </div>
    </div>
        )
    }
    </div>
  )
}

export default User
import React, { useEffect, useState } from 'react'
import Result from './Result'
import Loading from './Loading'

const Machine = ({action}) => {
    const actions=["rock","paper","scissors"]
    const [mAction,setMAction]=useState("")
    const [loading,setLoading]=useState(true)
   
    useEffect(()=>{
        setTimeout(()=>
            getRandom(0,actions.length-1)
         ,2000)
        
    },[])
   function getRandom(start,l){
    setLoading(false)
    setMAction(actions[ Math.floor(Math.random()*(l-start+1)+start)])
   }
  console.log(mAction)
  return (
    <div>{loading ? (<div>
        <Loading/>
    </div>
    ):(<Result action={action} mAction={mAction}/>)}</div>
  )
}

export default Machine
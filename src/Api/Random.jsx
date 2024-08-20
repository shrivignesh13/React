import { useState } from "react"
import "../Api/Random.css"
import { useEffect } from "react"
export const Random = () => {
    const [advice,setAdvice]=useState("Please Click Here")
    const [count,setCount]=useState(0)
    async function getadvice(){
       const res=await fetch("https://api.adviceslip.com/advice") 
       const data= await res.json()
       setAdvice(data.slip.advice)
       setCount((e)=>e+1)
       useEffect((function (){
        getadvice()
       },[]))
    }
  return (
  <>
  <h2>Hello,Get Advices from Api!</h2>
  <h3>"{advice}"</h3>
  <button onClick={getadvice}>Get Advice</button>
  <p>Read {count} Advices</p>
  </>
  )
}



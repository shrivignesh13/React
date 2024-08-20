import { useState } from 'react'
import '../OtpGenerator/Otp.css'
export function OtpGenarator() {
    const[length,setLength]=useState(8);
    const[upper,setUpper]=useState(true);
    const[lower,setLower]=useState(true);
    const[number,setNumber]=useState(true);
    const[symbol,setSymbol]=useState(true);
    const[password,setPassword]=useState("")
    const generate=()=>{
        let set="";
        if(upper)set+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(lower)set+="abcdefghijklmnopqrstuvwxyz";
        if(number)set+="0123456789";
        if(symbol)set+="!@#$%^&*()_+=-";
        let generate="";
        for(let i=0;i<length;i++){
            const random=Math.floor(Math.random()*set.length)
            generate+=set[random]
        }
setPassword(generate)


    }
    const clip=()=>{
        navigator.clipboard.writeText(password)
        alert("Copied To Clipboard")
    }
  return (
   <>
   <div className="container">
    <h2>PASSWORD GENERATOR</h2>
    <div className="input">
        <label htmlFor="number">Password Length:</label>
        <input type="number" id='number'value={length} onChange={(e)=>{setLength(parseInt(e.target.value))}}/>
    </div>
    <div className="checkbox">
        <input type="checkbox" name="" id="upper" checked={upper} onChange={(e)=>setUpper(e.target.checked)}/>
        <label htmlFor="upper">Uppercase</label>
    </div>
    <div className="checkbox">
        <input type="checkbox" name="" id="lower" checked={lower} onChange={(e)=>setLower(e.target.checked)}/>
        <label htmlFor="lower">Lowercase</label>
    </div>
    <div className="checkbox">
        <input type="checkbox" name="" id="numbers" checked={number} onChange={(e)=>setNumber(e.target.checked)}/>
        <label htmlFor="numbers">Numbers</label>
    </div>
    <div className="checkbox">
        <input type="checkbox" name="" id="symbols" checked={symbol} onChange={(e)=>setSymbol(e.target.checked)}/>
        <label htmlFor="symbols">Symbols</label>
    </div>
    <button className='gen' onClick={generate}>Generate Password</button>
    <div className="password">
        <input type="text" readOnly value={password}/>
        <button className='copy' onClick={clip}>Copy</button>
    </div>
   </div>
   </>
  )
}


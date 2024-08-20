import { useState } from 'react'
import '../Clock/Clock.css'
import { useEffect } from 'react';
 export const Clock = () => {
    const[time,currTime]=useState(new Date());
    useEffect(()=>{
        const timer=setInterval(()=>{
            currTime(new Date())
        },1000);
        return ()=>clearInterval(timer)
    },[])
    const format=(hour)=>{
        return hour===0?12:hour>12?hour-12:hour;
    }
    const timeFormat=(num)=>{
        return num<10?`0${num}`:num;
    }
    const formatDate=(day)=>{
        const option={weekday:"long",year:"numeric",month:"long",day:"numeric"}
        return day.toLocaleDateString(undefined,option);
    }
  return (
    <>
    <div className="container">
        <h2>Digital Clock</h2>
        <div className="time">
            {timeFormat(format(time.getHours()))} : {timeFormat(time.getMinutes())} : {timeFormat(time.getSeconds())} 
            {time.getHours()>=12?" PM ":" AM "}
        </div>
        <div className="date">
            {formatDate(time)} 
            </div>
    </div>
    
    </>
  )
}


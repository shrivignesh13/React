import '../Calendar/Calendar.css'
import leftArrow from '/arrow-left-square.svg'
import rightArrow from '/arrow-right-square.svg'
import { useState } from 'react';

const days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const month=["January","February","March","April","May","June","July","August","September","October","November","December"];

const Calendar = () => {
const [selectDate,setSelectDate]=useState(new Date());
const daysInMonth=()=>{

  const daysArray=[];

  const firstDay=new Date(selectDate.getFullYear(),selectDate.getMonth(),1);

  const lastDay=new Date(selectDate.getFullYear(),selectDate.getMonth()+1,0);

  for(let i=0;i<firstDay.getDay();i++){
    daysArray.push(null);
  }
  for(let i=1;i<=lastDay.getDate();i++){
    daysArray.push(new Date(selectDate.getFullYear(),selectDate.getMonth(),i));
  }
  return daysArray;
};
daysInMonth();
const isSameDay=(date1,date2)=>{
  return date1.getDate()===date2.getDate() && date1.getMonth()===date2.getMonth() && date1.getFullYear()===date2.getFullYear();
}

const handleMonth=(e)=>{
  const newMonth=parseInt(e.target.value,10 );
  setSelectDate(new Date(selectDate.getFullYear(),newMonth,1));}

  const handleYear=(e)=>{
    const newYear=parseInt(e.target.value,10);
    setSelectDate(new Date (newYear,selectDate.getMonth(),1));
  }


  return (
   <>
   <div className="container">
    <div className="header">
      <button onClick={()=>{setSelectDate(new Date(selectDate.getFullYear(),selectDate.getMonth()-1,1))}}>
        <img src={leftArrow} />
      </button>
      <select name="" id="" value={selectDate.getMonth()} onChange={handleMonth}>
        {month.map((month,index)=>(
          <option key={index} value={index}>{month}</option>
        ))}
      </select>
      <select name="" id="" value={selectDate.getFullYear()} onChange={handleYear}>
        {
          Array.from({length:10},(_,i)=>selectDate.getFullYear()-5+i).map((year)=>(
            <option  key={year} value={year}>
              {year}
            </option>
          ))
        }
      </select>
      <button onClick={()=>{setSelectDate(new Date(selectDate.getFullYear(),selectDate.getMonth()+1,1))}}>
        <img src={rightArrow} alt="" />
      </button>
    </div>
    <div className="week">
      {days.map((day)=>(
        <div key={day}>
          {day}
        </div>
      ))}
    </div>
    <div className="days">
      {daysInMonth().map((day,index)=>(
        <div key={index} className={day?(isSameDay(day,new Date()))?"day current":"day":"empty"}>{day?day.getDate():""}

        </div>
      ))}
    </div>
    
   </div>
   </>
  )
}

export default Calendar

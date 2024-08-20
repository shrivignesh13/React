import { useState } from "react";
import "../BmiCalculator/Bmi.css";

export const BmiCalc = () => {
    const[height,setHeight]=useState("")
    const[weight,setWeight]=useState("")
    const[bmi,setBmi]=useState(null)
    const[bmiStatus,setBmiStatus]=useState("")
    const[error,setError]=useState("")

    const calculate=()=>{
        const isValidHeight=/^\d+$/.test(height);
        const isValidWeight=/^\d+$/.test(weight);
        if(isValidHeight && isValidWeight){
            const heightInMeters=height/100;
            const bmiValue=weight/(heightInMeters*heightInMeters);
            setBmi(bmiValue.toFixed(2)); 
            if(bmiValue<18.5){
                setBmiStatus("Underweight");
            }else if(bmiValue>=18.5 && bmiValue<24.9){
                setBmiStatus("Normal Weight")
            }else if(bmiValue>=25 && bmiValue<29.9){
                setBmiStatus("Overweight")
            }else{
                setBmiStatus("Obese")
                
            }setError("")
        }else{
            setBmi(null)
            setBmiStatus("")
            setError("Please enter a valid number for Height & Weight.")
        }
    }
    const clear=()=>{
setHeight("")
setBmi(null)
setBmiStatus("")
setWeight("")
    }

  return (
    <>
      <div className="container">
        <div className="box">
          <img src="bmi.png" alt="" />
        </div>
        <div className="data">
          <h2>BMI CALCULATOR</h2>
{       error &&   <p className="error">{error}</p>
}          <div className="input">
            <label htmlFor="height">Height(cm):</label>
            <input type="text" id="height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
          </div>

          <div className="input">
            <label htmlFor="weight">Weight(kg):</label>
            <input type="text" id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
          </div>
          <button onClick={calculate}>Calculate</button>
          <button onClick={clear}>Clear</button>
        {bmi!==null && (  <div className="result">
            <p>BMI Is: {bmi}</p>
            <p>Status : {bmiStatus}</p>
          </div>)}
        </div>
      </div>
    </>
  );
};

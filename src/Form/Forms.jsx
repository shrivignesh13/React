import { useState } from "react";
import "../Form/Form.css"
export  const Forms = () => {
    const[user,Setuser]=useState({
        name:"Vignesh",Age:29,gender:"Male",isMarried:true,country:"India",
    });
  function ChangeHandler(e){
    const name=e.target.name;
    const value=e.target.type==="checkbox"?e.target.checked:e.target.value;
    Setuser({...user,[name]:value})
  }
       
    
  return (
   <>
  <table>
    <tbody>
        <tr>
            <td>Name</td>
            <td>{user.name}</td>
        </tr>
        <tr>
            <td>Age</td>
            <td>{user.Age}</td>
        </tr>
        <tr>
            <td>Gender</td>
            <td>{user.gender}</td>
        </tr>
        <tr>
            <td>Marrital status  </td>
            <td>{user.isMarried ?"Married":"Unmarried"}</td>
        </tr>
        <tr>
            <td>Country</td>
            <td>{user.country}</td>
        </tr>
    </tbody>
</table>
<form action="">
    <input type="text" placeholder="Fullname" value={user.name} name="name" onChange={ChangeHandler}/>
    <input type="number" name="Age" id="" placeholder="Age" value={user.Age} onChange={ChangeHandler}/>
    <div className="gender">
        <label htmlFor="male">
            <input type="radio" name="gender" id="male" value="Male" checked={user.gender=="Male"}onChange={ChangeHandler}/>Male 
        </label>
        <label htmlFor="female">
            <input type="radio" name="gender" id="female" value="Female" checked={user.gender=="Female"}onChange={ChangeHandler}/>Female 
        </label>
    </div>
    <label htmlFor="isMarried">
        <input type="checkbox"id="isMarried" checked={user.isMarried} onChange={ChangeHandler} name="isMarried"/>IsMarried?
    </label>
    <div className="select">
        <label htmlFor="country">Select Country :</label>
       <select name="country" id="country" value={user.country}onChange={ChangeHandler}>
        {/* <option value="">Select Country</option> */}
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="China">China</option>


       </select>
    </div>
</form>


   </>
  )

}


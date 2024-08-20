import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Calendar from './Calendar/Calendar.jsx'
// import { OtpGenarator } from './OtpGenerator/OtpGenarator.jsx'
// import { Clock } from './Clock/Clock.jsx'
// import { Currency } from './Currency/Currency.jsx'
// import { BmiCalc } from './BmiCalculator/BmiCalc.jsx'
// import { Weather } from './weather/Weather.jsx'
// import { Random } from './Api/Random.jsx'
// import { Forms } from './Form/Forms.jsx'
// import { UserDetails } from './Cart/UserDetails.jsx'
// import { Qrcode } from './Components/Qrcode.jsx';
// import "./Components/Qrcode.css"
// import { Cart } from './Cart/Cart.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Qrcode /> */}
    {/* <Cart/> */}
    {/* <UserDetails/> */}
    {/* <Forms/> */}
    {/* <Random/> */}
    {/* <Weather/> */}
    {/* <BmiCalc/> */}
    {/* <Currency/> */}
    {/* <Clock/> */}
    {/* <OtpGenarator/> */}
    <Calendar/>
    
  </React.StrictMode>,
)

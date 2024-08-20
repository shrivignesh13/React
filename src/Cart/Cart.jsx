
import { useState } from "react"
export  const Cart = () => {
    const [cartCount,SetCount]=useState(0);
    const Click=()=>SetCount(cartCount + 1)
  return (
   <>
   <h1>No of items in cart :{cartCount} </h1>
   <button onClick={Click}>Add to Cart</button>
   </>
  )
}


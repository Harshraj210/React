import { useEffect, useState } from "react";

function currencyinfo (currency){
  const [data,setdata]=useState({})
    useEffect(() => {
      // fect data API
       fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
       .then((res)=>res.json())
       .then((res)=>setdata(res[currency]))
      
    
      
    }, [currency])
    
  return data
}

export default currencyinfo
import React,{useState} from "react";
import userContext from "./Usercontext";
const UsercontextProvider=({children})=>{
  const [User,setUser]=useState(null)
  return(
    <userContext.Provider val={{User,setUser}}>
      {children}
    </userContext.Provider>
    
    
  )

}

export  default UsercontextProvider
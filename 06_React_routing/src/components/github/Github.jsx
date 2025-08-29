import React from "react";
import { useEffect } from "react";
import { data } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Github(){
  const data =useLoaderData()

  // const [Data,setData]=React.useState(null)
  // useEffect(()=>{
  //   fetch("https://github.com/Harshraj210")
  //   .then((response)=>response.json())
  //   .then(Data=>{
  //     console.log(Data)
  //     setData(Data)
  //   })
  // },[])
  return(

    <div className="text-center text-red-600 p-4 m-5 bg-blue-100">GitHub</div>
  )
}
export default Github

export const Githubinfo=async()=>{
  const Response=await fetch("https://github.com/Harshraj210")
  return Response.json()
}
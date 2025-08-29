import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const {userid} = useParams();
  return (
    <div className="bg-blue-500 text-red-200 text-3xl text-center">User : {userid}</div>
  );
}
export default User;

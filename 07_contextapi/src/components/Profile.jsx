import React, { useContext, useState } from "react";
import userContext from "./context/Usercontext.js";

function Profile() {
  const { user } = useContext(userContext);
  if (!user) return <h1>Login Failed</h1>;
  return (
    <div>
      <h1>Profile : {user.Username}</h1>
    </div>
  );
}
export default Profile;

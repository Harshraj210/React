import React from "react";
export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:bg-gray-800">
      <a href="/">
        <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTntK18Z3UE9PS4mN9SiFqh57z77RIbj-JhxqMsBMiwYG2FOoGGxa5F29-r_Vl0zLl_zSADL_xoBd8VQP_9nsXnNr4aKLB1BC_-DvYr4jHxr5qKiO6y4HnAk2A" />
      </a>
      <div className="px-5 pb-5">
        <a href="/"></a>
      </div>
    </div>
  );
}

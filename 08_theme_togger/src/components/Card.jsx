import React from "react";
export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:bg-gray-800">
      <a href="/">
        <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTntK18Z3UE9PS4mN9SiFqh57z77RIbj-JhxqMsBMiwYG2FOoGGxa5F29-r_Vl0zLl_zSADL_xoBd8VQP_9nsXnNr4aKLB1BC_-DvYr4jHxr5qKiO6y4HnAk2A"
         className="p-8 rounded-t-lg"
         />
       
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Nike Air Jordan 1 Retro High
          </h5>
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
              <li>• Premium leather</li>
              <li>• Iconic high-top design</li>
              <li>• Lightweight cushioning</li>
                  
                
              
            </ul>
          </p>
          <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            $323.31
          </span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
}

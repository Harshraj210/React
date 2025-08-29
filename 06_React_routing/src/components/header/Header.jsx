import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="data:image/jpeg;base64,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"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-blue-800 hover:bg-blue-50 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-blue-500" : "text-red-300"
                    } lg:hover:bg-transparent lg:border-0 text-blue-500 hover:text-blue-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={(isActive) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-blue-500" : "text-red-300"
                    } lg:hover:bg-transparent lg:border-0 text-blue-500 hover:text-blue-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
                 <li>
                <NavLink
                  to="/contact"
                  className={(isActive) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-blue-500" : "text-red-300"
                    } lg:hover:bg-transparent lg:border-0 text-blue-500 hover:text-blue-700 lg:p-0`
                  }
                >
                 Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-blue-500" : "text-red-300"
                    } lg:hover:bg-transparent lg:border-0 text-blue-500 hover:text-blue-700 lg:p-0`
                  }
                >
                  GitHub
                </NavLink>
              </li>
                  <li>
                <NavLink
                  to="/user"
                  className={(isActive) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-blue-500" : "text-red-300"
                    } lg:hover:bg-transparent lg:border-0 text-blue-500 hover:text-blue-700 lg:p-0`
                  }
                >
                 User
                </NavLink>
              </li>
                  
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

            
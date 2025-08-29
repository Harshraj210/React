import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import ContactPageBMW from './components/contact/Contact.jsx'
import Github,{Githubinfo} from './components/github/Github.jsx'

import User from './components/user/User.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path = "" element={<Home />} />
      <Route path="about" element= {<About />} />
      <Route path="contact" element= {<ContactPageBMW />} />
      <Route
      loader={Githubinfo}
       path="github"
        element= {<Github />} />
      {/* // for dynamic capturing */}
      <Route path="user/" element= {<User />} >
        <Route path = ":userid" element= {<User />} />
      </Route>

    </Route>
    
     
  
    
  
  )
  
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

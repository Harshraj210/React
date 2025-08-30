import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UsercontextProvider from './components/context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UsercontextProvider>
      <h1>Context Api</h1>
      <Login />
      <Profile />
    </UsercontextProvider>
  )
}

export default App

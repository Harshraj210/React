import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setlength] = useState(8)
  const [numberAllowed,setnumberAllowed]=useState(flase)
  const [charAllowed,setcharAllowed]=useState(flase)
  const [password,setpassword]=useState('')
  return (
    <>
     <h1 className='bg-red-500'>Set-up rea  dy</h1>
    </> 
  )
}

export default App

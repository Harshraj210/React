import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-2xl font-bold text-center my-4'>Nike Air Jordan 1 Retro High</h1>
    <div className='flex justify-center items-center'>

      <Card />
    </div>
    </>
  )
}

export default App

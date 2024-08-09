import { useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
useEffect(()=>{
  const fetchHomeapi = async ()=>{
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_MODE}/api`)
    console.log('check res >>>',res)
  } 
  fetchHomeapi()
},[])
  return (
    <>
      <div>hello api</div>
    </>
  )
}

export default App

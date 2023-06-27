import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home  from './pages/home'
import  Login  from './pages/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home/>}> </Route>
        <Route path="/login" exact element={<Login/>}> </Route>
      </Routes>
    </>
  )
}

export default App

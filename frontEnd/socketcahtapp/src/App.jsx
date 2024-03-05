import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import io from "socket.io-client"
import Chat from './Chat'
import { Router } from 'express'
import { BrowserRouter } from 'react-router-dom'
function App() {
 

  return (
    <>
     <Chat/>

     <BrowserRouter>

        <Routes>
          <Route path={"./chat"} element={}></Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

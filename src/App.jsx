import { useState } from 'react'
import AllPlayers from './components/AllPlayers'
import NavBar from './components/NavBar'
import SinglePlayer from './components/SinglePlayer.jsx'
import NewPlayer from './components/NewPlayerForm.jsx'
import { Route, Routes } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Puppy Bowl Roster</h1>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<AllPlayers/>}/>
          <Route path='/players/:id' element={<SinglePlayer/>} />
          <Route path='/newplayer' element={<NewPlayer/>} />
        </Routes>
      </div>
    </>
  )
}

export default App

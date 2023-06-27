import React from 'react'
import './home.css'
import spotify from '../assets/spotify.png'
import spot from '../assets/spot.png'

const Home = () => {
  return (
    <>
      <nav className="navbar">
        <div className="image">
          <img src={spot}></img>
        </div>
        <div className="rightside">
          <ul>
            <li>Premium</li>
            <li>Help</li>
            <li>Download</li>
            <li>|</li>
            <li>Sign in</li>
            <li>Log In</li>
          </ul>
        </div>
      </nav>
      <div className='main'>
        <div className='bg'>
          <img src={spotify}></img>
          <div className='music'>
          Music for everyone.
        </div>
        <div className="mill">Millions of songs.No credit card needed.
        </div>
        <div className="sub"><input type="submit" value="UPDATE"></input></div>
        </div>
       
      </div>

    </>

  )
}

export default Home
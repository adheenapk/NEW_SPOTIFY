
import spotify from '../assets/spotify.png'
import spot from '../assets/spot.png'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Navigation=styled.nav `position: absolute;
height: 5rem ;
width: 100%;
background: black;
opacity: 70%;
display: flex;
align-items: center;
justify-content: space-between;


.image img {
    width: 10rem;
    height: 3rem;
    margin-left: 15rem;
  }
  
  li {
    list-style: none;
    display: inline-block;
  }
  
  li {
    color: white;
    font-size: 1.5rem;
    margin-right: 3rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
`;
const Container=styled.div `display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

.btn{
    color: white;
    position: absolute;
    top: 34rem;
    left: 49rem;
    background-color: #03C04A;
    border-radius: 10rem;
    width: 9rem;
    height: 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    border: #03C04A;
}

.bg img{
  background-repeat: no-repeat;
  background-size: 100% 100%;
    height: 100vh;
    width: 100%;
  
}
.music{
    position: absolute;
    top: 20rem;
    left: 27rem;
    color: whitesmoke;
    font-size: 6rem;
    font-weight:1000;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.mill{
    position: absolute;
    top: 28rem;
    left: 40rem;
    color: whitesmoke;
    font-size: 1.8rem;
    font-weight:900;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}
.count{
  position: absolute;
    top: 30rem;
    left: 50rem;
    color: whitesmoke;
    font-size: 1.5rem;
    font-weight:900;
}
#v1{
  color: orangered;
  width: 1rem;
  border-radius: 10rem;
  text-align: center;
  background-color: #f8f8f6;
  border: yellow;
}
@media screen and (max-width:400px){
  .music{
    position: absolute;
    font-size: 30px;
    font-weight:500;
    left: 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  
}
}
`;

function Home() {
  const[value,setValue]=useState(0)

 useEffect(()=>{document.getElementById('v1').value=value},[value])
  return (
    <>
      <Navigation>
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
      </Navigation>
      <Container>
        <div className='bg'>
          <img src={spotify}></img>
          <div className='music'>
          Music for everyone.
        </div>
        <div className="mill">Millions of songs.No credit card needed.
        </div>
        <h1 className='count'>Count : <input onChange={(e)=>console.log(e.target.value)} type="text"  id='v1'/></h1>
        <button onClick={()=>setValue(value+1)} className="btn">Update</button>
     
        </div>
       
      </Container>

    </>

  )
}

export default Home
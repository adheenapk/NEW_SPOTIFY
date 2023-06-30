
import spotify from '../assets/spotify.png'
import spot from '../assets/spot.png'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Navigation = styled.nav`position: absolute;
height: 75px ;
width: 100%;
background: black;
opacity: 70%; 
display: flex;
align-items: center;
justify-content: space-between;

 ul li a{
  text-decoration: none;
  color: white;
  padding: 7px 8px;
 }
 ul li a{
  text-decoration: none;
  color: white;
  padding: 7px 8px;
 }

.rightside a:hover{
  background-color: #420505;
}
.image img {
    width: 100px;
    height: 60px;
    margin-left: 150px;
  }
  
  li {
    list-style: none;
    display: inline-block;
    line-height: 70px;
  }
  
  li {
    color: white;
    font-size: 21px;
    margin-right:35px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .ch{
    color: white;
    font-size: 20px;
    display: none;
  }
  #check
  {
    display: none;
  }

  #check:checked ~ .rightside  ul{
    left: 0%;
  } 

  @media (max-width:600px){
    .image img {
    width: 90px;
    height: 50px;
    margin-left: 10px;
  }
 .rightside .no{
  display: none;
 }
    .ch{
      display: block;
      position: absolute;
      right: 30px;
    }
    .rightside ul{
      width: 100%;
      height: 100vh;
      position: fixed;
      background-color: black;
      top:59px;
      left: -110%;
    }
    .rightside ul li{
      background-color: black;
      display: block;
      text-align: center;
     font-size: 20px;
     color: white;
    }

  }
  `;
const Container = styled.div`display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

.btn{
    color: white;
    background-color: #03C04A;
    border-radius: 10rem;
    width: 110px;
    font-size: 18px;
    font-weight: bold;
    border: #03C04A;
}

.bg {
  background-image: url(${spotify});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: 100% 100%;
    height: 100vh;
    width: 100%;
  
}
.music{
    color: whitesmoke;
    font-size: 90px;
    font-weight:1000;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.mill{

    color: whitesmoke;
    font-size: 25px;
    font-weight:900;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}
.count{
    color: whitesmoke;
    font-size: 30px;
    font-weight:900;
}
#v1{
  color: orangered;
  width: 16px;
  border-radius: 10rem;
  text-align: center;
  background-color: #f8f8f6;
  border: yellow;
}
@media(max-width: 600px){
  
  .music{
    color: whitesmoke;
    font-size: 40px;
    font-weight:1000;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.mill{

    color: whitesmoke;
    font-size: 15px;
    font-weight:450;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}
.count{
    color: whitesmoke;
    font-size: 15px;
    font-weight:450;
} 
.btn{
    color: white;
    background-color: #03C04A;
    border-radius: 10rem;
    width: 110px;
    font-size: 18px;
    font-weight: bold;
    border: #03C04A;
}
}
`;

function Home() {
  const [value, setValue] = useState(0)

  useEffect(() => { document.getElementById('v1').value = value }, [value])
  return (
    <>
      <Navigation>
    
        <div className="image">
          <img src={spot}></img>
        </div>
          <input type='checkbox' className='chk' id='check'></input>
        <label htmlFor='check' className='ch'>Menu</label>
        <div className="rightside">
          <ul>
            <li><a class="active" href="#">Premium</a></li>
            <li><a href='#'>Help</a></li>
            <li><a href='#'>Download</a></li>
            <li className="no">|</li>
            <li><a href='#'>Sign in</a></li>
            <li><a href='login'>Log In</a></li>
          </ul>

        </div>

      </Navigation>
      <Container>
        <div className='bg'>

          <div className='music'>
            Music for everyone.
          </div>
          <div className="mill">Millions of songs.No credit card needed.
          </div>
          <h1 className='count'>Count : <input onChange={(e) => console.log(e.target.value)} type="text" id='v1' /></h1>
          <button onClick={() => setValue(value + 1)} className="btn">Update</button>

        </div>

      </Container>

    </>

  )
}

export default Home
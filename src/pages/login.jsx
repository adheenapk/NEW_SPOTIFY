
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container=styled.div ` background-color: #008ECC;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 100vh;
width: 100%;
.log{
    background-color: whitesmoke;
    height: 600px;
    width: 500px;
    border-radius: 10px 10px 10px 10px;
  
}
.heading{
    margin-top: 80px;
    color: black;
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
}
.details{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
  }
  label{
    margin-left:30px;
    margin-bottom: 5px;
    margin-top: 10px;
  }
  input{
    margin-left: 30px;
    width: 450px;
    height: 55px;
    border: grey;
  }
  .check{
    position: absolute;
    left: 470px;
    transform: scale(0.4);
  }
  .check label{
    font-size: 40px;
    color: rgb(48, 47, 47);
    position: absolute;
    font-family: serif;
    left: 280px;
    width: 500px;
}
.btn input{
    margin-top: 80px;
    color: white;
    background-color: #008ECC;
    font-size: large;
}   
.forg{
    text-align: center;
    margin-top: 30px;
    font-size: medium;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

a{
    text-decoration: none;
    color: #008ECC;
}
@media screen and (max-width: 600px){
    .log{
    background-color: whitesmoke;
    height: 550px;
    width: 400px;
    border-radius: 10px 10px 10px 10px;
  
}
.heading{
    margin-top: 60px;
    color: black;
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
}
.details{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
  }
  label{
    margin-left:30px;
    margin-bottom: 5px;
    margin-top: 10px;
  }
  input{
    margin-left: 30px;
    width: 345px;
    height: 50px;
    border: grey;
  }
  .check{
    position: absolute;
    left: -110px;
    transform: scale(0.4);
  }
  .check label{
    font-size: 40px;
    color: rgb(48, 47, 47);
    position: absolute;
    font-family: serif;
    left: 210px;
    width: 500px;
}
.btn input{
    margin-top: 80px;
    color: white;
    background-color: #008ECC;
    font-size: large;
}   
.forg{
    text-align: center;
    margin-top: 30px;
    font-size: medium;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
}
`;


function Login() {
  const[value,setValue]=useState(null)

 useEffect(()=>{document.getElementById('v1').value=value},[value])
 useEffect(()=>{document.getElementById('v2').value=value},[value])
  return (
    <>
    
    <Container>
                <div className="log">
                    <div className="heading">
                        Login
                    </div>
                    <form>
                        <label htmlFor="mail">E-mail</label>
                        <input onChange={(e)=>console.log(e.target.value)} type="email" id="v1" className="id" placeholder="      Enter email" required></input>
                        <label htmlFor="pass">Password </label>
                        <input onChange={(e)=>console.log(e.target.value)} type="password" id="v2" className="id" placeholder="       Enter password" required></input>
                    <div className="check">
                        <input type="checkbox" id="checkbox"></input>
                        <label htmlFor="checkbox">Show Password</label>
                    </div>
            
                    <div className="btn">
                        <input type="submit" value="SIGN IN"></input>
                    </div>
                    </form>
                    <div className="forg">
                        Forgot <a href="#">Username</a> / <a href="#"> Password</a> ?
                        <div className="dont">Don't have an account? <a href="#"> Sign up</a> </div>
                    </div>
                </div>
            </Container>

    </>

  )
}

export default Login
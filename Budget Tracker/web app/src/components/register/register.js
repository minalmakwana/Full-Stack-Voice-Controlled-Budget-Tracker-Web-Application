import React, { useState } from "react"
import "./register.scss"
import axios from "axios"
import { useHistory } from "react-router-dom"

//Adding Particle for dynamic effects to the background
import Particles from 'react-particles-js';



const Register = () => {
//Declaring particle properties
    const particlesOptions = {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          }
        }
      }

    const history = useHistory()
//initialising the initialse state for the user
    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })
//function for taking the text from the input fields
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            //using axios post call for posting the data in backend
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invalid input")
        }
        
    }
//Layout for register form
    return (
        <div className="register">
             <Particles className='particles'
          params={particlesOptions}   /> 
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}

export default Register

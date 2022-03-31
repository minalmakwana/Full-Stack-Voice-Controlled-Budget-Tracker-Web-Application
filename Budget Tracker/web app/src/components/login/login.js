import React, {useState} from "react"
import "./login.scss"
import axios from "axios"
import { useHistory } from "react-router-dom"
import Particles from 'react-particles-js'

//Declaring particle properties for dynamic background
const Login = ({ setLoginUser}) => {

    const particlesOptions = {
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800
            }
          }
        }
      }
      


    const history = useHistory()
//Declaring initial state of the user
    const [ user, setUser] = useState({
        email:"",
        password:""
    })
//Taking input values from the input text fields
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
//Using axios post call to verify login credentials
    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
            localStorage.setItem('_id', res.data.user.id);
        })
    }

    return (
        <div className="login">
             <Particles className='particles'
          params={particlesOptions}   /> 
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>
    )
}

export default Login

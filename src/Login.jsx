import React from 'react'
import './Login.css'
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { auth } from './firebase'
export default function Login() {
const navigate=useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = (e) => {
    e.preventDefault()

    auth
    .signInWithEmailAndPassword(email,password)
    .then(auth=>{
      navigate('/')
    })
    .catch((error) => alert(error.message))
  }

  const register = (e) => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth)
        if (auth) {
          navigate('/')
        }
      })
      .catch((error) => alert(error.message))
  }
  return (
    <div className="login">
      <div className="card">
        
        <div className="right">
        
          <h1>Login to AmaZone</h1>
          <form>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit' onClick={signIn}>Login</button>
          </form>
        </div>
        <div className="left">
         
          <p>

          </p>
          <span>Don't have an account?</span>
          <Link to="/">
            <button onClick={register}>Create Account</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

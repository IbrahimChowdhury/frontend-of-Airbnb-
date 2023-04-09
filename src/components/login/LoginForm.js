import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import style from "./login.module.css"
import axios from 'axios';
import { UserContext } from '../useContext/userContext';
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
const [redirect, setredirect] = useState(false);
let {setuser}=useContext(UserContext)

  let handleSubmit=async(e)=>{
    e.preventDefault()
    try {
    const {data} = await axios.post("/login",{email,password})
    if(data)
     
    setuser(data)
      
      // { <Navigate to={"/"} /> }
      setredirect(true)
    } catch (error) {
      alert("login failed")
    }

  }

  if(redirect)
  {
    return <Navigate to={"/"} />
  }



  return (
    <div>
      

      <div className={style["register"]}>
        <form onSubmit={handleSubmit} >
          <h1>Login</h1>

          <input type="email" placeholder='email@gmail.com'
          name='email'
          value={email}
          onChange={(e)=>{
            setemail(e.target.value)
          }} />
          <input type="password" placeholder='password'
          name='password'
          value={password}
          onChange={(e)=>{
            setpassword(e.target.value)
          }}  />
          <button type="submit">Login</button>
          <p>Don't have an account yet? <Link className='underline hover:text-rose-600' to="/register">Register now</Link></p>
        </form>


      </div>

    </div>
  )
}

export default Login
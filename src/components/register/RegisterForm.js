import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import style from "./register.module.css"
import axios from 'axios';
function RegisterForm() {


  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [redirect, setredirect] = useState(false);

  let handleSubmit = (e) => {
    e.preventDefault()
   
    axios.post("/register",{
      name:name,
      email:email,
      password:password
    })
    .then((res)=>{
      setname("")
      setemail("")
      setpassword("")
      alert("registration successfully")
      setredirect(true)
    })
    .catch(()=>{
      alert("ragistration failed")
    })
  }

  if(redirect){
    <Navigate to={"/login"} />
  }


  return (
    <div>


      <div className={style["register"]}>
        <form onSubmit={handleSubmit} >
          <h1>Register</h1>

          <input type="text" placeholder=' name' value={name} onChange={(e) => {
            setname(e.target.value)
          }} />
          <input type="email" placeholder='email@gmail.com' value={email} onChange={(e) => {
            setemail(e.target.value)
          }} />
          <input type="password" placeholder='password' value={password} onChange={(e) => {
            setpassword(e.target.value)
          }} />
          <button type="submit">Register</button>
          <p>Already a member? <Link to="/login" className='underline hover:text-rose-600' >Login</Link></p>

        </form>


      </div>

    </div>
  )
}

export default RegisterForm
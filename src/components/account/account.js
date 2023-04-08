import React, { useContext } from 'react'
import { UserContext } from '../useContext/userContext'
import { Link, NavLink, Navigate, useParams } from 'react-router-dom'
import style from "./account.module.css"
import axios from 'axios'
import { useState } from 'react'
import PlacesPage from './places/placesPage'
import { BsPerson, BsBuildingCheck } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import AccountNav from './places/placesComponent/accountNav'
function Account() {
  let { user, ready, setuser } = useContext(UserContext)

  let { subpage } = useParams("subpage")
  const [redirect, setredirect] = useState(null);
  if (subpage === undefined) {
    subpage = "profile"
  }
  let logout = async () => {
    await axios.post("/logout")
    setredirect("/")
    setuser(null)
  }

  // if(!ready)
  // {
  //   return "loading ...."
  // }

  // if(ready && !user)
  // {
  //   return <Navigate to={"/login"} />
  // }
  if (redirect) {
    return <Navigate to={redirect} />
  }
  return (
    <div>

      <AccountNav />

      <div>
        {subpage === "profile" && (
          <div className="flex justify-center">
            <div className="flex flex-col justify-center">
              <h4 className='inline my-3'>logged in as {user?.name} ({user.email})</h4>
              <button className='w-44 ml-14 my-8 bg-primary text-white' onClick={logout} >LogOut</button>
            </div>
          </div>
        )}
      </div>



      <div>
        {
          subpage === "places" && (

            <div>

              <PlacesPage />
            </div>

          )
        }
      </div>


    </div>
  )
}

export default Account
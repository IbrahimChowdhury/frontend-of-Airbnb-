import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsPerson,BsBuildingCheck } from "react-icons/bs";

import { GoThreeBars } from "react-icons/go";

function AccountNav() {

    let {pathname}=useLocation()
    let activeNav=(activeName)=>{
        if(pathname===activeName)
        {
          return  " flex items-center gap-2 px-3 py-2 rounded-2xl bg-primary text-white shadow-md shadow-gray-600"
        }
        else
        {
            return " shadow-md shadow-black border-2 flex items-center gap-2 px-3 py-2 rounded-2xl "
        }
    }   
    

  return (
    <div>
          <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
            <Link className={activeNav("/account")}  to={"/account"} > <span><BsPerson/> </span> profile</Link>
            <Link className={activeNav("/account/booking")} to={"/account/booking"} > <span><GoThreeBars/></span> booking</Link>
            <Link className={activeNav("/account/places")} to={"/account/places"} > <BsBuildingCheck/> my accomodation</Link>
        </nav>

    </div>
  )
}

export default AccountNav
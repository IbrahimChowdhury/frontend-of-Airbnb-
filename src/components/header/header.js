import React, { useEffect, useState } from 'react'
import { useContext } from 'react';

import { FaBeer, FaAirbnb } from 'react-icons/fa';
import { BsSearch, BsPersonFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { GoThreeBars } from "react-icons/go";
import { IoPersonCircleSharp } from "react-icons/io5";


// className={style["classname"]}
import style from "./header.module.css"
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../useContext/userContext';
import axios from 'axios';
import SearchPlaces from '../account/places/placesComponent/searchPlaces';
function Header() {

  let { user, searchPlaces, setsearchPlaces } = useContext(UserContext)





  return (
    <div className=''>
      <header className={style['heading']} >

        <div className="">
          <Link to={"/"} className='flex items-center xs:text-sm gap-1'>
            <FaAirbnb className="text-2xl xs:text-sm" />
            <span className='sm:text-xl xs:text-sm'>airbnb</span>
          </Link>
        </div>

        <SearchPlaces/>       


        <Link to={user ? "/account" : "/login"} className="flex items-center xs:text-xs gap-2 xs:gap-1 border border-gray-300 rounded-full py-2 px-4 " >

          <GoThreeBars className=" xs:text-xs text-xl" />
          <IoPersonCircleSharp className=" xs:text-xs text-2xl" />

          {
            !!user && (
              <div className="">
                {user.name}

              </div>
            )
          }


        </Link>



      </header>
    </div>
  )
}

export default Header
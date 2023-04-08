import React, { useEffect, useState } from 'react'
import { useContext } from 'react';

import { FaBeer, FaAirbnb } from 'react-icons/fa';
import { BsSearch, BsPersonFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { GoThreeBars } from "react-icons/go";
import { IoPersonCircleSharp } from "react-icons/io5";


// className={style["classname"]}
import { Link, Navigate } from 'react-router-dom';

import axios from 'axios';
import { UserContext } from '../../../useContext/userContext';

function SearchPlaces() {
    let { user, searchPlaces, setsearchPlaces } = useContext(UserContext)


    
  const [isSearch, setisSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredSearch, setfilteredSearch] = useState([]);
  const [searchResult, setsearchResult] = useState([]);
  const [allPlaces, setallPlaces] = useState([]);
  const [changedName, setchangedName] = useState("");

  useEffect(() => {
    axios.get("/allPlaces").then((res) => {
      let { data } = res
      setallPlaces(data)
      setfilteredSearch(data)
    })
  }, []);


  let handleChangeSearch = (e) => {
    let searchPlace = e.target.value
    let newPlaces = allPlaces.filter((nwplace) => {
      let allNewPlace = nwplace.title.toLowerCase()
      return allNewPlace.startsWith(searchPlace)
    })
    setsearchResult(newPlaces)
  }

  if (searchResult.length > 0) {
    setsearchPlaces(searchResult)
  }
  else {
    setsearchPlaces(allPlaces)
  }


  return (
    <div>
         {isSearch == false && (
          <div className="flex gap-2 xs:text-xs xs:gap-1 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
            <a  >Anywhere</a>
            <div className="border-l border-gray-300"></div>
            <a href="" >Any week</a>
            <div className="border-l border-gray-300"></div>

            <a href=""  >Add guest</a>
            <span onClick={() => setisSearch(true)} className='cursor-pointer mt-1'><BsSearch className="text-xl w-8 " />
            </span>
          </div>
        )}
        {
          isSearch == true && (
            <div className='flex items-center gap-2'>
              <input type="text" name="" onChange={handleChangeSearch} id="" />
              <span onClick={()=>setisSearch(false)} className='bg-gray-300 p-2 rounded-2xl hover:bg-gray-500 hover:text-white shadow hover:shadow-md  hover:cursor-pointer'>
                <RxCross1 />
              </span>
            </div>
          )
        }
    </div>
  )
}

export default SearchPlaces
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../useContext/userContext';

function IndexPage() {
   let {searchPlaces}=useContext(UserContext)
  
  return (
    <div>
        <div className='grid grid-cols-3 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-x-7 gap-y-8 m-10 '>
            {
                searchPlaces.length>0 && searchPlaces.map(place=>(
                    <Link to={"/places/"+place._id} key={place._id} className=''>
                        <div className='aspect-square flex'>
                            <img className='rounded-2xl ' src={"https://airbnbhotels.up.railway.app/upload/"+place.photos[0]} alt="" />
                        </div>
                        <div className=' m-2 '>
                            <h2 className='font-bold  '>{place.address}</h2>
                            <h1 className='text-sm '>{place.title}</h1>
                            <h1 className='mt-1'>
                                <span className='font-bold'>${place.price}</span> 
                                <span className='pl-3'>per Night</span>
                            </h1>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default IndexPage
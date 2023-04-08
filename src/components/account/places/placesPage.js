import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { AiOutlinePlus } from "react-icons/ai";
import FormPlaces from "./placesComponent/placeForm"
import style from "./places.module.css"
import axios from 'axios';
import AccountNav from './placesComponent/accountNav';
import PlaceImg from './placesComponent/placeImg';
export default function PlacesPage() {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios.get("/users-places").then(({ data }) => {
            setPlaces(data)
        })
    }, []);

    



    return (
        <div>


            <AccountNav/>

        
                    <div className={style["logoDiv"]}>
                        <Link className="flex bg-primary p-2 rounded-2xl text-white items-center gap-2 px-4 mt-5 shadow-md  shadow-black" to={"/account/places/new"} > <span><AiOutlinePlus /></span>Add New Page</Link>
                    </div>
                
            {
                places.length > 0 && places.map(place => (
                    <div className=' lg:flex lg:justify-center'>
                    <Link to={"/places/"+place._id}  className='bg-gray-300 flex px-5 py-2 mt-5 mx-4 rounded-2xl items-center lg:w-1/2 hover:bg-slate-500 hover:text-white'>
                        <div className='w-36  lg:w-48  flex  '>
                           <PlaceImg place={place}/>
                        </div>
                        <div className='ml-6 w-full text-center'>
                            <h1 className='text-2xl'>{place.title}</h1>
                            <p className='text-sm'>{place.description}</p>
                        </div>
                        <div className='flex  flex-col gap-2'>
                            <Link to={"/account/places/"+place._id} className='bg-gray-400 px-3 py-1 rounded-xl hover:bg-slate-900 hover:text-white '>Edit</Link>
                            <Link to={"/account/places/delete/"+place._id}  className='bg-gray-400 px-3 py-1 rounded-xl  hover:bg-slate-900 hover:text-white '>Delete</Link>
                        </div>
                    </Link>
                    </div>
                ))
            }

        </div>
    )
}

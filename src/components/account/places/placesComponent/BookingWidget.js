import axios from 'axios';
import { differenceInCalendarDays } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react'
import { FaUserAstronaut } from 'react-icons/fa'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../../useContext/userContext';

function BookingWidget({ place }) {

    const [checkIn, setcheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [maxGuest, setmaxGuest] = useState("");
    const [name, setname] = useState("");
    const [mobileNo, setmobileNo] = useState("");
    const [redirect, setredirect] = useState("");
    let numberOfNight
    if (checkIn && checkOut) {
        numberOfNight = differenceInCalendarDays(new Date(checkOut), new Date(checkIn))
    }


    let {user}=useContext(UserContext)
   useEffect(() => {
        if(user)
        {
            return setname(user.name)
        }
   }, [user]);


   let allInfo={
    place:place._id,
    checkIn,
    checkOut,
    maxGuest,
    name,
    mobileNo,
    price:numberOfNight*place.price
   }

    let bookingPlace =async()=>{
      let response= await axios.post("/bookings",allInfo)
      let bookingId=response.data._id
        setredirect(`/account/booking/${bookingId}`)
    }
    if(redirect){
      return  <Navigate to={redirect} />
    }



    return (
        <div>
            <div className='flex flex-col items-center bg-white p-5 rounded-lg'>
                <h1 className='text-xl font-bold'>Price : ${place.price}/per Night</h1>

                <div className='w-full  border-2 rounded-xl my-5    '>
                    <div className='flex'>
                        <div className='font-bold px-3 py-4'>
                            <label htmlFor="checkin">Check-In : </label>
                            <input type="date" value={checkIn} onChange={(e) => setcheckIn(e.target.value)} name="checkin" id="checkin" />
                        </div>
                        <div className='font-bold px-3 py-4 border-l-2 '>
                            <label htmlFor="checkout">Check-Out : </label>
                            <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} name="checkout" id="checkout" />
                        </div>
                    </div>

                    <div className='font-bold border-t-2 px-3 py-4'>
                        <label htmlFor="guest">Number of Guest  : </label>
                        <input type="Number" name="guest" id="guest" value={maxGuest} onChange={(e) => setmaxGuest(e.target.value)} />
                    </div>
                    {
                        numberOfNight > 0 && (
                            <div>
                                <div className='font-bold border-t-2 px-3 py-4'>
                                    <label htmlFor="name">Name : </label>
                                    <input type="text" name="name" id="name" value={name} onChange={(e) => setname(e.target.value)} />
                                </div>
                                <div className='font-bold border-t-2 px-3 py-4'>
                                    <label htmlFor="mobileNo">Mobile Number : </label>
                                    <input type="tel" name="mobileNo" id="mobileNo" value={mobileNo} onChange={(e) => setmobileNo(e.target.value)} />
                                </div>
                                
                            </div>
                        )
                    }

                </div>

                <div className='w-full'>
                    <button onClick={bookingPlace} className='primary'>Book Now
                        {numberOfNight > 0 && (
                            <span> ${numberOfNight * place.price}</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookingWidget
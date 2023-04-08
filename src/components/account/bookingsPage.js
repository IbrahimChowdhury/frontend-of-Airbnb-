import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AccountNav from './places/placesComponent/accountNav';
import PlaceImg from './places/placesComponent/placeImg';
import { differenceInCalendarDays, format } from 'date-fns';
import { AiOutlineCalendar, AiOutlineCreditCard, IconName } from "react-icons/ai";
import { MdOutlineDeleteOutline, MdOutlineNightlife, MdOutlineNightlight, MdOutlineNightsStay, MdOutlinePriceChange } from "react-icons/md";
import { Link } from 'react-router-dom';
import BookingDate from './places/placesComponent/bookingDate';

function BookingsPage() {

  const [usersBookingPlaces, setusersBookingPlaces] = useState([]);
  const [place, setPlace] = useState("");

  useEffect(() => {

    axios.get("/bookings").then((res) => (
      setusersBookingPlaces(res.data)

    ))

  }, []);
  console.log(usersBookingPlaces)


  return (
    <div>
      <AccountNav />
      <div className='lg:flex lg:items-center lg:flex-col'>
        {usersBookingPlaces?.length > 0 && usersBookingPlaces.map(bookingPlace => (
          <Link to={"/account/booking/" + bookingPlace._id} className='flex bg-gray-200 over lg:w-3/6 hover:bg-gray-300   gap-10 m-5 rounded-xl overflow-hidden '>
            <div className='w-32  '>
              {
                bookingPlace?.place && (

                  <PlaceImg place={bookingPlace?.place} />
                )
              }
            </div>
            <div>
              <div className='' >
                <h1 className='text-lg xs:text-sm  font-semi mt-2'>{bookingPlace?.place?.title}</h1>

                <div className=''>

                  <BookingDate bookingPlace={bookingPlace} />
                </div>
              </div>


              <div className='flex items-center text-xl gap-2 mt-2'>

                <AiOutlineCreditCard className='text-2xl' /> Total price:  ${bookingPlace.price}
              </div>
            </div>
            <div className='flex'>
              <Link to={"/account/booking/delete/" + bookingPlace._id} className=' mt-12 bg-gray-400 h-8 px-1 py-1 hover:bg-slate-500 rounded-lg hover:text-white lg:ml-28'><MdOutlineDeleteOutline className='text-2xl' /></Link>
            </div>
          </Link>
        ))}
      </div>


    </div>
  )
}

export default BookingsPage
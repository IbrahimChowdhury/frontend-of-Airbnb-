import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GoogleAddressbooking from './places/placesComponent/googleAddressPlace';
import PlaceGellary from './places/placesComponent/placeGellary';
import { MdOutlineNightsStay } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';
import { differenceInCalendarDays, format } from 'date-fns';
import BookingDate from './places/placesComponent/bookingDate';
// import { differenceInCalendarDays, format } from 'date-fns';
// import { AiOutlineCalendar, AiOutlineCreditCard, IconName } from "react-icons/ai";
// import { MdOutlineNightlife, MdOutlineNightlight, MdOutlineNightsStay, MdOutlinePriceChange } from "react-icons/md";


function BookingPage() {
  const [loading, setLoading] = useState(true);
  const [booking, setbooking] = useState([]);
  const [place, setplace] = useState("");
  let { id } = useParams()
  useEffect(() => {
    axios.get("/bookings").then(response => {
      let bookingPlace = response.data.find(({ _id }) => _id === id)
      if (bookingPlace) {
        setbooking(bookingPlace)
        setplace(bookingPlace.place)
        setLoading(false)
      }
    })
  }, [id]);
  console.log(booking)
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mt-9 '>
      {
        booking && (
          <div className='px-4  lg:px-10'>
            <div className='text-3xl'>
              {booking?.place?.title}
            </div>
            <div className='mt-3'>
              <GoogleAddressbooking >{booking?.place?.address}</GoogleAddressbooking>
            </div>
            <div className='flex justify-between lg:justify-around bg-gray-200 p-5 mt-5 rounded-2xl'>
              <div className='py-3'>
                <h1>Your booking Information:  </h1>
                <h1>
                  <BookingDate bookingPlace={booking} />
                </h1>
              </div>
              <div className=' bg-primary p-4 rounded-2xl text-white '>
                  <h1>Total price:</h1>
                  <h1 className='text-2xl text-white'>$ {booking.price}</h1>
              </div>
            </div>
            <div>
              <PlaceGellary place={place} />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default BookingPage
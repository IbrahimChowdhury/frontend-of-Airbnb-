import { differenceInCalendarDays, format } from 'date-fns'
import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { MdOutlineNightsStay } from 'react-icons/md'

function BookingDate({bookingPlace}) {
  return (
    <div>
           <div className=' flex gap-2   xs:flex-col xs:text-xs text-gray-600 mt-1 text-md w-full'>
                <div className='flex items-center gap-1'>
                  <MdOutlineNightsStay className='text-xl' />
                  {differenceInCalendarDays(new Date(bookingPlace.checkOut), new Date(bookingPlace.checkIn))} nights :
                </div>
                <div className='flex gap-2 xs:gap-1'>
                    
                <h1 className='flex gap-1 items-center'>
                  <AiOutlineCalendar /> {format(new Date(bookingPlace.checkIn), "yyyy-MM-dd")}
                </h1>
                &rarr;
                <h1 className='flex gap-1 items-center'>
                  <AiOutlineCalendar /> {format(new Date(bookingPlace.checkOut), "yyyy-MM-dd")}
                </h1>
                </div>
              </div>
    </div>
  )
}

export default BookingDate
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BookingWidget from './placesComponent/BookingWidget';
import PlaceGellary from './placesComponent/placeGellary';
import GoogleAddressPlace from './placesComponent/googleAddressPlace';

function PlacePage() {

  let { id } = useParams()
  const [place, setplace] = useState("");
  useEffect(() => {

    axios.get(`/allplaces/${id}`).then((res) => {
      let { data } = res
      setplace(data)
    })

  }, [id]);
  


  return (
    <div className='bg-gray-100 pt-8 px-3'>
      <div>
        <h1 className='text-3xl '>{place.title}</h1>
        
      <GoogleAddressPlace>{place.address}</GoogleAddressPlace> 
       <PlaceGellary place={place}  />

      </div>

      <div className='grid grid-col-1 md:grid-cols-[2fr_1fr] mt-14'>
        <div>
          <div className=''>
            <h1 className='text-2xl font-bold'>Description</h1>
            <p className='text-sm pr-4 mt-1'>{place.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nostrum eaque quisquam accusantium iste corrupti molestiae dignissimos distinctio ab labore pariatur culpa amet aut aperiam perspiciatis illo, nam error optio. Praesentium quo adipisci quisquam? Esse nulla provident voluptas cumque sed delectus culpa harum quia eius? Sunt illum aliquam velit nam.</p>
          </div>
          <div className='mt-6'>
            Check-In : {place.checkIn} <br />
            Check-Out : {place.checkOut} <br />
            Max Number of Guest : {place.maxGuests} <br />
          </div>
        </div>
        <div>
          <BookingWidget place={place} />
        </div>


      </div>

      <div className='bg-white -m-3 p-4 mt-6'>
          <h1 className='text-2xl font-bold' >Extra Info</h1>
        <p>{place.extraInfo} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, cum tenetur? Repellendus nesciunt quos placeat necessitatibus eligendi iste tempora temporibus esse magnam laboriosam voluptas ut possimus asperiores dicta molestias ad repellat, nam doloribus commodi labore officiis nihil blanditiis iure. Voluptatum aut, in aspernatur libero at iusto neque reiciendis blanditiis ratione cupiditate. Repellendus voluptatum dolores quo cumque, accusantium non aliquid debitis dolorum temporibus iusto consectetur commodi aliquam tenetur, veniam quibusdam! Expedita odit veritatis fugiat, vero, atque illum reiciendis, a delectus architecto quibusdam sed voluptates id? Amet eius laborum aut ad explicabo fugiat aliquid obcaecati autem, nihil cum tenetur id. Ratione, inventore.</p>
      </div>



    </div>
  )
}

export default PlacePage
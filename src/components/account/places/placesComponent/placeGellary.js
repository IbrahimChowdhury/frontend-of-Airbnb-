import React, { useState } from 'react'
import { TbGridDots } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";

function PlaceGellary({place}) {
    const [showPhotos, setshowPhotos] = useState(false);
    if (showPhotos) {
        return (
          <div className='absolute top-0  bg-white min-h-screen min-w-full '>
            <div className='grid gap-4 p-8 bg-black'>
              <div className='w-full flex justify-end'>
                <span className=' fixed top-2 border-2 w-8 bg-white  flex justify-center p-1 rounded-md   active:bg-slate-600 active:text-slate-100' onClick={() => setshowPhotos(false)}><AiOutlineClose /></span>
              </div>
              {place?.photos?.length > 0 && place?.photos?.map(photo => (
    
                <div>
                  <img src={"https://airbnbhotels.up.railway.app/upload/" + photo} alt="" />
                </div>
    
              ))}
            </div>
          </div>
        )
      }


  return (
    <div>
           <div className='relative top-5 mb-7'>
          <div className='grid grid-cols-[2fr_1fr] gap-2'>
            <div>
              {place?.photos?.[0] && (
                <img onClick={()=>setshowPhotos(true)} className='cursor-pointer aspect-square rounded-s-2xl' src={"https://airbnbhotels.up.railway.app/upload/" + place.photos[1]} alt="" />
              )}
            </div>
            <div className=' grid '>
              {place?.photos?.[1] && (
                <img onClick={()=>setshowPhotos(true)} className='cursor-pointer aspect-square' src={"https://airbnbhotels.up.railway.app/upload/" + place.photos[2]} alt="" />
              )}

              <div className='overflow-hidden'>

                {place?.photos?.[2] && (
                  <img onClick={()=>setshowPhotos(true)} className='cursor-pointer aspect-square relative top-2' src={"https://airbnbhotels.up.railway.app/upload/" + place.photos[0]} alt="" />
                )}
              </div>

            </div>
          </div>
          <button onClick={() => setshowPhotos(true)} className='flex gap-1  items-center absolute text-sm bg-slate-200 px-2 bottom-2 right-2  '> < TbGridDots className='mb-0.5' /> Show all photos</button>
        </div >
    </div>
  )
}

export default PlaceGellary
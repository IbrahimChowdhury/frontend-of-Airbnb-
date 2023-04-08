import React from 'react'

function PlaceImg({ place }) {
    return (
        <div>
            {
                place?.photos?.length > 0 && (

                    <img className='aspect-square rounded-2xl' src={"https://airbnbhotels.up.railway.app/upload/" + place.photos[0]} />
                )
            }
        </div>
    )
}

export default PlaceImg
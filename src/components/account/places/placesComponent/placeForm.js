import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'

import AccountNav from './accountNav';
import Perks from "./perks"

import ImageUpload from './imageUpload';
import axios, { Axios } from 'axios';

export default function () {
    const [title, settitle] = useState("");
    const [address, setaddress] = useState("");
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [photoLink, setPhotoLink] = useState("");
    const [description, setDescription] = useState("");
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckout] = useState("");
    const [maxGuest, setMaxGuest] = useState(1);
    const [price, setprice] = useState("");

    const [redirect, setredirect] = useState(false);
    let { id } = useParams()
    

    useEffect(() => {
        if (!id) {
            return
        }
        else {
            axios.get("/account/places/" + id).then(response => {
                let { data } = response
                settitle(data.title)
                setaddress(data.address)
                setAddedPhotos(data.photos)
                setDescription(data.description)
                setExtraInfo(data.extraInfo)
                setCheckIn(data.checkIn)
                setCheckout(data.checkOut)
                setMaxGuest(data.maxGuest)
                setPerks(data.perks)
                setprice(data.price)
            })
        }
    }, [id]);





    let allInfo = {
        title, address, addedPhotos,
        description, perks, extraInfo,
        checkIn, checkOut, maxGuest,price
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        if (id) {
            // if id then update 
            await axios.put("/places", { id, ...allInfo })
            setredirect(true)

        }
        else {
            // if not id then create        
            await axios.post("/places", {
                ...allInfo
            })
            setredirect(true)
        }



    }

    if (redirect) {
        return <Navigate to={"/account/places"} />
    }



    return (
        <div>

            <AccountNav />
            <form className='flex justify-center flex-col w-full p-8' onSubmit={handleSubmit}>
                <div>
                    <h1 className='text-xl mt-4 mb-2'>Title</h1>
                    <input type="text" placeholder='title' value={title} onChange={e => settitle(e.target.value)} />
                </div>
                <div>
                    <h1 className='text-xl mt-4 mb-2'>Address</h1>
                    <input type="text" placeholder='Address' value={address} onChange={e => setaddress(e.target.value)} />
                </div>

                <ImageUpload addedPhotos={addedPhotos} setAddedPhotos={setAddedPhotos} photoLink={photoLink} setPhotoLink={setPhotoLink} />
                <div>
                    <h1 className='text-xl mt-4 mb-2'>Description</h1>
                    <p className='text-sm'>description of the place</p>
                    <textarea className='h-24' value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <div className='mt-4'>
                    <h1 className='text-xl mt-4 mb-1'>Perks</h1>
                    <p className='text-sm'>Select all perks</p>
                </div>

                <Perks selected={perks} onChange={setPerks} />


                <div className='mt-4'>
                    <h1 className='text-xl mt-4 mb-2'>Extra Info</h1>
                    <p className='text-sm'>Houses rules, etc</p>
                    <textarea value={extraInfo} onChange={e => setExtraInfo(e.target.value)} />
                </div>

                <div>
                    <h1 className='text-xl mt-4 mb-2'>Check in & out time </h1>
                    <p className='text-sm'>add check in and check out time and also add max guest </p>
                    <div className='grid grid-cols-3 mt-5 gap-4'>

                        <div>
                            <h2>Check in time</h2>
                            <input type="text" name='checkIn' placeholder='14:00' value={checkIn} onChange={e => setCheckIn(e.target.value)} />
                        </div>
                        <div>
                            <h2>Check out time</h2>
                            <input type="text" placeholder=''
                                value={checkOut} name='checkOut' onChange={e => setCheckout(e.target.value)} />
                        </div>
                        <div>
                            <h2>max guest</h2>
                            <input type="number" placeholder=''
                                value={maxGuest} name='maxGuest' onChange={e => setMaxGuest(e.target.value)} />
                        </div>
                    </div>

                </div>
                <div>
                    <h1 className='text-2xl mt-6 mb-2'>price</h1>
                    <input type="number" placeholder='1200$'
                        value={price} name='price' onChange={e => setprice(e.target.value)} />
                </div>

                <div>
                    <button className='primary my-6 shadow-md active:shadow-black' type="submit">Save</button>
                </div>

            </form>

        </div>
    )
}

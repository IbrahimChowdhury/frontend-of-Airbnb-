import React from 'react'
import { FaParking } from "react-icons/fa";
import { FcPrivacy } from "react-icons/fc";
import { MdPets } from "react-icons/md";
import {  IoMdRadio } from "react-icons/io";
import {  BsTvFill, BsWifi } from 'react-icons/bs';

function perks({selected, onChange}) {

    let handleCheck=(e)=>{
       
       let check=e.target.checked
       let name=e.target.name
      if(check)
      {
        onChange([...selected,name])
      
      }
      else{
        onChange(selected.filter(item=>item!==name))
      }
    }
    

    return (
        <div>
            <div className='grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6  ' >
                <label className='border p-4 gap flex rounded-xl gap-2 justify-center cursor-pointer'>
                    <input type="checkbox" checked={selected.includes("wifi")}  name="wifi" id="" onChange={handleCheck} />
                    <BsWifi className='relative top-1' />
                    <span>Wifi</span>
                </label>
                <label className='border p-4 gap flex rounded-xl gap-2 justify-center cursor-pointer'>
                    <input type="checkbox" checked={selected.includes("parking")} name="parking" id="" onChange={handleCheck} />
                    <FaParking className='relative top-1' />
                    <span>Free parking spot</span>
                </label>
                <label className='border p-4 gap flex rounded-xl gap-2 justify-center cursor-pointer'>
                    <input type="checkbox" name="TV" id="" checked={selected.includes("TV")} onChange={handleCheck} />
                    <BsTvFill className='relative top-1' />
                    <span>TV</span>
                </label>
                <label className='border p-4 gap flex rounded-xl gap-2 justify-center cursor-pointer'>
                    <input type="checkbox" name="pet" id="" checked={selected.includes("pet")} onChange={handleCheck} />
                    <MdPets className='relative top-1' />
                    <span>pets</span>
                </label>
                <label className='border p-4 gap flex rounded-xl gap-2 justify-center cursor-pointer'>
                    <input type="checkbox" name="private" id="" checked={selected.includes("private")} onChange={handleCheck} />
                    <FcPrivacy className='relative top-1' />
                    <span>Private entrence</span>
                </label>
                <label className='border p-4 gap flex rounded-xl gap-2 justify-center cursor-pointer'>
                    <input type="checkbox" name="radio" id=""  checked={selected.includes("radio")} onChange={handleCheck} />
                    <IoMdRadio className='relative top-1' />
                    <span>Radio</span>
                </label>
            </div>

        </div>
    )
}

export default perks
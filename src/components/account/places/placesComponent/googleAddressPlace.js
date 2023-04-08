import React from 'react'
import { BiMap, BiMapPin } from "react-icons/bi";

function GoogleAddressPlace({children}) {
  return (
    <div >
<a target='_blank' className='underline flex items-center gap-1 font-semibold ' href={"https://www.google.com/maps?q=" + children}> <BiMap className='text-xl'/>  {children}</a>
    </div>
  )
}

export default GoogleAddressPlace
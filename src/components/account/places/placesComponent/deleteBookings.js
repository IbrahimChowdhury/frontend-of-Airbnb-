import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';

function DeleteBookings() {
    let { id } = useParams();

    const [redirect, setRedirect] = useState(false);
  
    useEffect(() => {
      axios.delete("/deleteBookings/" + id)
       setRedirect(true)
    }, []);
  
    console.log(redirect)
    if (redirect) {
      return <Navigate to={"/account/booking"} />;
    }
  
   
  return (
    <div></div>
  )
}

export default DeleteBookings
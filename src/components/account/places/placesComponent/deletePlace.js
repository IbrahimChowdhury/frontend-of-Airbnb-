import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams, useHistory, useNavigate } from "react-router-dom";

function DeletePlace() {
    let { id } = useParams();

    const [redirect, setRedirect] = useState(false);
  
    useEffect(() => {
      axios.delete("/deleteUserPlace/" + id)
       setRedirect(true)
    }, []);
  
    console.log(redirect)
    if (redirect) {
      return <Navigate to={"/account/places"} />;
    }
  
    return <div></div>;
  }
  
  export default DeletePlace;
  
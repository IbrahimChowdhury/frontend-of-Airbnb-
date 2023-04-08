import axios from "axios";
import React, { useEffect, useState } from "react";
import {data} from "autoprefixer"

export let UserContext=React.createContext({})

export let UserContextprovider=({children})=>{
    const [user, setuser] = useState("");
    const [ready, setready] = useState(false);
    const [searchPlaces, setsearchPlaces] = useState([]);
    useEffect(() => {
       if(!user)
       {
        axios.get("/profile").then(({data})=>{
            setuser(data)
            setready(true)
           
        })
       }
    }, []);
   
    return(
        <UserContext.Provider value={{user,setuser,ready,setsearchPlaces,searchPlaces}}>
            {children}
        </UserContext.Provider>
    )
}
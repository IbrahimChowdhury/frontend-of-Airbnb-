import React from 'react'
import { GrAdd } from "react-icons/gr";
import { MdOutlineDeleteOutline, MdDeleteOutline, MdDeleteForever } from "react-icons/md";
import { AiFillStar, AiOutlineStar, IconName } from "react-icons/ai";
import axios from 'axios';
function imageUpload({addedPhotos,setAddedPhotos,photoLink,setPhotoLink}) {

    let uploadPhotoByLink = async (e) => {
        e.preventDefault()

        let { data: fileName } = await axios.post("/uploadByLink", { link: photoLink })
        setAddedPhotos(prev => {
            return [...prev, fileName]
        })
    }

let uploadImage = async (e) => {
        let file = e.target.files
        const data = new FormData();
        data.append('photo', file[0]); // 'file' is the key to access the file in the server

        await axios.post('/upload', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                let { data: fileName } = response
                setAddedPhotos(prev => {
                    return [...prev, fileName]
                })

            })
            .catch(error => {
                console.log(error);
            });

    }
  let deletePhoto=(fileName)=>{
    setAddedPhotos([...addedPhotos.filter(item=>item!==fileName)])
    }
    let setPhotoAsMain=(fileName)=>{
        let newPtos=addedPhotos.filter(item=>item!==fileName)
        setAddedPhotos([fileName,...newPtos])
    }


    return (
        <div>
            <div>
                <h1 className='text-xl mt-4 mb-2'>Photo</h1>
                <div className='flex'>
                    <input type="text" placeholder='add photo using a link ....jpg' name='addedPhotos' value={photoLink} onChange={e => setPhotoLink(e.target.value)} />
                    <button onClick={uploadPhotoByLink} className='w-40 hover:bg-slate-200 '  >add photo</button>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-10 mt-3 gap-2'>
                    {
                        addedPhotos.length > 0 && addedPhotos.map(link => (
                            <div className='flex h-32  ' key={link}>
                                <img className='rounded-2xl' src={"https://airbnbhotels.up.railway.app/upload/" + link} alt="" />
                                <span onClick={() => deletePhoto(link)} className='relative h-8 right-7 top-20 rounded-xl bg-opacity-50 cursor-pointer bg-black flex justify-center items-center mr-2 '>
                                    <MdDeleteOutline className='text-xl text-white ' />
                                </span>
                                {link === addedPhotos[0] && (

                                    <span  className='relative h-8 right-52 top-4 p-1 lg:right-36 rounded-xl bg-opacity-50 cursor-pointer bg-black flex justify-center items-center mr-2 '>
                                        <AiFillStar className='text-xl text-white  ' />
                                    </span>
                                )}
                                {link !== addedPhotos[0] && (
                                    <span onClick={() => setPhotoAsMain(link)} className='relative h-8 right-52 top-4 lg:right-36 p-1 rounded-xl bg-opacity-50 cursor-pointer bg-black flex justify-center items-center mr-2 '>
                                        <AiOutlineStar className='text-xl text-white  ' />
                                    </span>
                                )}

                            </div>
                        ))
                    }
                    <div>

                        <label className='w-44 h-24 flex justify-center items-center gap-3 pr-3 mt-4 text- xl border-2 rounded-2xl'> <input type="file" className='hidden' onChange={uploadImage} /><GrAdd /> Upolad</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default imageUpload
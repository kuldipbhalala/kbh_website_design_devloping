import React, { useContext, useEffect, useState } from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Mywebcontextcall from '../mywebcontext/Mywebcontext'
import { Editform } from '../components/Editform'

const Profile = () => {

  const { formData, setFormData, handleChange, setOpen, open, isEditing, setIsEditing } = useContext(Mywebcontextcall)


  const handleEditform = () => {
    setOpen(true)
    setIsEditing(true)
  }

  return (
    <>

      <div className='container mx-auto'>
        {
          !isEditing ? (

            <div className='flex mt-10 justify-center items-center '>
              <div className="">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-green-500">
                  <img
                    src={formData?.Image}
                    alt="User"
                    className="w-full h-full object-cover"
                  />

                </div>

                <p className="text-gray-600">
                  Firstname: {formData?.firstname}
                </p>
                <p className=" text-gray-600"> Lastname : {formData?.lastname}</p>
                <p onChange={handleChange} className="text-gray-600">
                  Department : {formData?.department}
                </p>
                <p className="text-gray-600">
                  Phone Number : {formData?.phone}
                </p>
                <p className="text-gray-600">Location :{formData?.location}</p>
                <button className='mt-6 bg-green-500 text-white py-3 px-6 rounded-lg' onClick={handleEditform}>Edit Details</button>

              </div>
            </div>

          ) :

            <Editform />
        }




      </div>
    </>
  )
}

export default Profile
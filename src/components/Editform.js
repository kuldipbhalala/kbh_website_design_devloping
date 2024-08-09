import React, { useContext, useEffect, useState } from 'react'
import Mywebcontextcall from '../mywebcontext/Mywebcontext'

export const Editform = () => {
  const { open, setOpen, setFormData, formData, handleChange, isEditing, setIsEditing } = useContext(Mywebcontextcall)


  const handleCloseForm = () => {
    setOpen(false);
  }


  const handleformsubmit = () => {
    localStorage.setItem("userFormData", JSON.stringify(formData));


    setIsEditing(!isEditing)
  }

  const handleImageChange = (e) => {

    // const files = Array.from(e.target.files);
    // const newGallery = files.map(file => ({
    //   url: URL.createObjectURL(file),
    //   file: file
    // }));

    // setFormData(prev => ({ ...prev, gallery: newGallery }));

  }

  return (

    <div open={open} onClose={setOpen}>
      <div className="border-b border-gray-900/10 pb-10">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label class="block mb-2 text-sm font-medium" for="file_input">Upload file</label>
            <input onChange={handleImageChange}
              class="block w-full text-sm p-1 text-gray-900 border border-gray-300  cursor-pointer bg-gray-50  dark:bg-white placeholder-gray-400" id="file_input" type="file" />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2">
              <input
                name="firstname"
                type="text"
                value={formData.firstname}
                onChange={handleChange}
                className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2">
              <input
                name="lastname"
                type="text"

                value={formData.lastname}
                onChange={handleChange}
                className="block  w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>



          <div className="sm:col-span-3">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
              Department
            </label>
            <div className="mt-2">
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div className="col-span-full">


            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
              Enter Email
            </label>
            <div className="mt-2">
              <input
                name="email"
                onChange={handleChange}
                value={formData.email}
                type="text"
                autoComplete="street-address"
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
              Location
            </label>
            <div className="mt-2">
              <input
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                autoComplete="address-level2"
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
              Phone
            </label>
            <div className="mt-2">
              <input
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="address-level2"
                className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>


        </div>
      </div>

      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          We'll always let you know about important changes, but you pick what else you want to hear about.
        </p>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">

        <button onClick={handleCloseForm} type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>


      </div>

      <button
        onClick={handleformsubmit} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Save changes
      </button>



    </div >


  )
}

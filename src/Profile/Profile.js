import React, { useState } from 'react'
import { FaImages } from "react-icons/fa6";


const Profile = () => {

  const [formData , setFormData] = useState([{
    lastName : "helloworld",
    emali : "helloworld@gamil.com",
    image : '123.jpg',
  }])
  
  console.log(formData.name , "basjdsjadnjsan");


  // const handlesubmit = (e) => {
  //   e.preventDefault()
  // }

  return (
    <>
    <label>LastName
      <input type="text" value={formData.lastName}  onChange={e=>{setFormData({...formData, lastName:e.target.value});}} />
    </label>

    </>
  )
}

export default Profile
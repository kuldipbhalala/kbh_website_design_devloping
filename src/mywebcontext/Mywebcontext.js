import React, { createContext, useEffect, useState } from 'react'

const Mywebcontextcall = createContext();

export const Mywebcontext = ({ children }) => {

  const [cartbox, setCartbox] = useState([]);

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const cartItems = localStorage.getItem('cartbox') || "[]";
    const storedItems = JSON.parse(cartItems);
    setCartbox(storedItems);
  }, []);


  const [formData, setFormData] = useState({

    firstname: 'John',
    lastname: 'Doe',
    department: 'New York',
    email: 'John@out.look',
    location: 'Brooklyn',
    phone: '9999-******',
    Image: 'profile.svg'

  })

  const temp = JSON.parse(localStorage.getItem("userFormData") || "{}");

  useEffect(() => {

    console.log(temp, "tem");
    setFormData(temp)

    // if (temp?.firstname) {
    //   setFormData(temp)
    // }

  }, [])


  const [open, setOpen] = useState(true)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  return (
    <div>
      <Mywebcontextcall.Provider value={{ cartbox, setCartbox, formData, setFormData, isEditing, setIsEditing, handleChange, open, setOpen }}>
        {children}
      </Mywebcontextcall.Provider>
    </div>
  )
}

export default Mywebcontextcall
import React, { createContext, useEffect, useState } from 'react'

const Mywebcontextcall = createContext();


export const Mywebcontext = ({ children }) => {

  const [cartbox, setCartbox] = useState([]);

  useEffect(() => {
    const cartItems = localStorage.getItem('cartbox') || "[]";
    const storedItems = JSON.parse(cartItems);
    setCartbox(storedItems);
  }, []);



  return (
    <div>
      <Mywebcontextcall.Provider value={{ cartbox, setCartbox }}>
      {children}
      </Mywebcontextcall.Provider>
    </div>
  )
}

export default Mywebcontextcall
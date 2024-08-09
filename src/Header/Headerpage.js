import React, { useContext, useState } from 'react'
import Logo from '../assets/icon/Logo'
import { Link, useNavigate } from 'react-router-dom'
import Search from '../assets/Search';
import Shopping from '../assets/icon/Shopping';
import Call_Icon from '../assets/icon/Call_Icon';
import { LuMenu } from "react-icons/lu";
import Mywebcontextcall from '../mywebcontext/Mywebcontext';
import Shopping_cart from '../cart/Shopping_cart';
import { FaUserCircle } from "react-icons/fa";

const Headerpage = () => {

  const navigate = useNavigate();

  const { cartbox, formData, setFormData } = useContext(Mywebcontextcall);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [open, setOpen] = useState(false)

  const handleCartValue = () => {
    setOpen(true)
  }

  const handleIconclick = () => {
    navigate('/profile')
  }


  return (
    <>

      <header>
        <Shopping_cart open={open} setOpen={setOpen} />

        <div className='container mx-auto mt-[65px]'>
          <div className='flex justify-between items-center'>
            <div className='logo mx-6 w-10'>
              <Logo className="w-20" />
            </div>
            <div className='hidden lg:block'>
              <ul className='flex'>
                <li><Link to='/' className='text-[20px] text-[#39DB4A] font-medium '>Home</Link></li>
                <li><Link to='/' className='text-[20px] font-medium ml-[60px] hover:text-[#39DB4A]'>Menu</Link></li>
                <li><Link to='/' className='text-[20px] font-medium ml-[60px] hover:text-[#39DB4A]'>Services</Link></li>
                <li><Link to='/' className='text-[20px] font-medium ml-[60px] hover:text-[#39DB4A]'>Offers</Link></li>
              </ul>
            </div>
            <div className='flex items-center'>
              <div className='items-center hidden lg:flex'>
                <div className='search-icon flex mx-8 cursor-pointer'>
                  <Search />
                </div>

                <div className="relative flex items-center">
                  <div className='shopping mr-[34px] cursor-pointer a' onClick={handleCartValue}>
                    <Shopping />
                  </div>
                  <div className="w-6 h-6 bg-[#39DB4A] cursor-pointer flex justify-center items-center text-white rounded-full absolute bottom-[35%] right-[36%]" >
                    {cartbox?.length || 0}
                  </div>
                </div>

                <button onClick={handleIconclick} className='rounded-[40px] flex justify-center mx-[14px] items-center self-center'>
                  
                  {/* {
                    formData ? (
                      <img src={formData.Image} alt=""   className="w-10 h-10 rounded-full cursor-pointer object-cover" />
                    ): */}
                    
                    <FaUserCircle size={25}  className="w-[24px] h-[24px] cursor-pointer object-contain" />
                    {/* } */}

                </button>


                <button className='bg-[#39DB4A] rounded-[40px] flex justify-center mx-[14px] items-center self-center'>
                  <span className='w-[23.96px] my-[18px] ml-[32px]'><Call_Icon /></span>
                  <span className='text-white text-[20px] cursor-pointer py-[15px] mr-[27px] mx-[14px]'>Contact</span>
                </button>



              </div>
              <div className='lg:hidden ml-2 mx-6 cursor-pointer' onClick={toggleMenu}>
                <LuMenu className="w-8 h-8" />
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className='lg:hidden bg-[#39DB4A] fixed top-[120px] left-0 right-0 bottom-0 z-50 w-full'>
              <ul className='flex flex-col items-center py-4 mt-24'>
                <li className='my-2'><Link to='/' className='text-[20px] font-medium text-white hover:text-black'>Home</Link></li>
                <li className='my-2'><Link to='/' className='text-[20px] font-medium text-white hover:text-black'>Menu</Link></li>
                <li className='my-2'><Link to='/' className='text-[20px] font-medium text-white hover:text-black'>Services</Link></li>
                <li className='my-2'><Link to='/' className='text-[20px] font-medium text-white hover:text-black'>Offers</Link></li>
                <div className='flex lg:block'>
                  <li className='my-2 mx-2 mr-4'><Search className="text-white" /></li>
                  <li className='my-2'><Shopping className="text-white" /></li>
                </div>
                <li className='my-2'>
                  <button className='bg-white rounded-[40px] flex justify-center items-center'>
                    <span className='w-[23.96px] my-[18px] ml-[32px]'><Call_Icon className="text-[#39DB4A]" /></span>
                    <span className='text-[#39DB4A] text-[20px] cursor-pointer py-[15px] mr-[27px] mx-[14px]'>Contact</span>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>


    </>
  )
}

export default Headerpage
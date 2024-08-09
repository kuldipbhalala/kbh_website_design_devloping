import React, { useContext } from 'react'
import Mywebcontextcall from '../mywebcontext/Mywebcontext'
import { Link } from 'react-router-dom';

function Checkout() {
  const { cartbox, setCartbox } = useContext(Mywebcontextcall)

  const handleQuantityChange = (productId, change) => {
    const updatedCart = cartbox.map(item => {
      if (item.id === productId) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartbox(updatedCart);
    localStorage.setItem('cartbox', JSON.stringify(updatedCart));
  };

  return (
    <div>

      {
        cartbox.length > 0 ? (
          <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
              <h2 className="title font-manrope font-bold text-4xl  leading-10 mb-8  text-black">Shopping Cart
              </h2>
              <div className="hidden lg:grid grid-cols-2 py-6">
                <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
                <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                  <span className="w-full max-w-[260px] text-center mx-32">Quantity</span>
                  <span className="w-full max-w-[200px] text-center">Total</span>
                </p>
              </div>

              {
                cartbox.map((product, key) => (

                  <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                    <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                      <div className="img-box"><img src={product.imageSrc} alt="perfume bottle image" className="xl:w-[140px] rounded-xl" /></div>
                      <div className="pro-data w-full max-w-sm ">
                        <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">{product.name}
                        </h5>
                        <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                          Perfumes</p>
                        <h6 className="font-medium text-lg leading-8 text-[#39DB4A]  max-[550px]:text-center">${product.price}</h6>
                      </div>
                    </div>
                    <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">

                      <div className="flex items-center w-full mx-auto justify-center">
                        <button onClick={() => handleQuantityChange(product.id, -1)} className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                          <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                            <path d="M16.5 11H5.5" stroke strokeWidth="1.6" strokeLinecap="round" />
                            <path d="M16.5 11H5.5" stroke strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                            <path d="M16.5 11H5.5" stroke strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                          </svg>
                        </button>


                        <p className="mx-2 text-gray-500">{product.quantity}</p>
                        <button onClick={() => handleQuantityChange(product.id, 1)} className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                          <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke strokeWidth="1.6" strokeLinecap="round" />
                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                          </svg>
                        </button>
                      </div>
                      <h6 className="text-[#39DB4A] font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">{product?.quantity * product?.price}
                      </h6>
                    </div>
                  </div>
                ))
              }

              <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">

                <div className="flex items-center justify-between w-full py-6">
                  <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
                  <h6 className="font-manrope font-medium mx-7 text-2xl leading-9 text-[#39DB4A]">${cartbox?.reduce((total, product) => total + (product.price * product.quantity), 0)}</h6>
                </div>
              </div>
              <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                <button className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
                  <span className="px-2 font-semibold text-lg leading-8 text-[#39DB4A]">Add Coupon Code</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                    <path d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-[#39DB4A] font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">Continue
                  to Payment
                  <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width={23} height={22} viewBox="0 0 23 22" fill="none">
                    <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </section>

        ) :

          <section className="bg-white ">
            <div className="py-8 px-4 mx-auto flex justify-center items-center h-[100vh] max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-6xl text-primary-600 dark:text-primary-500">Your Order Summary</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
                <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Not Cart </p>
                <Link to="/" className="inline-flex text-black bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</Link>
              </div>
            </div>
          </section>

      }

    </div>
  )
}

export default Checkout
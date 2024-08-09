import { useContext, useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Mywebcontextcall from '../mywebcontext/Mywebcontext';
import { Link, useNavigate } from 'react-router-dom';

export default function Shopping_cart({ open, setOpen }) {

  const navigate = useNavigate();

  const { cartbox, setCartbox } = useContext(Mywebcontextcall);


  const handleRemoveItem = (productId) => {
    const updatedCart = cartbox.filter(item => item.id !== productId);
    setCartbox(updatedCart);
    localStorage.setItem('cartbox', JSON.stringify(updatedCart));
  };

  const handleclick = () => {
    navigate('/checkout')
    setOpen(false)
  }

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
    <>

      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                      </div>
                    </div>

                    {
                      cartbox.length > 0 ? (

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                              {cartbox?.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.imageSrc}
                                      alt={product.name}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>
                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href="/">{product.name}</a>
                                        </h3>
                                        <p className="ml-4">${product.price}</p>
                                      </div>

                                      <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                                      <div className='flex'>
                                        <div >
                                          Total
                                          <span className='mx-2'>{product?.quantity * product?.price}</span>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <div className="flex items-center">
                                        <button
                                          type="button"
                                          onClick={() => handleQuantityChange(product.id, -1)}
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          -
                                        </button>
                                        <p className="mx-2 text-gray-500">Qty {product.quantity}</p>
                                        <button
                                          type="button"
                                          onClick={() => handleQuantityChange(product.id, 1)}
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          +
                                        </button>
                                      </div>
                                      <div className="flex">
                                        <button type="button" onClick={() => handleRemoveItem(product.id)} className="font-medium text-indigo-600 hover:text-indigo-500">
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
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
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      {/* <p>${subtotal}</p> */}
                      <p>${cartbox?.reduce((total, product) => total + (product.price * product.quantity), 0)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">

                      <Link onClick={handleclick}
                        to="checkout"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Checkout
                      </Link>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or{' '}
                        <Link
                          to='/'
                          onClick={() => setOpen(false)}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>

    </>
  )
}

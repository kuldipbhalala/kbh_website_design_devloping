import React, { useState } from 'react'
import Playicon from '../../assets/icon/Playicon'
import { Star } from '../../assets/icon/Star'
import Logo from '../../assets/icon/Logo'
import { Link } from 'react-router-dom'
import FaceBook from '../../assets/icon/FaceBook'
import { PiLessThanBold } from "react-icons/pi";
import { TbMathGreater } from "react-icons/tb";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from "react-slick";
import Sliderbox from '../Sliderbox'


const Home = () => {


  const handlesildernext = () => {

  }

  const handesilderprives = () => {

  }


  return (
    <div>

      <main>

        <section>
          <div className="container mx-auto my-10">
            <div className="lg:flex justify-between items-center mt-8">

              <div className="lg:w-1/2 self-center">

                <h1 className="text-3xl   md:text-[62px]  mx-5 lg:mx-0 font-bold leading-tight lg:leading-[80px] lg:max-w-2xl ">
                  Dive into Delights Of Delectable{' '}
                  <span className="text-[#39DB4A]">Food</span>
                </h1>
                <p className="text-xl lg:text-2xl mx-5 lg:mx-0 font-medium text-[#4A4A4A] my-6 max-w-xl">
                  Where Each Plate Weaves a Story of Culinary Mastery and
                  Passionate Craftsmanship
                </p>


                <div className="flex flex-col  mx-5 lg:mx-0 md:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
                  <button className="bg-[#39DB4A] rounded-full shadow-lg text-white text-lg lg:text-xl py-3 px-6 boxShadow-custom-green">
                    Order Now
                  </button>
                  <div className="flex items-center space-x-4">
                    <span className="text-lg lg:text-xl font-semibold cursor-pointer text-[#4D4D4D]">
                      Watch Video
                    </span>
                    <div className="w-12 h-12 lg:w-16 lg:h-16 flex justify-center items-center rounded-full bg-white shadow-lg cursor-pointer">
                      <Playicon />
                    </div>
                  </div>
                </div>



              </div>

              <div className="relative w-full max-w-md mx-auto mt-8 lg:mt-0">
                {/* Hot Spicy Food Badge */}
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-lg shadow-md z-10">
                  <span className="text-red-500 text-sm">
                    Hot spicy Food 🌶️
                  </span>
                </div>

                {/* Main circular image */}
                <div className="relative w-full aspect-square bg-[#53EC62] rounded-full overflow-hidden">
                  <img
                    src="Girls.png"
                    alt="Woman enjoying spicy food"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Food items at the bottom */}

                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  {/* Spicy noodles */}

                  <div className="bg-white px-5 rounded-lg p-2 shadow-md flex items-center space-x-2">
                    <img src="Mask group.jpg" alt="Spicy noodles" className="w-10 h-10 rounded-md object-cover" />
                    <div>
                      <h4 className="text-sm font-semibold">Spicy noodles</h4>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400 text-xs">
                          ★★★★★
                        </div>
                        <span className="text-xs text-gray-500 ml-1">5.0</span>
                      </div>
                      <p className="text-red-500 font-semibold text-sm">$18.00</p>
                    </div>
                  </div>

                  {/* Vegetarian salad */}
                  <div className="bg-white px-5 rounded-lg p-2 shadow-md flex items-center space-x-2">
                    <img src="vegetarian-salad_13.jpg" alt="Vegetarian salad" className="w-10 h-10 rounded-md object-cover" />
                    <div>
                      <h4 className="text-sm font-semibold">Vegetarian salad</h4>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400 text-xs">
                          ★★★★☆
                        </div>
                        <span className="text-xs text-gray-500 ml-1">4.5</span>
                      </div>
                      <p className="text-red-500 font-semibold text-sm">$23.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto lg:my-24">
            <div className="text-center">
              <p className="text-[#FF6868] text-[20px] font-bold my-2">
                Customer Favorites
              </p>
              <h2 className="font-bold text-[40px] md:text-[60px] my-5">Popular Catagories</h2>
            </div>

            <div className="flex flex-col justify-center  md:flex-row flex-wrap my-10">
              <div className="w-full sm:w-[300px] mx-auto lg:mx-7 h-[250px] bg-white flex flex-col rounded-xl items-center py-10 shadow-custom mb-8 lg:mb-10 xl:mb">
                <div className="w-[120px] h-[120px] flex justify-center items-center bg-[#C1F1C6] rounded-full mb-2">
                  <img src="Main _Dish.svg" alt="Main Dish" />
                </div>
                <div className="text-center">
                  <p>Main Dish</p>
                  <p>(86 dishes)</p>
                </div>
              </div>

              <div className="w-full sm:w-[300px] mx-auto lg:mx-7 h-[250px] bg-white flex flex-col rounded-xl items-center py-10 shadow-custom mb-8 lg:mb-10 xl:mb">
                <div className="w-[120px] h-[120px] flex justify-center items-center bg-[#C1F1C6] rounded-full mb-2">
                  <img src="Break_Fast.svg" alt="Break Fast" width={80} />
                </div>
                <div className="text-center">
                  <p>Break Fast</p>
                  <p>(86 dishes)</p>
                </div>
              </div>

              <div className="w-full sm:w-[300px] mx-auto lg:mx-7 h-[250px] bg-white flex flex-col rounded-xl items-center py-10 shadow-custom mb-8 lg:mb-10 xl:mb">
                <div className="w-[120px] h-[120px] flex justify-center items-center bg-[#C1F1C6] rounded-full mb-2">
                  <img src="icream.svg" alt="Dessert" width={90} />
                </div>
                <div className="text-center">
                  <p>Dessert</p>
                  <p>(86 dishes)</p>
                </div>
              </div>

              <div className="w-full sm:w-[300px] mx-auto lg:mx-7 h-[250px] bg-white flex flex-col rounded-xl items-center py-10 shadow-custom mb-8 lg:mb-10 xl:mb">
                <div className="w-[120px] h-[120px] flex justify-center items-center bg-[#C1F1C6] rounded-full mb-2">
                  <img src="juice.svg" alt="Browse All" width={70} />
                </div>
                <div className="text-center">
                  <p>Browse All</p>
                  <p>(86 dishes)</p>
                </div>
              </div>
            </div>

          </div>


        </section>

        <section>
          <div className="container mx-auto md:my-8">

            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mx-5 mb-6 md:mb-0">
                <p className="text-[20px] text-[#FF6868] font-bold mb-2">
                  Special Dishes
                </p>
                <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-[550px] leading-tight">
                  Standout Dishes From Our Menu
                </h2>
              </div>

              <div className="flex space-x-4">

                <button className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex justify-center items-center bg-[#EFEFEF] hover:bg-[#39DB4A] rounded-full transition-colors duration-300">
                  <span className="text-2xl md:text-3xl" onClick={handlesildernext}><PiLessThanBold /></span>
                </button>
                <button className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex justify-center items-center bg-[#EFEFEF] hover:bg-[#39DB4A] rounded-full transition-colors duration-300">
                  <span className="text-2xl md:text-3xl" onClick={handesilderprives}><TbMathGreater /></span>
                </button>

              </div>
            </div>



            {/* Fattoush Salad */}

            <div>
              <Sliderbox />
            </div>

          </div>
        </section>

        <section className="py-8 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0">

                <div className="relative">
                  <img
                    src="pngwing 2.png"
                    alt="Testimonial image"
                    className="w-full max-w-[506px] h-auto mx-auto lg:mx-0"
                  />


                  <div className="absolute bottom-0 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-full max-w-[533px] h-[350px] bg-[#53EC62] -z-10 rounded-[140px_140px_41px_41px]"></div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <p className="text-lg md:text-xl font-bold mb-3 text-[#FF6868]">
                  Testimonials
                </p>
                <h2 className="text-3xl md:text-4xl max-w-[520px] my-8 lg:text-5xl font-bold leading-[78.61px] mb-6">
                  What Our Customers Say About Us
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-[#555555] leading-relaxed mb-10">
                  "I had the pleasure of dining at Foodi last night, and I'm
                  still raving about the experience! The attention to detail
                  in presentation and service was impeccable"
                </p>

                <div className="flex flex-col sm:flex-row  items-center">
                  <div className="flex -space-x-2 mb-4 sm:mb-0">
                    <img
                      className="inline-block w-12 h-12 rounded-full ring-2 ring-white"
                      src="Mask_groupgirls.png"
                      alt="Avatar"
                    />
                    <img
                      className="inline-block w-12 h-12 rounded-full ring-2 ring-white"
                      src="Mask groupboy.png"
                      alt="Avatar"
                    />
                    <img
                      className="inline-block w-12 h-12 rounded-full ring-2 ring-white"
                      src="Mask groupgirls.png"
                      alt="Avatar"
                    />
                  </div>

                  <div className="sm:ml-6">
                    <h2 className="text-xl md:text-2xl font-semibold mb-2">
                      Customer Feedback
                    </h2>
                    <div className="flex items-center">
                      <Star />
                      <p className="text-lg md:text-xl font-semibold mx-2">4.5</p>
                      <p className="text-lg md:text-xl text-[#807E7E]">
                        (18.6k Reviews)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between xl:items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <p className="text-[#FF6868] font-bold text-lg md:text-xl">
                  Our Story & Services
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-[700px] my-4 md:my-8 leading-tight">
                  Our Culinary Journey And Services
                </h2>
                <p className="text-[#555555] text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-[650px] mb-6">
                  Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
                </p>
                <button className="my-4 md:my-10 px-8 py-4 font-semibold text-white text-lg md:text-2xl bg-[#39DB4A] rounded-full hover:bg-[#2fc83d] transition-colors">
                  Explore
                </button>
              </div>

              <div className="lg:w-1/2 mt-10 lg:mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Catering", image: "Catering.png", description: "Delight your guests with our flavors and presentation" },
                    { title: "Fast delivery", image: "Fast_delivery.png", description: "We deliver your order promptly to your door" },
                    { title: "Online Ordering", image: "Online_Ordering.png", description: "Explore menu & order with ease using our Online Ordering" },
                    { title: "Gift Cards", image: "Gift_Cards.png", description: "Give the gift of exceptional dining with Foodi Gift Cards" }
                  ].map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-[30px] shadow-services h-[297.15px] flex flex-col">
                      <div className="flex justify-center">
                        <img src={service.image} alt={service.title} className="w-16 h-16" />
                      </div>
                      <div className="text-center">
                        <h2 className="text-[#5FE26C] text-xl md:text-2xl font-bold mb-2  my-5">{service.title}</h2>
                        <p className="text-[#90BD95]  font-semibold text-sm md:text-base mx-9 max-w-[230px]">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>


      </main>


      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Logo />
              <p className="text-lg md:text-xl my-4 max-w-[320px] font-medium text-[#555555]">
                Savor the artistry where every dish is a culinary masterpiece
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl md:text-2xl mb-4">Useful links</h2>
              <nav className="flex flex-col space-y-2">
                {["About us", "Events", "Blogs", "FAQ"].map((item, index) => (
                  <Link key={index} className="text-lg md:text-xl font-medium text-[#555555] hover:text-[#39DB4A]" to="">
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h2 className="font-semibold text-xl md:text-2xl mb-4">Main Menu</h2>
              <nav className="flex flex-col space-y-2">
                {["Home", "Offers", "Menus", "Reservation"].map((item, index) => (
                  <Link key={index} className="text-lg md:text-xl font-medium text-[#555555] hover:text-[#39DB4A]" to="">
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h2 className="font-semibold text-xl md:text-2xl mb-4">Contact Us</h2>
              <nav className="flex flex-col space-y-2">
                {["example@email.com", "+64 958 248 966", "Blogs", "Social media"].map((item, index) => (
                  <Link key={index} className="text-lg md:text-xl font-medium text-[#555555] hover:text-[#39DB4A]" to="">
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center">
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 mb-6 sm:mb-0">
              {["facebook_", "instagram_", "🦆 icon _twitter_", "🦆 icon _youtube_"].map((social, index) => (
                <div key={index} className="w-12 h-12 flex justify-center items-center bg-[#EDFFEF] hover:bg-[#39DB4A] rounded-full transition-colors">
                  <img src={`${social}.svg`} alt={`${social} icon`} className="w-6 h-6" />
                </div>
              ))}
            </div>
            <p className="text-center md:ml-36  sm:text-right text-sm sm:text-base font-medium text-[#555555] mt-4 sm:mt-0">
              Copyright 2023 Dscode | All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

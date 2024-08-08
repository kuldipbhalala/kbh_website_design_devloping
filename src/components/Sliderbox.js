import React, { useContext, useState } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Star } from '../assets/icon/Star';
import Slider from 'react-slick';
import Mywebcontextcall from '../mywebcontext/Mywebcontext';
import Shopping_cart from '../cart/Shopping_cart';

const Product = ({ id, name, description, price, imageSrc, review, handleAddCart }) => {
  return (
    <div className="bg-white my-3 p-4 rounded-lg shadow-md">
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-[350px] object-cover rounded-lg"
      />
      <div className="mt-3">
        <h3 className="text-xl font-semibold my-3">{name}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
      <div className="flex items-center justify-between mt-3">
        <p className="text-lg font-bold">
          <span className="text-xl text-[#FF6868]">$</span>{price}
        </p>
        <div className="flex items-center">
          <Star />
          <p className="text-lg font-semibold ml-2">{review}</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4 my-8">
        <button className="bg-[#39DB4A] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#36b94a] transition-colors duration-300">
          View details
        </button>
        <button onClick={() => handleAddCart({ id, name, description, price, imageSrc, review })} className="bg-[#39DB4A] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#36b94a] transition-colors duration-300">
          Add to cart
        </button>
      </div>
    </div>
  )
}

const staticData = [
  {
    id: 1,
    name: 'Fattoush Salad',
    description: 'Description of the item',
    price: 24.00,
    imageSrc: 'Fattoush salad.jpg',
    review: '4.9'
  },
  {
    id: 2,
    name: 'Vegetable Salad',
    description: 'Description of the item',
    price: 26.00,
    imageSrc: 'Vegetable salad.svg',
    review: '4.6'
  },
  {
    id: 3,
    name: 'Egg Vegi Salad',
    description: 'Description of the item',
    price: 23.00,
    imageSrc: 'Egg salad.svg',
    review: '4.5'
  },
]

const Slides = ({ handleAddCart }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {staticData.map((data, index) => (
          <Product key={index} {...data} handleAddCart={handleAddCart} />

        ))}
      </div>
    </div>
  );
};

const Sliderbox = () => {
  const { cartbox, setCartbox } = useContext(Mywebcontextcall);



  const [open, setOpen] = useState(false);

  const handleAddCart = (item) => {
    setCartbox(prevCart => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);

      let updatedCart;
      if (existingItemIndex !== -1) {
        updatedCart = prevCart.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );
      } else {
        updatedCart = [...prevCart, { ...item, quantity: 1 }];
      }

      localStorage.setItem('cartbox', JSON.stringify(updatedCart));
      console.log('Cart updated:', updatedCart);
      return updatedCart;
    });
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  };

  return (

    <div>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5].map((data) => (
          <Slides key={data} handleAddCart={handleAddCart} />
        ))}
      </Slider>
      <Shopping_cart open={open} setOpen={setOpen} cartbox={cartbox} setCartbox={setCartbox} />

    </div>

  );
}

export default Sliderbox
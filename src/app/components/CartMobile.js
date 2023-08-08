'use client';
import { useContext } from 'react';
import CartItem from './CartItem';
import CartBottom from './CartBottom';
import CartTop from './CartTop';
import { CartContext } from '../context/CartContext';

const CartMobile = () => {
  const { isOpen, cart } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? 'bottom-0' : '-bottom-full'
      } fixed w-full h-full left-0 bg-white transition-all duration-300 lg:hidden z-20 flex flex-col`}
    >
      <CartTop />
      <div
        className={`px-4 flex flex-col gap-y-4 py-2 mr-4 mt-8 h-[60vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary ${
          cart.length >= 3
            ? 'scrollbar-track-white/10'
            : 'scrollbar-track-transparent'
        }`}
      >
        {cart.map((pizza, index) => {
          return <CartItem pizza={pizza} key={index} />;
        })}
      </div>
      <CartBottom />
    </div>
  );
};

export default CartMobile;

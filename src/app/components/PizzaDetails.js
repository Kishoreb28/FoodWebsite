import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import SizeSelection from './SizeSelection';
import { CartContext } from '../context/CartContext';

const PizzaDetails = ({ pizza, setModal }) => {
  const [size, setSize] = useState('small');
  const [crust, setCrust] = useState('traditional');
  const [price, setPrice] = useState(0);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    size === 'small'
      ? setPrice(parseFloat(pizza.priceSm ).toFixed(2))
      : size === 'medium'
      ? setPrice(parseFloat(pizza.priceMd ).toFixed(2))
      : size === 'large'
      ? setPrice(parseFloat(pizza.priceLg ).toFixed(2))
      : null;
  });

  return (
    <div className='flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8'>
      <div className='lg:flex-1 flex justify-center items-center'>
        <div className='max-w-[300px] lg:max-w-none mt-6 lg:mt-0'>
          <Image
            width={450}
            height={450}
            src={pizza.image}
            alt=''
            priority={1}
            className='group-hover:translate-y-3 transition-all duration-300 mx-auto lg:mb-0 relative'
          />
        </div>
      </div>
      <div className='flex flex-col flex-1'>
        <div className='flex-1 p-2 text-center lg:text-left'>
          <div className='flex-1 overflow-y-scroll h-[46vh] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white-500 pr-2'>
            <div className='font-semibold'>
              <h2 className='capitalize text-3xl mb-1'>{pizza.name}</h2>
              <div className='mb-6 text-lg font-medium'>
                <span>
                  {size === 'small'
                    ? '25 cm'
                    : size === 'medium'
                    ? '30 cm'
                    : size === 'large'
                    ? '35 cm'
                    : null}
                </span>
                <span>, {crust} crust</span>
              </div>
            </div>
            <SizeSelection
              pizza={pizza}
              id={pizza.id}
              size={size}
              setSize={setSize}
              crust={crust}
            />
            
          </div>
        </div>
        <div className='h-full flex items-center px-2 lg:items-end'>
          <button
            onClick={() => {
              addToCart(
                pizza.id,
                pizza.image,
                pizza.name,
                price,
                size,
                crust
              ),
                setModal(false);
            }}
            className='btn btn-lg gradient w-full flex justify-center gap-x-2'
          >
            <div>Add to cart for</div>
            <div>₹ {price}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;

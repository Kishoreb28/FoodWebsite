'use client';
import { useState } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import PizzaDetails from './PizzaDetails';
import { IoCloseOutline } from 'react-icons/io5';

Modal.setAppElement('body');


const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const Pizza = ({ pizza }) => {
  
  const [modal, setModal] = useState(false);

  
  const openModal = () => {
    setModal(true);
  };

  
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className='group py-2 px-4 xl:py-4 xl:px-2 rounded-xl'>
      <Image
        onClick={openModal}
        width={270}
        height={270}
        src={pizza.image}
        alt=''
        priority={1}
        className='lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer'
      />
      
      <div onClick={openModal}>
        <div className='text-xl font-bold mb-3 capitalize cursor-pointer'>
          {pizza.name}
        </div>
      </div>
      <div className='text-sm text-[#5C6370] font-medium min-h-[60px] mb-6'>
        {pizza.description}
      </div>
      <div className='mb-6 flex items-center justify-between'>
        <div className='hidden lg:flex text-xl font-semibold'>
          starts at {pizza.priceSm}
        </div>
        <button
          onClick={openModal}
          className='hidden lg:flex text-white rounded-lg font-semibold btn-sm text-sm gradient'
        >
          Choose
        </button>
        <button
          onClick={openModal}
          className='btn btn-sm gradient lg:hidden px-3'
        >
          starts at $9.99
        </button>
      </div>
      {modal && (
        <Modal
          className={
            'bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none'
          }
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel='Pizza Modal'
        >
          <div
            className='absolute z-30 right-2 top-2 text-2xl hover:scale-110 duration-200 cursor-pointer'
            onClick={closeModal}
          >
            <IoCloseOutline className='text-4xl text-red-400' />
          </div>
          <PizzaDetails pizza={pizza} modal={modal} setModal={setModal} />
        </Modal>
      )}
    </div>
  );
};

export default Pizza;

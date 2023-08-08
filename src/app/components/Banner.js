'use client';
import Image from 'next/image';
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';

const Banner = () => {
  return (
    <section className='bg-primary  lg:min-h-[768px] pt-16 lg:pt-16'>
      <div className='container mx-auto min-h-[768px] flex items-center justify-center'>
        
          {/* text */}
            <div className='flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-6'>
              {/* text */}
              <div className='flex-1'>
                <div className='font-bangers text-[32px] text-white uppercase tracking-[0.03em]'>
                  Best pizza in town
                </div>
                <h1 className='text-6xl lg:text-8xl font-bangers text-white drop-shadow-md'>
                  Pizza perfection <br /> in every bite
                </h1>
              </div>
            </div>
         
            <Image
                  src={'/pizza-banner.png'}
                  width={550}
                  height={558}
                  alt=''
                  priority={'lazy'}
                />
      </div>
    </section>
  );
};

export default Banner;

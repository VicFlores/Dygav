import React from 'react';

export const AboutUsCard = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <div className=' grid lg:grid-cols-3 md:grid-cols-1 gap-5 border-t-4 border-y-p600 pt-10 pb-10'>
        <div className='w-[344px] h-auto shadow-md rounded-lg bg-gray '>
          <div className='pl-7 pr-7 pt-7'>
            <div className='w-full h-[200px] bg-center bg-cover bg-welcomeWorld ' />
          </div>

          <div className='w-full h-auto pb-7'>
            <p className='text-black700 text-center text-xl px-4 py-4'>
              Bienvenido a <br /> nuestro mundo
            </p>

            <p className='text-black900 text-base px-4'>
              Lorem ipsum dolor sit amet consectetur. Aliquam quisque tortor sit
              ac. Ante dolor ultrices dapibus ullamcorper condimentum.
            </p>
          </div>
        </div>

        <div className='w-[344px] h-auto shadow-md rounded-lg bg-gray '>
          <div className='pl-7 pr-7 pt-7'>
            <div className='w-full h-[200px] bg-center bg-cover bg-digitalAparment ' />
          </div>

          <div className='w-full h-auto pb-7'>
            <p className='text-black700 text-center text-xl px-4 py-4'>
              Digitaliza tu apartamentos turistico
            </p>

            <p className='text-black900 text-base px-4'>
              Lorem ipsum dolor sit amet consectetur. Aliquam quisque tortor sit
              ac. Ante dolor ultrices dapibus ullamcorper condimentum.
            </p>
          </div>
        </div>

        <div className='w-[344px] h-auto shadow-md rounded-lg bg-gray '>
          <div className='pl-7 pr-7 pt-7'>
            <div className='w-full h-[200px] bg-center bg-cover bg-aboutUsAviable ' />
          </div>

          <div className='w-full h-auto pb-7'>
            <p className='text-black700 text-center text-xl px-4 py-4'>
              Siempre disponible <br /> para ti
            </p>

            <p className='text-black900 text-base px-4'>
              Lorem ipsum dolor sit amet consectetur. Aliquam quisque tortor sit
              ac. Ante dolor ultrices dapibus ullamcorper condimentum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
import { TSearcherCard } from '@/utils';
import React, { FC, useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export const Carousel: FC<{ accomodation: TSearcherCard[] }> = ({
  accomodation,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? accomodation[0].src.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === accomodation[0].src.length - 1 ? 0 : prev + 1
    );
  };

  const slide = accomodation[0]?.src as string[];

  return (
    <div className='block md:flex justify-evenly items-center'>
      <div className='max-w-[550px] h-[650px] w-full py-16 px-4 relative group m-auto md:m-0'>
        <div
          style={{
            backgroundImage: `url(${accomodation[0]?.src[currentIndex]})`,
          }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        />

        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black700/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black700/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className='flex top-4 justify-center py-2'>
          {slide?.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`${
                currentIndex === index ? 'bg-black900/60' : 'bg-black900/20'
              } w-4 h-4 rounded-full mx-2 cursor-pointer`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      <div className=''>
        {accomodation.map((item) => (
          <div
            id='CardContainer'
            key={item.id}
            className='w-[300px] md:w-[320px] lg:w-[400px] self-center justify-self-center m-auto md:m-0'
          >
            <div id='CardBody' className='space-y-4 mt-6 mb-6'>
              <p className='text-[18px] md:text-[20px] lg:text-[25px] text-center md:text-start'>
                {item.title}
              </p>
              <p className='text-[13px] md:text-[14px] lg:text-base whitespace-pre-line'>
                {item.description}
              </p>
            </div>

            <div id='CardFooter' className='flex h-[48px] space-x-1 text-white'>
              <div className='bg-p600 pt-1 pb-1 w-[119px] h-full text-center'>
                <p className='font-semibold text-[13px] md:text-[14px] lg:text-[16px]'>
                  {item.bedroom}
                </p>
                <p className='text-[10px] lg:text-[12px]'>Dormitorios</p>
              </div>

              <div className='bg-p600 pt-1 pb-1 w-[119px] h-full text-center '>
                <p className='font-semibold text-[13px] md:text-[14px] lg:text-[16px]'>
                  {item.bathroom}
                </p>
                <p className='text-[10px] lg:text-[12px]'>Baños</p>
              </div>

              <div className='bg-p600 pt-1 pb-1 w-[119px] h-full text-center '>
                <p className='font-semibold text-[13px] md:text-[14px] lg:text-[16px]'>
                  {item.size}
                </p>
                <p className='text-[10px] lg:text-[12px]'>Tamaño</p>
              </div>

              <div className='bg-p600 pt-1 pb-1 w-[119px] h-full text-center '>
                <p className='font-semibold text-[13px] md:text-[14px] lg:text-[16px]'>
                  {item.maxHuesped}
                </p>
                <p className='text-[10px] lg:text-[12px]'>Huespedes</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
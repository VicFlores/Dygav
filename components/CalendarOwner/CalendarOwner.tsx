/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from 'react';
import { Session } from 'next-auth';

import { axiosConfig } from '@/utils';
import axios from 'axios';

import useDictionary from '@/app/hooks/useDictionary';
import { AccomodationCarousel } from '@/app/components/Owners/Calendar/AccomodationCarousel';

export const CalendarOwner: FC<{ session: Session }> = ({ session }) => {
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    const accomodations = async () => {
      const { data } = await axiosConfig.get(
        `/api/accomodations/findByUserId/${
          session.user?._id || session.user?.id
        }`
      );

      const dataArray = [];

      for (const item of data) {
        const { data: dataAvaibook } = await axios.get(
          `https://api.avaibook.com/api/owner/accommodations/${item.accomodationId}/`,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
            },
          }
        );

        dataArray.push(dataAvaibook);
      }

      setData(dataArray);
    };

    accomodations();
  }, []);

  const dictionary: any = useDictionary('calendar');

  return (
    <div className='px-8 space-y-12 mb-24'>
      <div className='flex flex-col md:flex-row justify-center items-center md:justify-between md:items-end border-b-[1px]'>
        <p className=' text-black900/[.7]  mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
          {dictionary.calendarOwner?.title}
        </p>
      </div>

      <div className='grid gap-y-10 md:grid-cols-2 md:gap-y-8 lg:grid-cols-3'>
        {data !== undefined && data.length > 0 ? (
          data.map((item, index) => (
            <AccomodationCarousel key={index} item={item} index={index} />
          ))
        ) : (
          <div className='flex justify-center items-center mt-10'>
            <div className='flex flex-col justify-center items-center space-y-8 border-[1px] border-dashed md:h-[200px] md:w-[600px] p-10'>
              <p className=' text-black900/[.7] lg:text-xl'>
                {dictionary.calendarOwner?.loading}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

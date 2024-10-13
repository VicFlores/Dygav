/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { FC, useEffect, useState } from 'react';
import { AccomodationCarousel } from './AccomodationCarousel';
import useDictionary from '@/app/hooks/useDictionary';
import { getOwnerAccommodations } from '@/app/utils';
import { Accommodation } from '@/app/types';
import { avaibookExtraction } from '@/app/utils/axiosConfig/avaibookExtraction';

export const Calendar: FC<{ accessToken: string | undefined }> = ({
  accessToken,
}) => {
  const [data, setData] = useState<any[]>();
  const dictionary: any = useDictionary('calendar');

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const accommodations = await getOwnerAccommodations(accessToken || '');
        const accommodationDetails = await fetchAccommodationDetails(
          accommodations
        );
        setData(accommodationDetails);
      } catch (error) {
        console.error('Error fetching accommodations:', error);
      }
    };

    fetchAccommodations();
  }, []);

  const fetchAccommodationDetails = async (
    accommodations: any[]
  ): Promise<Accommodation[]> => {
    const details = await Promise.all(
      accommodations.map(async (item) => {
        const { data } = await avaibookExtraction.get(
          `/accomodation/${item.aviabook_id}/`
        );
        return data;
      })
    );
    return details.flat();
  };

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

'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { format, addDays } from 'date-fns';
import SessionButton from '@/components/ui/sessionbutton/SessionButton';
import FilmDetails from '@/components/ui/dateselector/FilmDetails';

const initialDate = new Date();

const FilmPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const filmId = "001";

  const handleDateButtonClick = (date: Date) => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    router.push(`/film/${filmId}?date=${formattedDate}`);
  };

  const dates = Array.from({ length: 7 }, (_, index) => addDays(initialDate, index));

  return (
    <div className="bg-gray-100">
      <div className="relative">
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url(/background-image.jpg)' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative flex items-center">
          <div className="w-1/2">
            <img src="/left-image.jpg" className="w-full" alt="Left Image" />
          </div>
          <div className="w-1/2">
            <h1 className="text-white">Заголовок фильма</h1>
            <p className="text-white">Описание фильма</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex space-x-2">
        {dates.map((date, index) => (
          <button
            key={index}
            onClick={() => handleDateButtonClick(date)}
            className={`px-4 py-2 rounded ${
              index === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            <div>{format(date, 'dd')}</div>
            <div className="text-xs">{format(date, 'EEE', { locale: ruLocale })}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilmPage;

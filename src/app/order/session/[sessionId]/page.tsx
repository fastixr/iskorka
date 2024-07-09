'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SessionPage = () => {
  const router = useRouter();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/getSelection');
      const data = await response.json();

      if (response.ok) {
        setDate(data.selectedDate);
        setTime(data.selectedTime);
      } else {
        console.error(data.message);
      }
    };

    fetchData();
  }, []);

  const rows = 6;
  const columns = 7;
  const totalSeats = rows * columns;
  const seats = Array.from({ length: totalSeats }, (_, index) => index + 1);

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex items-center justify-between w-full mb-4">
        <h1 className="absolute left-[300px] top-[25px] text-l font-light">Головоломка 2</h1>
        <div className="w-1/2">
                <img src="/preview2.jpg" alt="Right Image" className="absolute top-[25px] w-[85px] h-[125px] left-[205px] rounded-xl" />
        </div>
        <Link href="/film/001">
          <div className="absolute left-[150px] flex items-center px-4 py-2 text-white-700 rounded-md hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.707 3.293a1 1 0 0 1 1.414 1.414L8.414 10l3.707 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 0 1.414z"
              />
            </svg>
          </div>
        </Link>
      </div>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <div className="grid grid-cols-7 gap-4 mt-8">
        {seats.map((seat) => (
          <div
            key={seat}
            className="relative w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 group"
          >
            <span className="text-white opacity-0 group-hover:opacity-100">{seat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionPage;

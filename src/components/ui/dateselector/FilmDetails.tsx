'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function formatDate(date: Date): { dayOfMonth: string; dayOfWeek: string } {
  const dayOfMonth = date.getDate().toString().padStart(2, '0');
  const dayOfWeek = date.toLocaleDateString('ru-RU', { weekday: 'short' }).toUpperCase();
  return { dayOfMonth, dayOfWeek };
}

const FilmDates = ({ initialDate, filmId }: { initialDate: Date; filmId: string }) => {
  const router = useRouter();
  const [dates, setDates] = useState<Date[]>([]);
  const searchParams = useSearchParams();
  const [activeDate, setActiveDate] = useState<Date | null>(null);
  const [activeButton, setActiveButton] = useState<number | null>(null);

  useEffect(() => {
    const savedActiveDate = localStorage.getItem('activeDate');
    if (savedActiveDate) {
      setActiveDate(new Date(savedActiveDate));
    }
  }, []);
  
  useEffect(() => {
    const tempDates = [];
    for (let i = 0; i < 7; i++) {
      const newDate = new Date(initialDate);
      newDate.setDate(initialDate.getDate() + i);
      tempDates.push(newDate);
    }
    setDates(tempDates);
  }, [initialDate]);

  useEffect(() => {
    const dateParam = searchParams.get('date');
    if (dateParam) {
      const urlDate = new Date(dateParam);
      if (!isNaN(urlDate.getTime())) { // Проверяем, что это валидная дата
        setActiveDate(urlDate);
      }
    }
  }, [searchParams]);

  const isActiveDate = (date: Date, index: number) => {
    return activeDate !== null && date.getTime() === activeDate.getTime() && index === activeButton;
  };

  const handleClick = (date: Date, index: number) => {
    setActiveDate(date);
    setActiveButton(index);

    const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    const formattedDate = localDate.toISOString().split('T')[0];
    
    router.replace(`/film/${filmId}?date=${formattedDate}`);
  };

  useEffect(() => {
    const dateParam = searchParams.get('date');
    if (dateParam) {
      const urlDate = new Date(dateParam);
      if (!isNaN(urlDate.getTime())) { // Проверяем, что это валидная дата
        setActiveDate(urlDate);

        // Находим индекс кнопки, соответствующей выбранной дате
        const index = dates.findIndex(date => date.getTime() === urlDate.getTime());
        if (index !== -1) {
          setActiveButton(index);
        }
      }
    }
  }, [searchParams, dates]);

  return (
    <div className="flex flex-wrap gap-2">
      {dates.map((date, index) => {
        const { dayOfMonth, dayOfWeek } = formatDate(date);

        return (
          <button
            key={index}
            className={`px-10 py-1 focus:outline-none ${isActiveDate(date, index) ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
            onClick={() => handleClick(date, index)}
          >
            <div className="text-2xl font-semibold">{dayOfMonth}</div>
            <div className="text-xm uppercase">{dayOfWeek}</div>
          </button>
        );
      })}
    </div>
  );
};

export default FilmDates;
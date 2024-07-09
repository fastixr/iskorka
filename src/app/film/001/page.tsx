// src/app/film/[id]/page.tsx

import React from 'react';
import styles from './Page001.module.css';
import FilmDates from '@/components/ui/dateselector/FilmDetails';
import SessionButton from '@/components/ui/sessionbutton/SessionButton';

const Film001: React.FC = () => {
  const initialDate = new Date(); // Или любая другая инициализация Date
  const filmId = '001';
  const sessionTimes = ['08:40', '18:30', '23:00'];

  return (
    <><div className="relative">
        <div
          className={`${styles.innerShadow} relative top-[-40px] left-0 w-full h-[700px] bg-cover bg-center z-0 blur-[3px]`}
          style={{ backgroundImage: "url('/background1.jpg')" }}
        ></div>

        <div className="relative top-[-1190px] z-10 bg-black bg-opacity-50 text-white py-20 h-[200px]" style={{ marginTop: '100vh' }}>
            <div className="container mx-auto flex items-center py-20 bg-black bg-opacity-0">
              <div className="w-1/2">
                <img src="/preview1.jpg" alt="Left Image" className="relative top-[-325px] w-[230px] h-[330px] left-[95px]" />
              </div>
              <div className="relative top-[-250px] left-[-450px] w-1/2 pl-10">
                <h1 className="text-4xl font-bold mb-4">Головоломка 2</h1>
                <h2 className="text-l font-bold mb-4">1ч 50м</h2>
                <p className="relative top-[-42px] left-[75px] italic text-lg">
                мультфильм, комедия, семейный, фэнтези
                </p>
                <p className="absolute top-[100px] text-l">
                Покупка фильма осуществляется не позднее, чем за 10 минут до начала сеанса
                </p>
              </div>
            </div>
        </div>

        <p className="absolute top-[680px] left-[280px] text-l text-gray-600">
              ИЮЛЬ
            </p>

        <div className="absolute top-[705px] left-[240px] z-50">
          <FilmDates initialDate={initialDate} filmId={filmId}/>
        </div>

        <div className="relative">
          <div
            className={`${styles.innerShadow2} absolute top-[-1050px] left-[280px] w-[250px] h-[180px] rounded-[5px] bg-cover bg-center z-0`}
            style={{ backgroundImage: "url('/cinema.jpg')" }}>
          </div>
          <h2 className="absolute text-[25px] font-bold mb-4 top-[-1040px] left-[540px] z-50">Искорка Дружбы</h2>
          <h2 className="absolute text-[12px] font-medium text-gray-400 mb-4 top-[-1020px] left-[615px] z-50">11 ЗАЛОВ</h2>
          <h2 className="absolute text-[12px] font-medium text-gray-400 mb-4 top-[-1020px] left-[700px] z-50">БЕСПЛАТНАЯ ПАРКОВКА</h2>
          <h2 className="absolute text-[12px] font-medium text-gray-400 mb-4 top-[-1020px] left-[875px] z-50">ИГРОВАЯ ЗОНА</h2>
          <h2 className="absolute text-[12px] font-medium text-gray-400 mb-4 top-[-1020px] left-[995px] z-50">КИНОБАР</h2>
          <h2 className="absolute text-l font-medium mb-4 top-[-1025px] left-[635px] z-50">г. Москва, ул. Фестивальная, д. 4к3</h2>
          <h2 className="absolute text-[12px] font-medium mb-4 top-[-1000px] left-[635px] z-50">2D</h2>
        </div>

        <div className="absolute text-xl top-[1000px] left-[617px] z-50 flex">
          {sessionTimes.map((time, index) => (
            <SessionButton key={index} time={time} />
          ))}
        </div>

        <div className="relative z-10 bg-black text-white py-10">
          <div className="container mx-auto">
            <p className="text-lg">
              В разработке
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Film001;

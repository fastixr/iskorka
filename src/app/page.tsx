'use client'

import Block from '@/components/ui/block/Block';
import Carousel from '@/components/ui/carousel/Carousel';
import SearchBar from '@/components/ui/search/SearchBar';
import { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {

  const blocks = [
    {
      imageSrc: '/preview1.jpg',
      title: 'Головоломка 2',
      description: 'мультфильм, комедия, семейный, фэнтези',
    },
    {
      imageSrc: '/preview2.jpg',
      title: 'Майор Гром: Игра',
      description: 'приключения, экшн',
    },
    {
      imageSrc: '/preview3.jpg',
      title: 'Плохие парни до конца',
      description: 'боевик, комедия, криминал',
    },
    {
      imageSrc: '/preview4.jpg',
      title: 'Три богатыря. Ни дня без подвига',
      description: 'анимационное приключение',
    },
    {
      imageSrc: '/preview5.jpg',
      title: 'Гарфилд',
      description: 'мультфильм, комедия, семейный',
    },
    {
      imageSrc: '/preview6.jpg',
      title: 'Планета обезьян: Новое царство',
      description: 'фантастика, боевик, приключения',
    },
    {
      imageSrc: '/preview7.jpg',
      title: 'Тур с Иванушками',
      description: 'роуд-муви, романтическая комедия',
    },
  ];

  return (
    <><div>
      <Carousel />
    </div><div className="flex flex-col items-center space-y-4">
        <div className="flex justify-center space-x-4 w-[1280px] ">
          {blocks.slice(0, 4).map((block, index) => (
            <Block
              key={index}
              imageSrc={block.imageSrc}
              title={block.title}
              description={block.description}
              blockNumber={index + 1} />
          ))}
        </div>
        <div className="flex justify-center space-x-4 w-[1280px]">
          {blocks.slice(4, 7).map((block, index) => (
            <Block
              key={index + 4}
              imageSrc={block.imageSrc}
              title={block.title}
              description={block.description}
              blockNumber={index + 5} />
          ))}
        </div>
      </div></>
  );
};

export default Home;

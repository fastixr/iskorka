import React from 'react';
import Link from 'next/link';

const films = [
  { id: '001', title: 'Головоломка 2' },
  { id: '002', title: 'Майор Гром: Игра' },
  { id: '003', title: 'Плохие парни до конца' },
  { id: '004', title: 'Три богатыря. Ни дня без подвига' },
  { id: '005', title: 'Гарфилд' },
  { id: '006', title: 'Планета обезьян: Новое царство' },
  { id: '007', title: 'Тур с Иванушками' },
];

const FilmPage: React.FC = () => {
  return (
    <div>
      <h1>Films</h1>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link href={`/film/${film.id}`}>
              <div>{film.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmPage;
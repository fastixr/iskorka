import React from 'react';
import Link from 'next/link';

type BlockProps = {
  imageSrc: string;
  title: string;
  description: string;
  blockNumber: number;
};

const Block: React.FC<BlockProps> = ({ imageSrc, title, description, blockNumber }) => {
  const formattedNumber = String(blockNumber).padStart(3, '0');

  return (
    <Link href={`/film/${formattedNumber}`}>
      <div className="w-[300px] h-[450px] p-4 flex flex-col items-center cursor-pointer text-center">
        <img src={imageSrc} alt={title} className="w-[200px] h-[300px] object-cover mb-4" />
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </Link>
  );
};

export default Block;
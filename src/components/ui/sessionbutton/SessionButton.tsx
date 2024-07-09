'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const SessionButton = ({ time }: { time: string }) => {
  const [sessionId, setSessionId] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 1000000).toString();
    setSessionId(randomId);

    const [hour, minute] = time.split(':').map(Number);
    const sessionTime = new Date();
    sessionTime.setHours(hour, minute, 0, 0);

    const checkTime = () => {
      const currentTime = new Date();
      const timeDifference = (sessionTime.getTime() - currentTime.getTime()) / (1000 * 60);
      if (timeDifference < 10) {
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
    };

    const intervalId = setInterval(checkTime, 30000);
    checkTime();

    return () => clearInterval(intervalId);
  }, [time]);

  if (!sessionId) {
    return null;
  }

  return (
    <div>
      {isDisabled ? (
        <span className="inline-block mr-4 text-gray-500 bg-black font-bold py-2 px-4 rounded text-nowrap">
          {time}
        </span>
      ) : (
        <Link href={`/order/session/${sessionId}`}>
          <div className="inline-block mr-4 text-blue-500 bg-black font-bold py-2 px-4 rounded text-nowrap">
            {time}
          </div>
        </Link>
      )}
    </div>
  );
};

export default SessionButton;

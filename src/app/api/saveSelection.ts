import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { date, time } = req.body;
    const filePath = path.resolve('data.json');
    const data = JSON.stringify({ selectedDate: date, selectedTime: time }, null, 2);

    fs.writeFileSync(filePath, data, 'utf8');

    res.status(200).json({ message: 'Data saved successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;

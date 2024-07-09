'use client'

import React, { useState, useEffect } from 'react';
import { getTickets, deleteTicket, updateTicket } from '@/app/utils/localStorage';

const TicketList: React.FC = () => {
  const [tickets, setTickets] = useState<Array<any>>([]);

  useEffect(() => {
    setTickets(getTickets());
  }, []);

  const handleDelete = (id: string) => {
    deleteTicket(id);
    setTickets(getTickets());
  };

  const handleUpdate = (id: string, newDate: string, newTime: string) => {
    updateTicket(id, newDate, newTime);
    setTickets(getTickets());
  };

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">ID</th>
          <th className="py-2">Name</th>
          <th className="py-2">Seat</th>
          <th className="py-2">Date</th>
          <th className="py-2">Time</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{index + 1}</td>
            <td className="border px-4 py-2">{ticket.name}</td>
            <td className="border px-4 py-2">{ticket.seat}</td>
            <td className="border px-4 py-2">{ticket.date}</td>
            <td className="border px-4 py-2">{ticket.time}</td>
            <td className="border px-4 py-2">
              <button
                onClick={() => handleDelete(ticket.id)}
                className="bg-red-500 text-white py-1 px-2 rounded mr-2"
              >
                Delete
              </button>
              <button
                onClick={() => handleUpdate(ticket.id, prompt('New Date', ticket.date)!, prompt('New Time', ticket.time)!)}
                className="bg-yellow-500 text-white py-1 px-2 rounded"
              >
                Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TicketList;

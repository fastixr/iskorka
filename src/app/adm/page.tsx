'use client'

import TicketList from '@/components/ui/ticket/TicketList';
import React from 'react';

const AdminPage: React.FC = () => {
  return (
    <><div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      </div><TicketList /></>
  );
};

export default AdminPage;
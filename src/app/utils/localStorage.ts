interface Ticket {
    id: string;
    name: string;
    seat: string;
    date: string;
    time: string;
  }
  
  export const saveTicket = (ticket: Omit<Ticket, 'id'>) => {
    const tickets = getTickets();
    const newTicket = { ...ticket, id: Date.now().toString() };
    tickets.push(newTicket);
    localStorage.setItem('tickets', JSON.stringify(tickets));
  };
  
  export const getTickets = (): Ticket[] => {
    return JSON.parse(localStorage.getItem('tickets') || '[]');
  };
  
  export const deleteTicket = (id: string) => {
    const tickets = getTickets();
    const updatedTickets = tickets.filter(ticket => ticket.id !== id);
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));
  };
  
  export const updateTicket = (id: string, newDate: string, newTime: string) => {
    const tickets = getTickets();
    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === id) {
        return { ...ticket, date: newDate, time: newTime };
      }
      return ticket;
    });
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));
  };
  
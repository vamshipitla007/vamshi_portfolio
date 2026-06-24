export const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);

export const formatRooms = (value: number) => `${value} ${value === 1 ? 'Room' : 'Rooms'}`;

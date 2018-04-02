export const fetchBookings = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/bookings',
  });
};

export const fetchBooking = (id) => {
   return $.ajax({
     method:'GET',
     url: `/api/bookings/${id}`,
   });
 };

export const createBooking = (booking) => {
  debugger;
  return $.ajax({
    url: '/api/bookings',
    method: 'POST',
    data:{booking: booking}
  });
};

export const deleteBooking = (id) => {
  return $.ajax({
    url: `/api/bookings/${id}`,
    method: 'DELETE'
  });
};

import React from 'react';

const BookingList = ({ bookings }) => {
  return (
    <div>
      <h2>Booked Tables</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              <p>Name: {booking.name}</p>
              <p>Email: {booking.email}</p>
              <p>Date: {booking.date}</p>
              <p>Time: {booking.time}</p>
              <p>Number of Guests: {booking.guests}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingList;

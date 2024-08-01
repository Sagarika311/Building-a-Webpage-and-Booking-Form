import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="guests">Number of Guests:</label>
        <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} required />
      </div>
      <button type="submit">Book Table</button>
    </form>
  );
};

export default BookingForm;

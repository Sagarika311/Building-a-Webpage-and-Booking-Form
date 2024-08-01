import React from 'react';
import BookingForm from './components/BookingForm';
import './App.css';  // Optional: If you have any CSS for styling

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Little Lemon Restaurant Booking</h1>
      </header>
      <main>
        <BookingForm />
      </main>
    </div>
  );
};

export default App;

// App.js
import React, { useState } from 'react';
import Login from './components/Login';
import InputHours from './components/InputHours';
import CalendarView from './components/CalendarView';

const App = () => {
  const [user, setUser] = useState(null);
  const [workingHours, setWorkingHours] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleLogin = (username) => {
    // For demonstration purposes, we'll just set the user in state
    setUser(username);
  };

  const handleSaveHours = (hours) => {
    // Save the entered hours for the selected date
    if (selectedDate) {
      const updatedHours = [...workingHours, { date: selectedDate, hours }];
      setWorkingHours(updatedHours);
    }
  };

  const handleCancelInput = () => {
    // Clear selected date when canceling input
    setSelectedDate(null);
  };

  const handleSelectDate = (slotInfo) => {
    // Update selectedDate when a date is selected in the calendar
    setSelectedDate(slotInfo.start);
  };

  return (
    <div>
      <h1>NSCC Clock-In Application</h1>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <InputHours onSave={handleSaveHours} onCancel={handleCancelInput} />
          <CalendarView events={workingHours} onSelectDate={handleSelectDate} />
        </>
      )}
    </div>
  );
};

export default App;

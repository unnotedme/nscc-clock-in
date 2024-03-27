// App.js
import React, { useState } from 'react';
import Login from './components/Login';
import InputHours from './components/InputHours';
import CalendarView from './components/CalendarView';
import Profile from './components/Profile';
import ErrorReport from './components/ErrorReport';

const App = () => {
  const [user, setUser] = useState(null);
  const [workingHours, setWorkingHours] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showErrorReport, setShowErrorReport] = useState(false);

  const handleLogin = (username) => {
    // Simulate authentication (replace with actual authentication logic)
    setUser(username);
  };

  const handleSaveHours = (hours) => {
    if (selectedDate) {
      // Update working hours for the selected date
      const updatedHours = [...workingHours, { date: selectedDate, hours }];
      setWorkingHours(updatedHours);
      // Close the input section after saving hours
      setSelectedDate(null);
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

  const handleUpdateProfile = (profileData) => {
    // Update user profile information
    // For now, let's just log the updated profile data
    console.log('Updated profile:', profileData);
    // Close the profile section after updating
    setShowProfile(false);
  };

  const handleReportError = (errorDescription) => {
    // Report an error or issue encountered within the application
    // For now, let's just log the error description
    console.log('Error reported:', errorDescription);
    // Close the error report section after submitting
    setShowErrorReport(false);
  };

  return (
    <div>
      <h1>NSCC Clock-In Application</h1>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <button onClick={() => setShowProfile(true)}>Profile</button>
          <button onClick={() => setShowErrorReport(true)}>Report an Error</button>
          <InputHours onSave={handleSaveHours} onCancel={handleCancelInput} />
          <CalendarView events={workingHours} onSelectDate={handleSelectDate} />
          {showProfile && <Profile onUpdateProfile={handleUpdateProfile} />}
          {showErrorReport && <ErrorReport onReportError={handleReportError} />}
        </>
      )}
    </div>
  );
};

export default App;

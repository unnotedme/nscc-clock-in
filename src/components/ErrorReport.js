// ErrorReport.js
import React, { useState } from 'react';

const ErrorReport = () => {
  const [errorDescription, setErrorDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to send error report to administrators
    console.log('Error reported:', errorDescription);
    alert('Error reported! Thank you for your feedback.');
    setErrorDescription('');
  };

  return (
    <div>
      <h2>Error Reporting</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Error Description:
          <textarea
            value={errorDescription}
            onChange={(e) => setErrorDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ErrorReport;

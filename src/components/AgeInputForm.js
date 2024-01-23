import React from 'react';
import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

export default function AgeInputForm( { onAddBirthday } ) {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = function(e) {
e.preventDefault();

if (!day || !month || !year) {
  setError(true);
  setErrorMessage('This field is required');
  return;
};

if (day < 1 || day > 31) {
  setError(true);
  setErrorMessage('Must be a valid day');
  return;
}

if (month < 1 || month > 12) {
  setError(true);
  setErrorMessage('Must be a valid month');
  return;
}

const currentYear = new Date().getFullYear();
if (year > currentYear) {
  setError(true);
  setErrorMessage('Must be in the past');
  return;
}

const newBirthday = {day, month, year};

onAddBirthday(newBirthday);
setDay('');
setMonth('');
setYear('');
setError(false)
setErrorMessage('');
  }


  return (
    <form onSubmit={handleSubmit}>
    <div className='input-container'>
      <label className={error ? 'error' : ''}>
      <span>day</span>
        <input className='input' value={day} onChange={(e) => setDay(Number(e.target.value))} placeholder='DD' />
        {error && <ErrorMessage message={errorMessage} />}
      </label>

      <label className={error ? 'error' : ''}>
      <span>month</span>
        <input className='input' value={month} onChange={(e) => setMonth(Number(e.target.value))} placeholder='MM' />
        {error && <ErrorMessage message={errorMessage} />}
      </label>

      <label className={error ? 'error' : ''}>
      <span>year</span>
        <input className='input' value={year} onChange={(e) => setYear(Number(e.target.value))} placeholder='YYYY'  />
        {error && <ErrorMessage message={errorMessage} />}
      </label>
      </div>

      
<div className='btn-container'>
      <button type='submit'><svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg></button>
      </div>   
    </form>
  )
}


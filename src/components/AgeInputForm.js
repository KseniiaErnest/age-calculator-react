import React from 'react';
import { useState } from 'react';

export default function AgeInputForm( { onAddBirthday } ) {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = function(e) {
e.preventDefault();

if (!day || !month || !year) return;

const newBirthday = {day, month, year};

onAddBirthday(newBirthday);
setDay('');
setMonth('');
setYear('');

  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
      <span>day</span>
        <input className='input' value={day} onChange={(e) => setDay(Number(e.target.value))} placeholder='DD' type='number' min='1' max='31'/>
      </label>

      <label>
      <span>month</span>
        <input className='input' value={month} onChange={(e) => setMonth(Number(e.target.value))} placeholder='MM' type='number' min='1' max='12'/>
      </label>

      <label>
      <span>year</span>
        <input className='input' value={year} onChange={(e) => setYear(Number(e.target.value))} placeholder='YYYY' type='number'/>
      </label>

      <button type='submit'>+</button>
    </form>
  )
}

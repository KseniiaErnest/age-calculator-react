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
console.log(newBirthday);
setDay('');
setMonth('');
setYear('');

  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
      <span>day</span>
        <input value={day} onChange={(e) => setDay(Number(e.target.value))} placeholder='DD'/>
      </label>

      <label>
      <span>month</span>
        <input value={month} onChange={(e) => setMonth(Number(e.target.value))} placeholder='MM'/>
      </label>

      <label>
      <span>year</span>
        <input value={year} onChange={(e) => setYear(Number(e.target.value))} placeholder='YYYY'/>
      </label>

      <button>+</button>
    </form>
  )
}

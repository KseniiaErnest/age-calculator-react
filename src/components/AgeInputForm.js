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
    <div className='input-container'>
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
        <input className='input' value={year} onChange={(e) => setYear(Number(e.target.value))} placeholder='YYYY' type='number' />
      </label>
      </div>

      
<div className='btn-container'>
      <button type='submit'><svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg></button>
      </div>   
    </form>
  )
}

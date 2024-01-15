import React from 'react';
import { differenceInCalendarDays, differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';

export default function AgeDisplay( {birthday} ) {

const now = new Date();
const birthdate = new Date(birthday.year, birthday.month - 1, birthday.day);
console.log('Birth:', birthdate);
console.log(birthdate.getDate());
const years = differenceInYears(now, birthdate);
const months = differenceInMonths(now, birthdate) % 12;
// const days = differenceInCalendarDays(now, birthdate);
const days = differenceInCalendarDays(now, birthdate) - (years * 365 + months * 30);
// differenceInDays(new Date(years, months, 31), new Date(years, months, birthdate.getDate()));

// const diff = now - birthdate;
// const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
// const remainingMilliseconds = diff % (365.25 * 24 * 60 * 60 * 1000);
// const ageDate = new Date(remainingMilliseconds);
// const months = ageDate.getUTCMonth();
// const days = ageDate.getUTCDate() - 1;



console.log(years, months, days);


 

  return (
    <div>
    <p><span>{birthday.year}</span>years</p>
      <p><span>{birthday.month}</span>months</p>
      <p><span>{birthday.day}</span>days</p>
    </div>
  )
}

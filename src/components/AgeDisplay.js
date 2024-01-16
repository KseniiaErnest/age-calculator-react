import React from 'react';
import { differenceInCalendarDays, differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';

export default function AgeDisplay( {birthday} ) {
console.log(birthday);
const now = new Date();
const birthdate = new Date(birthday.year, birthday.month - 1, birthday.day);
console.log('Birth:', birthdate);
console.log(birthdate.getDate());
const years = differenceInYears(now, birthdate);
const months = differenceInMonths(now, birthdate) % 12;
const days = differenceInDays(now, birthdate) - differenceInDays(now, new Date(now.getFullYear() - years, now.getMonth() - months, now.getDate()));


  return (
    <div>
    <p><span>{years}</span>years</p>
      <p><span>{months}</span>months</p>
      <p><span>{days}</span>days</p>
    </div>
  )
}



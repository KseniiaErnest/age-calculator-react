import React from 'react'

export default function AgeDisplay( {birthday} ) {

  return (
    <div>
    <p><span>{birthday.year}</span>years</p>
      <p><span>{birthday.month}</span>months</p>
      <p><span>{birthday.day}</span>days</p>
    </div>
  )
}

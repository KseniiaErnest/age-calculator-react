import React from "react";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

export default function AgeDisplay({
  birthday,
  dayError,
  monthError,
  yearError,
}) {
  if (dayError || monthError || yearError) {
    return (
      <div className="result-container">
        <p>
          <span>- -</span> years
        </p>
        <p>
          <span>- -</span> months
        </p>
        <p>
          <span>- -</span> days
        </p>
      </div>
    );
  }


  // If there is no birthday prop, then display no calculation
  if (!birthday || !birthday.year || !birthday.month || !birthday.day)
    return (
      <div className="result-container">
        <p>
          <span>- -</span> years
        </p>
        <p>
          <span>- -</span> months
        </p>
        <p>
          <span>- -</span> days
        </p>
      </div>
    );

  // Logic for age calulation
  const now = new Date();
  const birthdate = new Date(birthday.year, birthday.month - 1, birthday.day);
  const years = differenceInYears(now, birthdate);
  const months = differenceInMonths(now, birthdate) % 12;
  const days =
    differenceInDays(now, birthdate) -
    differenceInDays(
      now,
      new Date(
        now.getFullYear() - years,
        now.getMonth() - months,
        now.getDate()
      )
    );

  return (
    <div className="result-container">
      <p>
        <span>{years}</span> years
      </p>
      <p>
        <span>{months}</span> months
      </p>
      <p>
        <span>{days}</span> days
      </p>
    </div>
  );
}

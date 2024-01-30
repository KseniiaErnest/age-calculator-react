import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export default function AgeInputForm({ onAddBirthday, dayError, setDayError, monthError, setMonthError, yearError, setYearError }) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset all error states
    setDayError("");
    setMonthError("");
    setYearError("");

    // Check for empty fields
    if (!day && !month && !year) {
      setDayError("This field is required");
      setMonthError("This field is required");
      setYearError("This field is required");
      return;
    }

    // Check individual fields for errors
    if (!day) {
      setDayError("This field is required");
    } else if (day < 1 || day > 31) {
      setDayError("Must be a valid day");
    } else if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
      setDayError('Must be less than 31');
    }  else if (month === 2) {
      const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
      if (day > (isLeapYear ? 29 : 28)) {
        setDayError(`February had ${isLeapYear ? 29 : 28} days`);
      }
    }

    if (!month) {
      setMonthError("This field is required");
    } else if (month < 1 || month > 12) {
      setMonthError("Must be a valid month");
    }

    if (!year) {
      setYearError("This field is required");
    } else {
      const currentYear = new Date().getFullYear();
      if (year > currentYear) {
        setYearError("Must be in the past");
      }
    }

  console.log("dayError:", dayError);
  console.log("monthError:", monthError);
  console.log("yearError:", yearError);

    // If no errors, proceed with form submission
    
      const newBirthday = { day, month, year };
      onAddBirthday(newBirthday);
  
      // Clear input values after successful submission
      setDay("");
      setMonth("");
      setYear("");
    

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label className={dayError ? "error" : ""}>
          <span>day</span>
          <input
            className="input"
            value={day}
            onChange={(e) => setDay(Number(e.target.value))}
            placeholder="DD"
          />
          {dayError && <ErrorMessage message={dayError} />}
        </label>

        <label className={monthError ? "error" : ""}>
          <span>month</span>
          <input
            className="input"
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            placeholder="MM"
          />
          {monthError && <ErrorMessage message={monthError} />}
        </label>

        <label className={yearError ? "error" : ""}>
          <span>year</span>
          <input
            className="input"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            placeholder="YYYY"
          />
          {yearError && <ErrorMessage message={yearError} />}
        </label>
      </div>

      <div className="btn-container">
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="44"
            viewBox="0 0 46 44"
          >
            <g fill="none" stroke="#FFF" strokeWidth="2">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </button>
      </div>
    </form>
  );
}

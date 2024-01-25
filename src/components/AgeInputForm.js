// import React from "react";
// import { useState } from "react";
// import ErrorMessage from "./ErrorMessage";

// export default function AgeInputForm({ onAddBirthday }) {
//   const [day, setDay] = useState("");
//   const [month, setMonth] = useState("");
//   const [year, setYear] = useState("");
//   const [dayError, setDayError] = useState(false);
//   const [monthError, setMonthError] = useState(false);
//   const [yearError, setYearError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = function (e) {
//     e.preventDefault();

//     if (!day) {
//       setDayError(true);
//     }

//     if (!month) {
//       setMonthError(true);
//     }

//     if (!year) {
//       setYearError(true);
//     }

//     if (!day || !month || !year) {
//       setDayError(true);
//       setMonthError(true);
//       setYearError(true);
//       setErrorMessage("This field is required");
//       return;
//     }

//     if (day < 1 || day > 31) {
//       setDayError(true);
//       setErrorMessage("Must be a valid day");
//       return;
//     }

//     if (month < 1 || month > 12) {
//       setMonthError(true);
//       setErrorMessage("Must be a valid month");
//       return;
//     }

//     const currentYear = new Date().getFullYear();
//     if (year > currentYear) {
//       setYearError(true);
//       setErrorMessage("Must be in the past");
//       return;
//     }

//     const newBirthday = { day, month, year };

//     onAddBirthday(newBirthday);
//     setDay("");
//     setMonth("");
//     setYear("");
//     setDayError(false);
//     setMonthError(false);
//     setYearError(false);
//     setErrorMessage("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="input-container">
//         <label className={dayError ? "error" : ""}>
//           <span>day</span>
//           <input
//             className="input"
//             value={day}
//             onChange={(e) => setDay(Number(e.target.value))}
//             placeholder="DD"
//           />
//           {dayError && <ErrorMessage message={errorMessage} />}
//         </label>

//         <label className={monthError ? "error" : ""}>
//           <span>month</span>
//           <input
//             className="input"
//             value={month}
//             onChange={(e) => setMonth(Number(e.target.value))}
//             placeholder="MM"
//           />
//           {monthError && <ErrorMessage message={errorMessage} />}
//         </label>

//         <label className={yearError ? "error" : ""}>
//           <span>year</span>
//           <input
//             className="input"
//             value={year}
//             onChange={(e) => setYear(Number(e.target.value))}
//             placeholder="YYYY"
//           />
//           {yearError && <ErrorMessage message={errorMessage} />}
//         </label>
//       </div>

//       <div className="btn-container">
//         <button type="submit">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="46"
//             height="44"
//             viewBox="0 0 46 44"
//           >
//             <g fill="none" stroke="#FFF" strokeWidth="2">
//               <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
//             </g>
//           </svg>
//         </button>
//       </div>
//     </form>
//   );
// }

//////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import ErrorMessage from "./ErrorMessage";

// export default function AgeInputForm({ onAddBirthday }) {
//   const [day, setDay] = useState("");
//   const [month, setMonth] = useState("");
//   const [year, setYear] = useState("");
//   const [dayError, setDayError] = useState(false);
//   const [monthError, setMonthError] = useState(false);
//   const [yearError, setYearError] = useState(false);
//   const [errorMessages, setErrorMessages] = useState([]);

//   const handleSubmit = function (e) {
//     e.preventDefault();

//     // Reset all error states and messages
//     setDayError(false);
//     setMonthError(false);
//     setYearError(false);
//     setErrorMessages([]);

//     if (!day && !month && !year) {
//       setDayError(true);
//       setMonthError(true);
//       setYearError(true);
//       setErrorMessages((prevMessages) => [
//         ...prevMessages,
//         "This field is required",
//       ]);
//       return;
//     }

//     if (!day) {
//       setDayError(true);
//       setErrorMessages((prevMessages) => [...prevMessages, "Day is required"]);
//     }

//     if (day < 1 || day > 31) {
//       setDayError(true);
//       setErrorMessages((prevMessages) => [
//         ...prevMessages,
//         "Must be a valid day",
//       ]);
//     }

//     if (!month) {
//       setMonthError(true);
//       setErrorMessages((prevMessages) => [
//         ...prevMessages,
//         "Month is required",
//       ]);
//     }

//     if (month < 1 || month > 12) {
//       setMonthError(true);
//       setErrorMessages((prevMessages) => [
//         ...prevMessages,
//         "Must be a valid month",
//       ]);
//     }

//     if (!year) {
//       setYearError(true);
//       setErrorMessages((prevMessages) => [...prevMessages, "Year is required"]);
//     }

//     const currentYear = new Date().getFullYear();
//     if (year > currentYear) {
//       setYearError(true);
//       setErrorMessages((prevMessages) => [
//         ...prevMessages,
//         "Must be in the past",
//       ]);
//     }

//     // Check if any errors are present
//     if (errorMessages.length > 0) {
//       return;
//     }

//     const newBirthday = { day, month, year };

//     // Clear input values after successful submission
//     onAddBirthday(newBirthday);
//     setDay("");
//     setMonth("");
//     setYear("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="input-container">
//         <label className={dayError ? "error" : ""}>
//           <span>day</span>
//           <input
//             className="input"
//             value={day}
//             onChange={(e) => setDay(Number(e.target.value))}
//             placeholder="DD"
//           />
//           {dayError && <ErrorMessage message={errorMessages[0]} />}
//         </label>

//         <label className={monthError ? "error" : ""}>
//           <span>month</span>
//           <input
//             className="input"
//             value={month}
//             onChange={(e) => setMonth(Number(e.target.value))}
//             placeholder="MM"
//           />
//           {monthError && <ErrorMessage message={errorMessages[1]} />}
//         </label>

//         <label className={yearError ? "error" : ""}>
//           <span>year</span>
//           <input
//             className="input"
//             value={year}
//             onChange={(e) => setYear(Number(e.target.value))}
//             placeholder="YYYY"
//           />
//           {yearError && <ErrorMessage message={errorMessages[2]} />}
//         </label>
//       </div>

//       <div className="btn-container">
//         <button type="submit">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="46"
//             height="44"
//             viewBox="0 0 46 44"
//           >
//             <g fill="none" stroke="#FFF" strokeWidth="2">
//               <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
//             </g>
//           </svg>
//         </button>
//       </div>
//     </form>
//   );
// }

//////////////////////////////////////////////////////
// import React, { useState } from "react";
// import ErrorMessage from "./ErrorMessage";

// export default function AgeInputForm({ onAddBirthday }) {
//   const [day, setDay] = useState("");
//   const [month, setMonth] = useState("");
//   const [year, setYear] = useState("");

//   const [dayError, setDayError] = useState("");
//   const [monthError, setMonthError] = useState("");
//   const [yearError, setYearError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // if (!day || !month || !year) {
//     //         setDayError(true);
//     //         setMonthError(true);
//     //         setYearError(true);
//     //         setErrorMessage("This field is required");
//     //         return;
//     //       }

//     // Check individual fields for errors
//     if (day < 1 || day > 31) {
//       setDayError("Must be a valid day");
//       console.log("Invalid day:", day);
//     } else if (!day) {
//       setDayError("This field is required");
//       console.log("Empty day");
//     }

//     if (month < 1 || month > 12) {
//       setMonthError("Must be a valid month");
//       console.log("Invalid month:", month);
//     } else if (!month) {
//       setMonthError("This field is required");
//       console.log("Empty month");
//     }

//     if (!year) {
//       setYearError("This field is required");
//       console.log("Empty year");
//     } else {
//       const currentYear = new Date().getFullYear();
//       if (year > currentYear) {
//         setYearError("Must be in the past");
//         console.log("Invalid year:", year);
//       }
//     }

//     // If no errors, proceed with form submission
//     const newBirthday = { day, month, year };
//     onAddBirthday(newBirthday);

//     // Clear input values after successful submission
//     setDay("");
//     setMonth("");
//     setYear("");
//     setDayError("");
//     setMonthError("");
//     setYearError("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="input-container">
//         <label className={dayError ? "error" : ""}>
//           <span>day</span>
//           <input
//             className="input"
//             value={day}
//             onChange={(e) => setDay(Number(e.target.value))}
//             placeholder="DD"
//           />
//           {dayError && <ErrorMessage message={dayError} />}
//         </label>

//         <label className={monthError ? "error" : ""}>
//           <span>month</span>
//           <input
//             className="input"
//             value={month}
//             onChange={(e) => setMonth(Number(e.target.value))}
//             placeholder="MM"
//           />
//           {monthError && <ErrorMessage message={monthError} />}
//         </label>

//         <label className={yearError ? "error" : ""}>
//           <span>year</span>
//           <input
//             className="input"
//             value={year}
//             onChange={(e) => setYear(Number(e.target.value))}
//             placeholder="YYYY"
//           />
//           {yearError && <ErrorMessage message={yearError} />}
//         </label>
//       </div>

//       <div className="btn-container">
//         <button type="submit">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="46"
//             height="44"
//             viewBox="0 0 46 44"
//           >
//             <g fill="none" stroke="#FFF" strokeWidth="2">
//               <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
//             </g>
//           </svg>
//         </button>
//       </div>
//     </form>
//   );
// }
///////////////////////////////////////////////////////

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
      console.log("Invalid day:", day);
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

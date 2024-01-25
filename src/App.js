
import { useState } from 'react';
import AgeDisplay from './components/AgeDisplay';
import AgeInputForm from './components/AgeInputForm';

// fonts
import './fonts/Poppins-Bold.ttf';
import './fonts/Poppins-BoldItalic.ttf';
import './fonts/Poppins-Bold.ttf';
import './fonts/Poppins-ExtraBoldItalic.ttf'

function App() {
  const [birthday, setBirthday] = useState({day: '', month: '', year: ''});

  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");
  
const handleBirthday = (newBirthday) => {
setBirthday(newBirthday)
};

  return (
    <div className='app'>
    <AgeInputForm onAddBirthday={handleBirthday} dayError={dayError} setDayError={setDayError} monthError={monthError} setMonthError={setMonthError} yearError={yearError} setYearError={setYearError}/>
    <AgeDisplay birthday={birthday} dayError={dayError} monthError={monthError} yearError={yearError}/>
    </div>
  );
}

export default App;

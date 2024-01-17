
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
  
const handleBirthday = (newBirthday) => {
setBirthday(newBirthday)
};

  return (
    <div className='app'>
    <AgeInputForm onAddBirthday={handleBirthday}/>
    <AgeDisplay birthday={birthday} />
    </div>
  );
}

export default App;

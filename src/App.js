import React, { useState } from 'react';
import './App.css';
import MainPage from './Components/MainPage/MainPage';

function App() {

  // Initialise useState hook for storing and updating new notes
  const [allNotes, setAllNotes] = useState([]);

  return (
    <div className="App">
      <MainPage allNotes={allNotes} setAllNotes={setAllNotes} />
    </div>
  );
}

export default App;

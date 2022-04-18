import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';

function App() {

  // Initialise useState hook for storing and updating new notes
  const [allNotes, setAllNotes] = useState([]);

  return (
    <div className="App">
      <Header />
      <MainPage allNotes={allNotes} setAllNotes={setAllNotes} />
    </div>
  );
}

export default App;

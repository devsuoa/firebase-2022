import React, { useState } from 'react';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = { 
  // your api key
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

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

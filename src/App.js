import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import React, { useState, useEffect } from 'react';
import './App.css';
import MainPage from './Components/MainPage/MainPage';


const firebaseConfig = { // todo put in external file
  // your api key
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

function App() {
  // Initialise useState hook for storing and updating new notes
  const [allNotes, setAllNotes] = useState([]);
  
  useEffect(() => {
    const getNotes = async () => {
      const notesRef = collection(db, 'notes');
      const notesSnapShot = await getDocs(notesRef)
      const notesList = notesSnapShot.docs.map(doc => doc.data());
      setAllNotes(notesList)
    }
    getNotes()
  }, []);



  return (
    <div className="App">
      <MainPage allNotes={allNotes} setAllNotes={setAllNotes} />
    </div>
  );
}



export default App;

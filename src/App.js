import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import React, { useState, useEffect } from 'react';
import './App.css';
import MainPage from './Components/MainPage/MainPage';


const firebaseConfig = { 
  // your api key
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

function App() {
  // Initialise useState hook for storing and updating new notes
  const [allNotes, setAllNotes] = useState([]);
  
  useEffect(() => {
    const notesRef = collection(db, 'notes');
    getDocs(notesRef).then( notesSnapShot => {
      const notesList = notesSnapShot.docs.map( snapShot => {
        return {
          ...snapShot.data(),
          id: snapShot.id
        }
      });
      setAllNotes(notesList)
    })
});



  return (
    <div className="App">
      <MainPage allNotes={allNotes} setAllNotes={setAllNotes} />
    </div>
  );
}

export default App;

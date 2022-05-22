import { deleteDoc } from "firebase/firestore/lite";
import React from "react";
import "./Note.css";

export default function Note({noteTitle, noteCategory, noteMessage, allNotes, setAllNotes, noteRef}) {

    async function deleteNote() {
      deleteDoc(noteRef)
      // Create new array to store all notes except deleted note
      const newAllNotes = [];

      // Add all notes to array except the deleted note
      allNotes.forEach(note => {
          if (note.title !== noteTitle && note.category !== noteCategory) {
              newAllNotes.push(note);
          }
      })

      // Update state variable that stores all notes to contain new array of notes
      setAllNotes(newAllNotes);
   
    }

    return (
        <div className="note">
            <p id="note-category">{noteCategory}</p>
            <p id="note-title">{noteTitle}</p>
            <p id="note-message">{noteMessage}</p>
            <button id="del-button" onClick={deleteNote}>Delete</button>
        </div>
    )
}
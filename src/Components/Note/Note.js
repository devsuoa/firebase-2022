import { deleteDoc } from "firebase/firestore/lite";
import React from "react";
import "./Note.css";

export default function Note({noteTitle, noteCategory, noteMessage, allNotes, setAllNotes, noteRef}) {

    function deleteNote() {
      // Add all notes to array except the deleted note
      deleteDoc(doc(db, 'notes', noteId)).then(() => {
        const newAllNotes = allNotes.filter(note => note.id !== noteId)
        setAllNotes(newAllNotes);
      })
   
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
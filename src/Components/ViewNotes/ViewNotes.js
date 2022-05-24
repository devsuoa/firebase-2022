import React from "react";
import "./ViewNotes.css";
import Note from "../Note/Note";

export default function ViewNotes({allNotes, setAllNotes}) {
    
    return (
        <div className="view-notes">
            <div className="notes-grid">
                {allNotes.map((note) => {
                    return (
                        <Note noteRef={note.ref} noteTitle={note.title} noteCategory={note.category} noteMessage={note.message} allNotes={allNotes} setAllNotes={setAllNotes} />
                )})}
            </div>
        </div>
    )
}
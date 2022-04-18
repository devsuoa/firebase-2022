import React from "react";
import "./NewNote.css";

export default function New({allNotes, setAllNotes}) {

    function createNote() {
        
        // Retrieve user text from DOM and save it into variables
        const noteTitle = document.getElementById("newTitle").value;
        const noteCategory = document.getElementById("newCategory").value;
        const noteMessage = document.getElementById("newMessage").value;

        // Creating an object out of the variables
        const note = {
            title: noteTitle,
            category: noteCategory,
            message: noteMessage
        }

        // CLearing the inputs on the page
        document.getElementById("newTitle").value = "";
        document.getElementById("newCategory").value = "";
        document.getElementById("newMessage").value = "";

        // Adding the new note object to the array containing all notes
        setAllNotes([...allNotes, note]);
    }

    return (
        <div className="new-note">
            <p>Create New Note</p>
            <input id="newTitle" type="text" placeholder="Title" name="title"/>
            <input id="newCategory" type="text" placeholder="Category" name="category"/>
            <textarea id="newMessage" name="message"></textarea>
            <button onClick={createNote} type="submit">Create</button>
        </div>
    )
}
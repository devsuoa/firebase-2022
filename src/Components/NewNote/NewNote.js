import React from "react";
import "./NewNote.css";

export default function New({allNotes, setAllNotes}) {

    function createNote() {
        
        // Retrieve user text from DOM and save it into variables
        const noteTitle = document.getElementById("newTitle").value;
        const noteCategory = document.getElementById("newCategory").value;
        const noteText = document.getElementById("newText").value;

        // Creating an object out of the variables
        const note = {
            title: noteTitle,
            category: noteCategory,
            message: noteText
        }

        // CLearing the inputs on the page
        document.getElementById("newTitle").value = "";
        document.getElementById("newCategory").value = "";
        document.getElementById("newText").value = "";

        // Adding the new note object to the array containing all notes
        setAllNotes([...allNotes, note]);
    }

    return (
        <div className="new-note">
            <input id="newTitle" type="text" placeholder="Enter task title"/>
            <input id="newCategory" type="text" placeholder="Enter a category"/>
            <textarea id="newText" placeholder="Enter descriptions"></textarea>
            <button id="addButton" onClick={createNote} type="submit">Add</button>
        </div>
    )
}
import React from "react";
import "./MainPage.css";
import NewNote from "../../Components/NewNote/NewNote";
import ViewNotes from "../../Components/ViewNotes/ViewNotes";

export default function MainPage({allNotes, setAllNotes}) {
    
    return (  
        <div className="main-page">
            <div className="page-sections">
                
                <div className="left-section">
                    <NewNote allNotes={allNotes} setAllNotes={setAllNotes} />
                </div>

                <div className="right-section">
                    <ViewNotes allNotes={allNotes} setAllNotes={setAllNotes} />
                </div>
            </div>
        </div>
    )
}
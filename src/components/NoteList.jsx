import React from "react";
import Note from "./Note";
import '../styles/NoteList.scss'
import AddNote from "./AddNote";
const NoteList = ({notes, saveNote, deleteNote}) => {
  return (
    <div className="noteList">
        <AddNote saveNote={saveNote}></AddNote>
        {notes.map(note =>{
            return <Note {...note} key={note.id} deleteNote={deleteNote}></Note>
        })}
     
    </div>
  );
};

export default NoteList;

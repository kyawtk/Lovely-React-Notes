import React from "react";
import '../styles/Note.scss'
import { MdDeleteForever } from "react-icons/md";
const Note = ({text, id, date ,deleteNote}) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever onClick={()=>deleteNote(id)} className="delete-btn"></MdDeleteForever>
      </div>

    </div>
  );
};

export default Note;

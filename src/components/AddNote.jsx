import React, { useState } from 'react'

const AddNote = ({saveNote}) => {
    const [text , setText] = useState('')
    const charLimit =300;
    function handleText (e){
        if(text.length  < charLimit){
            setText(e.target.value)
        }
        
    }
    function handleSave(e){
        saveNote(text)
        setText('')
    }
  return (
    <div className="note new">
        <textarea name="" id="" cols="30" rows="10" onChange={handleText} value={text} placeholder='Type to add a note...'></textarea>
        <div className="note-footer">
            <small>
                CharRemaining : {charLimit  - text.length}
            </small>
            <button className='save' onClick={handleSave}>Save</button>
        </div>
    </div>
  )
}

export default AddNote
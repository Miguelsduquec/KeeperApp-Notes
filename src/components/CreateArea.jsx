import React, { useState } from "react";


function CreateArea(props) {

//initialize
  const [note, setNote]=useState({
    title:"",
    content:""
  });

//read values and store them
  function handleChange(event){
    const {name,value}=event.target;

    setNote(prevNote=>{
      return{
        ...prevNote,
        [name]:value
      };
    });
  }

function submitNote(event){
  props.onAdd(note); // pass the note to the app
  event.preventDefault(); //prevent page to refresh

  //clear fields
  setNote({
    title:"",
    content:""
  })

}

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />

        <button onClick={submitNote}>Add</button>

      </form>
    </div>
  );
}

export default CreateArea;

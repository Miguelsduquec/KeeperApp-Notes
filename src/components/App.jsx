import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

//create an array
  const [Notes, setNotes]=useState([]);

//store values passed into an array
function addNote(newNote){
  setNotes(prevNotes => {
    return [... prevNotes,newNote];
  });
  console.log(newNote);
}

function deleteNote(id){
  console.log("Delete was trigerre");
  setNotes(prevNotes => {
   return prevNotes.filter((noteItem, index) => {
    return index!==id;
    })
  });

}

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>

      
      {Notes.map((noteItem, index) => {
      return <Note 
        key={index}    
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
        />
}
)
}

      <Footer />
    </div>
  );
}

export default App;

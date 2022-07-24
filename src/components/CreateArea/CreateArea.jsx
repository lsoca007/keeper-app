import React, { useState } from "react";
import './createArea.css';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { TrendingUpRounded } from "@mui/icons-material";

function CreateArea(props) {

  const [isExpanded, setExpanded]= useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setNote( prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function submitNote(event){
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="CreateNote">
        { isExpanded && (

          <input name="title" placeholder="Title" value={note.title} onChange={handleChange}/>
        )}
        
        <textarea 
        name="content"
        onClick={expand} 
        placeholder="Take a note..." 
        rows={isExpanded ? 3 : 1}
        value={note.content}
        onChange={handleChange}
         />
         <Zoom in={isExpanded}>
          <Fab onClick={submitNote}><AddIcon/></Fab>
         </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;

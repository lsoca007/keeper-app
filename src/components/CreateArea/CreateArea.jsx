import React from "react";
import './createArea.css';

function CreateArea() {
  return (
    <div>
      <form className="CreateNote">
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

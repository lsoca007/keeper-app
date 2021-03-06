import React, { useState } from 'react';
import './App.css';
import './components/Header/Header';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Note from './components/Note/Note';
//import notes from './components/Note/notes';
import Login from './components/Login/login';
import CreateArea from './components/CreateArea/CreateArea';


var isLoggedIn = true;
var userIsRegisterd = false;


function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]; // get the previous notes and add the new note at the end
    });
  }
  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !==id;
      })
    })

  }  

  

  return (
    <div className="App"> 
      <Header/>
      <CreateArea onAdd={addNote}/>
      {isLoggedIn === true ?
      notes.map(  (noteItem, index) => 
                  <Note key = {index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete= {deleteNote}
                  />
                ) : <Login isRegistered = {userIsRegisterd}/>}     
      <Footer/>
    </div>
  );
}

export default App;

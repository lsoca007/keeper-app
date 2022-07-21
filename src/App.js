import React from 'react';
import './App.css';
import './components/Header/Header';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Note from './components/Note/Note';
import notes from './components/Note/notes';
import Login from './components/Login/login';
import CreateArea from './components/CreateArea/CreateArea';


var isLoggedIn = true;
var userIsRegisterd = false;

function App() {
  return (
    <div className="App"> 
      <Header/>
      <CreateArea/>
      {isLoggedIn === true ?
      notes.map(  noteItem => 
                  <Note key = {noteItem.key}
                        title={noteItem.title}
                        content={noteItem.content}
                  />
                ) : <Login isRegistered = {userIsRegisterd}/>}     
      <Footer/>
    </div>
  );
}

export default App;

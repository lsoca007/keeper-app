import React from 'react';
import './App.css';
import './components/Header/Header';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Note from './components/Note/Note';
import notes from './components/Note/notes';


function App() {
  return (
    <div className="App">
      <Header/>
      {notes.map(  noteItem => 
                  <Note key = {noteItem.key}
                        title={noteItem.title}
                        content={noteItem.content}
                  />
                )}
      <Footer/>
    </div>
  );
}

export default App;

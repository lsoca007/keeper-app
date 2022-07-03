import React from 'react';
import './App.css';
import './components/Header/Header';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Note from './components/Note/Note';

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <Note/>
    </div>
  );
}

export default App;

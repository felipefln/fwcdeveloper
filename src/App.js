import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <ContactUs />
    </div>
  );
}

export default App;

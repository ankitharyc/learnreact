import './App.css';
import React from 'react';
import Headercomp from './components/Header.js'
import Bodycomp from './components/Body.js'          


function App() {
  return (
    <div className="AppLayout">
      <h1>Food order App</h1>
      <Headercomp/>
      <Bodycomp/>
    </div>
  );
}

export default App;

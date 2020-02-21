import React from 'react';
import './App.css';
import Lamp from './components/lamp/lamp';
import Mouse from './components/mouse/mouse';

function App() {
  return (
    <div className="container">
      <Lamp />
      <Mouse />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Lamp from './components/lamp/lamp';
import Mouse from './components/mouse/mouse';
import Monitor from './components/monitor/monitor';

function App() {
  return (
    <div className="container">
      <Lamp />
      <Mouse />
      <Monitor />
    </div>
  );
}

export default App;

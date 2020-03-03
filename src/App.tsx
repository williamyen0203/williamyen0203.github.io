import React from 'react';
import './App.css';
import Lamp from './components/lamp/lamp';
import Mouse from './components/mouse/mouse';
import Monitor from './components/monitor/monitor';
import Vase from './components/plant/vase/vase';
import Desk from './components/desk/desk';

function App() {
  return (
    <div className="container">
      <Lamp className="lamp-component" />
      <Mouse className="mouse-component" />
      <Monitor className="monitor-component" />
      <Vase className="vase-component" />
      <Desk className="desk-component" />
    </div>
  );
}

export default App;

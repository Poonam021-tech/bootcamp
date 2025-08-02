import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1>🎯 React Counter</h1>
      <div className="counter-box">
        <p className="count">{count}</p>
        <div className="button-group">
          <button onClick={() => setCount(count + 1)} className="btn increment">+</button>
          <button onClick={() => setCount(count - 1)} className="btn decrement">−</button>
          <button onClick={() => setCount(0)} className="btn reset">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;

// ...existing code...
import './App.css';
import React, { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram.js';
import Header from './components/Button/Header/Header.jsx';
function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    if (tg?.ready) tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header/>
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;

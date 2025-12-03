// ...existing code...
import './App.css';
import React, { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram.js';

function App() {
  const { onToggleButton, tg, onClose } = useTelegram();

  useEffect(() => {
    if (tg?.ready) tg.ready();
  }, [tg]);

  return (
    <div className="App">
      work
      <button onClick={onToggleButton}>Toggle MainButton</button>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
// ...existing code...
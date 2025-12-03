import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram.js';
import React from 'react';

function App() {
const {onToggleButton,tg} = useTelegram();

  
  useEffect(() => {
    tg.ready();
  }, []);
  const onClose = () => {
    tg.close();
  }
  return (
    <div className="App">
      work
      <button onClick={onToggleButton}>Закрыть</button>
    </div>
  );
}

export default App;

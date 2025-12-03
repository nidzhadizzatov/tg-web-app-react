// ...existing code...
import '../../App.css';
import React from 'react';
import { useTelegram } from '../../../hooks/useTelegram.js';

function Header() {
  const { onToggleButton, tg, onClose } = useTelegram();

  return (
    <header className="App-header">
      <button onClick={onToggleButton}>Toggle MainButton</button>
      <button onClick={onClose}>Закрыть</button>
    </header>
  );
}

export default Header;
// ...existing code...
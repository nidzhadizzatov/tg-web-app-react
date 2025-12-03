// ...existing code...
import '../../../App.css';
import React from 'react';
import { useTelegram } from '../../../hooks/useTelegram.js';

function Header() {
  const { onToggleButton, onClose,user } = useTelegram();
const firstName = user?.first_name || 'Guest';
  return (
    <header className="App-header">
      <button onClick={onToggleButton}>Toggle MainButton</button>
        <span>Hello, {firstName}</span>
      <button onClick={onClose}>Закрыть</button>
    </header>
  );
}

export default Header;

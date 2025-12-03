import React from 'react'
import Button from '../Button/Button.jsx';
import {useTelegram} from '../../../hooks/useTelegram.js';

    const Header = () => {
        const { onClose, user, tg} = useTelegram();

      return (
        <div>
          <Button onClick={onClose}>Закрыть</Button>
          <span className={'username'} >{tg.initDataUnsafe.user?.username}</span>
        </div>
      )
    }
    
    export default Header
    
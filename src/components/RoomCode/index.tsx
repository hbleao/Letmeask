import { useState } from 'react';
import copyImg from '../../assets/images/copy.svg';

import './styles.scss';

import { RoomCodeProps } from './types';

export function RoomCode({ code }: RoomCodeProps) {
  const [isCopy, setIsCopy] = useState(false);

  function successCopyRoomCode() {
    if(isCopy) return;

    setTimeout(() => {
      setIsCopy(oldValue => !oldValue);
    }, 300)
    setIsCopy(oldValue => !oldValue);
  }

  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
    successCopyRoomCode();
  }

  return (
    <button className={`room-code ${isCopy ? 'copied' : ''}`} onClick={copyRoomCodeToClipboard}>
      <div className={`image-container ${isCopy ? 'copied' : ''}`}>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span className="code">Sala -WOJDmasldjkasd14</span>
    </button>
  )
}
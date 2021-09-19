import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuthContext } from '../../hooks/useAuth';

import { HomeUI } from './ui';

import { joinRoom } from '../../services/rooms/joinRoom';

export function Home() {
  const history  = useHistory();
  const { user, signInWithGoogle } = useAuthContext();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if(!user) {
      signInWithGoogle();
    }
    history.push('rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    const roomExists = await joinRoom(roomCode);

    if(roomExists) history.push(`/rooms/${roomCode}`);
  }

  return (
    <HomeUI 
      roomCode={roomCode}
      setRoomCode={setRoomCode}
      handleCreateRoom={handleCreateRoom}
      handleJoinRoom={handleJoinRoom}
    />
  )
}
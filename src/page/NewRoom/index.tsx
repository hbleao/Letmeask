import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuthContext } from '../../hooks/useAuth';

import { NewRoomUI } from './ui';

import { createNewRoom } from '../../services/rooms/createRoom';

export function NewRoom() {
  const [newRoom, SetNewRoom] = useState('');
  const { user } = useAuthContext();
  const history = useHistory();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if(newRoom.trim() === '') {
      return;
    }

    const fireBaseRoom = await createNewRoom({ 
      titleRoom: newRoom,
      userId: user?.id
    });

    history.push(`/admin/rooms/${fireBaseRoom.key}`)
  }

  return (
    <NewRoomUI 
      newRoom={newRoom}
      SetNewRoom={SetNewRoom}
      handleCreateRoom={handleCreateRoom}
    />
  )
}
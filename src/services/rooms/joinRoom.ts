import { database } from "../firebase/firebaseConfig";

export async function joinRoom(roomId: string) {
  if(roomId.trim() === '') return;

  const roomRef = await database.ref(`rooms/${roomId}`).get();

  if(!roomRef.exists()) {
    alert('Está sala não está mais disponível!');
    return;
  }

  if(roomRef.val().endedAt) {
    alert('Está sala foi encerrada!');
    return;
  }

  return roomRef;
} 
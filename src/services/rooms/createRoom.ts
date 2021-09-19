import { database } from "../firebase/firebaseConfig";

import { createNewRoomProps } from './types';

export async function createNewRoom({ titleRoom, userId }: createNewRoomProps) {
  const roomRef = database.ref('rooms');

  const fireBaseRom = await roomRef.push({
    title: titleRoom,
    authorId: userId
  })

  return fireBaseRom;
} 
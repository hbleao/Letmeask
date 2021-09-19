
import { database } from "../firebase/firebaseConfig";

import { closeRoomProps } from './types';

export async function closeRoomById({ roomId }: closeRoomProps) {
  await database.ref(`rooms/${roomId}`).update({
    endedAt: new Date(),
  })
} 
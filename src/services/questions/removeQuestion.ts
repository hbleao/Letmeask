import { database } from "../firebase/firebaseConfig";

import { removeQuestionProps } from "./types";

export async function removeQuestion({ roomId, questionId }: removeQuestionProps) {
  const roomRef = database.ref(`rooms/${roomId}/questions/${questionId}`).remove();

  return roomRef;
} 
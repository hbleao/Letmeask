import { database } from "../firebase/firebaseConfig";

import { checkQuestionProps } from "./types";

export async function checkQuestion({ roomId, questionId }: checkQuestionProps) {
  const roomRef = database.ref(`rooms/${roomId}/questions/${questionId}`).update({
    isAnswered: true,
  });

  return roomRef;
}
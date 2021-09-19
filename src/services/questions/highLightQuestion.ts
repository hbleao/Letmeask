import { database } from "../firebase/firebaseConfig";

import { highLightedQuestionProps } from "./types";

export async function highLightQuestion({ roomId, questionId }: highLightedQuestionProps) {
  const roomRef = database.ref(`rooms/${roomId}/questions/${questionId}`).update({
    isHighLighted: true,
  })

  return roomRef;
} 
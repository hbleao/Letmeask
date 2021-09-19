import { database } from "../firebase/firebaseConfig";

import { createQuestionProps } from "./types";

export async function createQuestion({ roomId, question }: createQuestionProps) {
  const roomRef = database.ref(`rooms/${roomId}/questions`).push(question);

  return roomRef;
} 
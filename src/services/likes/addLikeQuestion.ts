import { database } from "../firebase/firebaseConfig";

import { addLikeQuestionProps } from "./types";

export async function addLikeQuestion({ questionId, roomId, userId }: addLikeQuestionProps) {
  return database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
    authorId: userId,
  });
}


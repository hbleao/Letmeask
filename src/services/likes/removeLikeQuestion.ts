import { database } from "../firebase/firebaseConfig";

import { removeLikeQuestionProps } from "./types";

export async function removeLikeQuestion({ questionId, roomId, likeId }: removeLikeQuestionProps) {
  return database.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove();
}
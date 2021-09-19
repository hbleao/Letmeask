import { database } from "../firebase/firebaseConfig";

import { FireBaseQuestions, getQuestionsProps } from "./types";

export function getQuestions({roomId, setQuestions, setTitle, user }: getQuestionsProps) {
  const roomRef = database.ref(`rooms/${roomId}`);

  roomRef.on('value', room => {
    const databaseRoom = room.val();
    const firebaseQuestions = databaseRoom.questions as FireBaseQuestions ?? {};

    const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
      return {
        id: key,
        content: value.content,
        author: value.author,
        isHighLighted: value.isHighLighted,
        isAnswered: value.isAnswered,
        likeCount: Object.values(value.likes ?? {}).length,
        likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0]
      };
    });

    setQuestions(parsedQuestions);
    setTitle(databaseRoom.title);

    return roomRef;
  });
} 
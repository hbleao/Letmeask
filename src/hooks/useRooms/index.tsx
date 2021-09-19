import { useEffect, useState } from "react";

import { getQuestions } from "../../services/questions/getQuestions";
import { useAuthContext } from "../useAuth";

import { setQuestionsProps } from "./types";

export function useRoom(roomId: string) {
  const { user } = useAuthContext();
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState<setQuestionsProps[]>([]);

  async function handleGetAllQuestions() {
    getQuestions({
      roomId,
      setTitle,
      setQuestions,
      user,
    });
  }

  useEffect(() => {
   handleGetAllQuestions();
  }, [roomId, user?.id]);

  return {
    questions,
    title
  }
}
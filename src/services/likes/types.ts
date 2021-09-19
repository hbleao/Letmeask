export type removeLikeQuestionProps = {
  questionId: string;
  roomId: string;
  likeId?: string;
}

export type addLikeQuestionProps = {
  questionId: string;
  roomId: string;
  userId?: string;
}
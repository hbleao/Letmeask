export type ParamsProps = {
  id: string;
}

export type AdminRoomUIProps = {
  paramsId: string;
  handleGoHome: () => void;
  handleCloseRoom: () => void;
  handleCheckQuestionAsAnswered: (questionId: string) => void;
  handleHighLightQuestion: (questionId: string) => void;
  handleRemoveQuestion: (questionId: string) => void;
}
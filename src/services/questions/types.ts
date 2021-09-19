export type createQuestionProps = {
  question: {
    author: {
      name: string;
      avatar: string;
    },
    isHighLighted: boolean;
    isAnswered: boolean;
  },
  roomId: string;
}

export type questionDefaultProps = {
  questionId: string;
  roomId: string;
}

export type removeQuestionProps = questionDefaultProps;

export type highLightedQuestionProps = questionDefaultProps;

export type checkQuestionProps = questionDefaultProps;

export type FireBaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  },
  content: string;
  isHighLighted: boolean;
  isAnswered: boolean;
  likes: Record<string, {
    authorId: string
  }>
}>

export type setQuestionsProps = {
  id:  string;
  author: {
    name: string;
    avatar: string;
  },
  content: string;
  isHighLighted: boolean;
  isAnswered: boolean;
  likeCount: number;
  likeId: string | undefined;
}

export type UserProps = { 
  id: string;
  name: string;
  avatar: string;
}

export type getQuestionsProps = {
  roomId: string;
  user?: UserProps;
  setQuestions: (questions: setQuestionsProps[]) => void;
  setTitle: (title: string) => void;
}

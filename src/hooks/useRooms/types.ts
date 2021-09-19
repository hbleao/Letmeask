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

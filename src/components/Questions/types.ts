import { ReactNode } from "react";

export type QuestionsProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  children?: ReactNode;
  isAnswered?: boolean;
  isHighLighted?: boolean; 
}

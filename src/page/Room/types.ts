import { FormEvent } from "react"

export type ParamsProps = {
  id: string;
}

export type RoomUIProps = {
  roomId: string;
  name: string; 
  avatar: string; 
  newQuestion: string;
  handleGoHome: () => void;
  handleSendQuestion: (event: FormEvent) => void;
  handleSignInWithGoogle: () => void;
  handleLikeQuestion: (roomId: string, likeId: string | undefined) => void;
  setNewQuestion: (event: string) => void;
}
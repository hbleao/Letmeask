import { FormEvent } from "react";

export type HomeUIProps = {
  roomCode: string;
  setRoomCode: (event: string) => void;
  handleCreateRoom: () => void;
  handleJoinRoom: (event: FormEvent) => void;
}

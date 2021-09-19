import { FormEvent } from "react";

export type NewRoomUIProps = {
  newRoom: string;
  SetNewRoom: (event: string) => void;
  handleCreateRoom: (event: FormEvent) => void;
}

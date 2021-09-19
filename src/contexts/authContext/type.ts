export type UserProps = { 
  id: string;
  name: string;
  avatar: string;
}

export type AuthContextProps = {
  user: UserProps | undefined,
  signInWithGoogle: () => Promise<void>;
}

export type AuthProviderContextProps = {
  children: React.ReactNode;
}
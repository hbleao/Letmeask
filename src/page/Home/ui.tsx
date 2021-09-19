import './styles.scss';

import { InputSignIn } from '../../components/InputSignIn';
import { Button } from '../../components/Button';

import illustration from '../../assets/images/illustration.svg';
import logoImage from '../../assets/images/logo.svg';
import googleIcon from '../../assets/images/google-icon.svg';

import { HomeUIProps } from './types';

export function HomeUI({
  roomCode,
  setRoomCode,
  handleCreateRoom,
  handleJoinRoom
}: HomeUIProps) {

  return (
    <div className="home">
      <aside className="home__aside">
        <img 
          className="home__illustration" 
          src={illustration} 
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong className="home__title">
          Toda pergunta tem uma resposta.
        </strong>
        <p className="home__subtitle">
          Aprenda e compartilhe conhecimento com outras pessoas com chats em tempo-real.
        </p>
      </aside>

      <main className="home__main">
        <div className="home__main-content">

          <img 
            className="home__logo"
            src={logoImage}
            alt="logo do letmeask" 
          />

          <Button
            type="button"
            className="home__signin-with-google"
            color="red"
            size="md"
            onClick={handleCreateRoom}
          >
            <img 
              className="home__ic-google" 
              src={googleIcon} 
              alt="logo do letmeask"
            />
            Crie sua sala com o google
          </Button>
          <p className="home__separator">ou entre na sala</p>
          <form className="home__form" onSubmit={handleJoinRoom}>
            <InputSignIn 
              type="text"
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={e => setRoomCode(e.currentTarget.value)}
            />
            <Button
              type="submit"
              className="home__create-room"
              color="purple"
              size="md"
            >
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}
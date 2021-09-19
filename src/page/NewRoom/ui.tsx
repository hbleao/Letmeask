import { Link } from 'react-router-dom';

import './styles.scss';

import { useAuthContext } from '../../hooks/useAuth';

import { Button } from '../../components/Button';
import { InputSignIn } from '../../components/InputSignIn';

import illustration from '../../assets/images/illustration.svg';
import logoImage from '../../assets/images/logo.svg';

import { NewRoomUIProps } from './types';

export function NewRoomUI({
  newRoom,
  SetNewRoom,
  handleCreateRoom
}: NewRoomUIProps) {
  const { user } = useAuthContext();

  return (
    <div className="create-room">
      
      <aside className="create-room__aside">
        <img 
          className="create-room__illustration" 
          src={illustration} 
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong className="create-room__aside-title">
          A plataforma que conecta conhecimento com pessoas.
        </strong>
        <p>
          Aprenda compartilhando seu conhecimento com outras pessoas.
        </p>
      </aside>

      <main className="create-room__main">
        <div className="create-room__main-content">
          <img 
            className="create-room__logo"
            src={logoImage}
            alt="logo do letmeask" 
          />
          <h2 className="create-room__title">
            Criar uma nova sala
          </h2>
          <h2 className="create-room__userName">{user?.name}</h2>
          <form className="create-room__form" onSubmit={handleCreateRoom}>
            <InputSignIn 
              type="text"
              placeholder="Nome da sala"
              value={newRoom}
              onChange={e => SetNewRoom(e.currentTarget.value)}
            />
            <Button
              type="submit"
              className="create-room__create-room"
              color="purple"
              size="md"
            >
              Criar uma sala
            </Button>
          </form>
          <p className="create-room__existing-room">
            Quer entrar em uma existente <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
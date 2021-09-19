import './styles.scss';

import { useRoom } from '../../hooks/useRooms';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Questions } from '../../components/Questions';

import logoImg from '../../assets/images/logo.svg';

import { RoomUIProps } from './types';

export function RoomUI({
  roomId,
  avatar,
  name,
  newQuestion,
  handleGoHome, 
  handleSendQuestion, 
  handleSignInWithGoogle, 
  handleLikeQuestion, 
  setNewQuestion,
}: RoomUIProps) {
  const { questions, title } = useRoom(roomId);

  return (
    <div className="room">
      <header className="room__header">
        <div className="room__content">
          <img 
            className="room__logo" 
            src={logoImg}
            alt="Logo do aplicativo letmeask" 
            onClick={handleGoHome} 
          />
          <RoomCode code={roomId} />
        </div>
      </header>
      
      <main className="room__main">
        <div className="room__title">
          <h1 className="room__title-text">Sala {title}</h1>
          {questions.length > 0 && (
            <span className="room__tag-questions">{questions.length} perguntas</span>
          )}
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            className="room__question"
            placeholder="O que você quer perguntar?"
            value={newQuestion}
            onChange={event => setNewQuestion(event.currentTarget.value)}
          />
          <div className="room__form-footer">
            {!name && !avatar ? (
              <span className="room__login-text">
                Para enviar uma pergunta, 
                <Button className="login" onClick={handleSignInWithGoogle} isLink>Faça seu login</Button>.
              </span>
            ) : (
              <div className="room__user-info">
                <img className="room__avatar" src={avatar} alt="imagem do usuário" />
                <span className="room__username">{name}</span>
              </div>
            )}
            <Button size="sm" color="purple" type="submit">Enviar perguntas</Button>
          </div>
        </form>
          <div className="room__question-list">
            {questions.map(question => (
              <Questions  
                key={question.id}
                author={question.author}
                content={question.content}
                isAnswered={question.isAnswered}
                isHighLighted={question.isHighLighted}
              >
                <button
                  type="button"
                  className={`room__btn-like ${question.likeId ? 'liked' : ''}`}
                  aria-label="Marcar como gostei"
                  onClick={() => handleLikeQuestion(question.id, question.likeId)}
                >
                  {question.likeCount > 0 && <span>{question.likeCount}</span>}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </Questions>
            ))}
          </div>
      </main>
    </div>
  )
}
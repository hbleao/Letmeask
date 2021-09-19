import './styles.scss';

import { useRoom } from '../../hooks/useRooms';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Questions } from '../../components/Questions';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';

import { AdminRoomUIProps } from './types';

export function AdminRoomUI({
  paramsId,
  handleGoHome,
  handleCloseRoom,
  handleCheckQuestionAsAnswered,
  handleHighLightQuestion,
  handleRemoveQuestion
}: AdminRoomUIProps) {
  const { questions, title } = useRoom(paramsId);

  return (
    <div className="admin-room">
      <header className="admin-room__header">
        <div className="admin-room__content">
          <img 
            className="admin-room__logo" 
            src={logoImg}
            alt="Logo do aplicativo letmeask" 
            onClick={handleGoHome} 
          />
          <div className="admin-room__buttons">
            <RoomCode code={paramsId} />
            <Button isOutline size="sm" onClick={handleCloseRoom}>Encerrar</Button>
          </div>
        </div>
      </header>
      
      <main className="admin-room__main">
        <div className="admin-room__title">
          <h1 className="admin-room__title-text">Sala {title}</h1>
          {questions.length > 0 && (
            <span className="admin-room__tag-questions">{questions.length} perguntas</span>
          )}
        </div>

        <div className="admin-room__question-list">
          {questions.length > 0 ? questions.map(question => (
            <Questions  
              key={question.id}
              author={question.author}
              content={question.content}
              isAnswered={question.isAnswered}
              isHighLighted={question.isHighLighted}
            > 
              <button
                className="admin-room__btn-action"
                type="button"
                onClick={() => handleCheckQuestionAsAnswered(question.id)}
              >
                <img src={checkImg} alt="Marcar pergunta como respondida" />
              </button>
              <button
                className="admin-room__btn-action"
                type="button"
                onClick={() => handleHighLightQuestion(question.id)}
              >
                <img src={answerImg} alt="Destacar a pergunta " />
              </button>
              <button
                className="admin-room__btn-action"
                type="button"
                onClick={() => handleRemoveQuestion(question.id)}
              >
                <img src={deleteImg} alt="botão de remoção de pergunta" />
              </button>
            </Questions>
          )) : (
            <div className="admin-room__message">
              <p className="admin-room__message-text">
                Você ainda não possui nenhuma pergunta.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
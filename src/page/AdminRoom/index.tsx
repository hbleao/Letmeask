import { useParams, useHistory } from 'react-router-dom';

import { AdminRoomUI } from './ui';

import { removeQuestion, closeRoomById, checkQuestion, highLightQuestion } from '../../services';

import { ParamsProps } from './types';

export function AdminRoom() {
  const params = useParams<ParamsProps>();
  const history = useHistory();
  
  function handleGoHome() {
    history.push('/');
  }

  async function handleRemoveQuestion(questionId: string) {
    if(window.confirm('Tem certeza que deseja excluir essa pergunta ?')) {
      await removeQuestion({questionId, roomId: params.id});
    }
  }

  async function handleCloseRoom() {
    await closeRoomById({ roomId: params.id});
    history.push('/');
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
   await checkQuestion({ 
     questionId,
     roomId: params.id
   })
  }

  async function handleHighLightQuestion(questionId: string) {
    await highLightQuestion({
      questionId,
      roomId: params.id 
    })
  }

  return (
    <AdminRoomUI 
      paramsId={params.id}
      handleGoHome={handleGoHome}
      handleCheckQuestionAsAnswered={handleCheckQuestionAsAnswered}
      handleCloseRoom={handleCloseRoom}
      handleHighLightQuestion={handleHighLightQuestion}
      handleRemoveQuestion={handleRemoveQuestion}
    />
  )
 
}
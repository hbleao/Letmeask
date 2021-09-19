import { FormEvent, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { useAuthContext } from '../../hooks/useAuth';

import { RoomUI } from './ui';

import { createQuestion, addLikeQuestion, removeLikeQuestion } from '../../services';

import { ParamsProps } from './types';

export function Room() {
  const params = useParams<ParamsProps>();
  const history = useHistory();
  const { user, signInWithGoogle } = useAuthContext();
  const [newQuestion, setNewQuestion] = useState('');

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();
    if(newQuestion.trim() === '') return;

    if(!user) {
      throw new Error('You must be logged in');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHighLighted: false,
      isAnswered: false
    }

    await createQuestion({ question, roomId: params.id });
    setNewQuestion('');
  }

  function handleSignInWithGoogle() {
    signInWithGoogle()
  }

  async function handleLikeQuestion(questionId: string, likeId?: string) {
    if(likeId) {
      await removeLikeQuestion({
        questionId,
        roomId: params.id,
        likeId
      });
      return;
    };
    await addLikeQuestion({
      questionId,
      roomId: params.id,
      userId: user?.id
    })
  }

  function handleGoHome() {
    history.push('/');
  }

  return (
    <RoomUI 
      roomId={params.id}
      name={user?.name ?? ''}
      avatar={user?.avatar ?? ''}
      newQuestion={newQuestion}
      setNewQuestion={setNewQuestion}
      handleGoHome={handleGoHome}
      handleLikeQuestion={handleLikeQuestion}
      handleSendQuestion={handleSendQuestion}
      handleSignInWithGoogle={handleSignInWithGoogle}
    />
  )
}
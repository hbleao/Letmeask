import cx from 'classnames';

import './styles.scss';

import { QuestionsProps } from './types';

export const Questions = ({content, author, children, isAnswered, isHighLighted }: QuestionsProps) => {

  return (
    <div className={cx(
        'questions',
        { answered: isAnswered },
        { highLighted : isHighLighted && !isAnswered },
      )}
    >
      <p className="questions__content">{content}</p>

      <footer className="questions__footer">
        <div className="questions__user-info">
          <img className="questions__avatar" src={author.avatar} alt={author.name} />
          <span className="questions__username">{author.name}</span>
        </div>
        <div className="questions__actions">
          {children}
        </div>
      </footer>

    </div>
  )
}
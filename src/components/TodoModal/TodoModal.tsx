import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import { Loader } from '../Loader';
import { Todo } from '../../types/Todo';
import { User } from '../../types/User';
import { getUser } from '../../api';

type Props = {
  todo: Todo;
  setSelectTodo: (value: React.SetStateAction<Todo | null>) => void
};

export const TodoModal: React.FC<Props> = ({ todo, setSelectTodo }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (todo) {
      getUser(todo.userId)
        .then(userFromServer => {
          setUser(userFromServer);
          setIsLoading(false);
        });
    }
  }, [todo]);

  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" />

      {!isLoading ? (
        <div className="modal-card">
          <header className="modal-card-head">
            <div
              className="modal-card-title has-text-weight-medium"
              data-cy="modal-header"
            >
              {`Todo #${todo.id}`}
            </div>

            <button
              aria-label="Close Modal"
              type="button"
              className="delete"
              data-cy="modal-close"
              onClick={() => setSelectTodo(null)}
            />
          </header>

          <div className="modal-card-body">
            <p className="block" data-cy="modal-title">
              {todo.title}
            </p>

            <p className="block" data-cy="modal-user">
              <strong
                className={cn(
                  { 'has-text-success': todo.completed },
                  { 'has-text-danger': !todo.completed },
                )}
              >
                {todo.completed
                  ? 'Done'
                  : 'Planned'}
              </strong>

              {user && (
                <>
                  {' by '}

                  <a href={`mailto:${user.email}`}>
                    {user.name}
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

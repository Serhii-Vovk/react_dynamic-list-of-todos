import classNames from 'classnames';
import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
  handleClick: (value: Todo) => void;
  activeID: number
};

export const TodoList: React.FC<Props> = ({
  todos,
  handleClick,
  activeID,
}) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th aria-label="gap" />
      </tr>
    </thead>

    <tbody>
      {todos.map(todo => {
        const isActive = activeID === todo.id;

        return (
          <tr
            data-cy="todo"
            className={classNames(
              { 'has-background-info-light': isActive },
            )}
            key={todo.id}
          >
            <td className="is-vcentered">{todo.id}</td>
            <td className="is-vcentered">
              {todo.completed
                ? (
                  <span className="icon" data-cy="iconCompleted">
                    <i className="fas fa-check" />
                  </span>
                )
                : ('')}
            </td>
            <td className="is-vcentered is-expanded">
              <p className={classNames({
                'has-text-success': todo.completed,
                'has-text-danger': !todo.completed,
              })}
              >
                {todo.title}
              </p>
            </td>
            <td className="has-text-right is-vcentered">
              <button
                data-cy="selectButton"
                className="button"
                type="button"
                onClick={() => handleClick(todo)}
              >
                <span className="icon">
                  {!isActive && (<i className="far fa-eye" />)}
                  {isActive && (<i className="far fa-eye-slash" />)}
                </span>
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

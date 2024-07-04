'use client';

import { useRecoilValue } from 'recoil';

import { todoState } from '@/atoms/todoState';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC = () => {
  const todos = useRecoilValue(todoState);

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </>
  );
};


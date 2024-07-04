'use client';

import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { Todo, todoState } from '@/atoms/todoState';

export const AddTodo: React.FC = () => {
  const [input, setInput] = useState('');
  const setTodos = useSetRecoilState(todoState);

  const addTodo = () => {
    if (input === '') {
      return;
    }

    setTodos((oldTodos) => [
      ...oldTodos,
      { id: getId(oldTodos), title: input, isCompleted: false },
    ]);
    setInput('');
  };

  const getId = (todos: Todo[]) => (todos.length > 0 ? todos[todos.length - 1].id + 1 : 1);

  return (
    <div className='flex mt-4 mb-4'>
      <input
        className='border rounded w-full py-2 px-3 mr-4 text-gray-500'
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className='flex-no-shrink p-2 border-2 rounded text-blue-400 border-blue-400 hover:text-white hover:bg-blue-400'
        onClick={addTodo}
      >
        Add
      </button>
    </div>
  );
};


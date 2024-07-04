'use client';

import { useRecoilState } from 'recoil';

import { Todo, todoState } from '@/atoms/todoState';
import Link from 'next/link';


export type TodoItemProps = {
  item: Todo;
};

export const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
  const [todos, setTodos] = useRecoilState(todoState);

  const toggleItem = (item: Todo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === item.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteItem = (item: Todo) => {
    setTodos(todos.filter((todo) => todo.id !== item.id));
  };

  return (
    <div className='flex mb-4 items-center'>
      <input
        className=''
        type='checkbox'
        checked={item.isCompleted}
        onChange={() => toggleItem(item)}
      />
      <Link
        href={`/todos/${item.id}`}
        className={`w-full text-lg justify-center ml-4 text-gray-500 hover:text-gray-700 ${item.isCompleted ? 'line-through text-green-500 hover:text-green-700' : ''
          }`}
      >
        {item.title}
      </Link>
      <button
        className='p-2 text-lg ml-2 text-red-500 hover:text-red-700'
        onClick={() => deleteItem(item)}
      >
        &times;
      </button>
    </div>
  );
};


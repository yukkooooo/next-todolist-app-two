
'use client';


import { AddTodo } from '@/components/AddTodo';
import { Header } from '@/components/Header';
import { TodoList } from '@/components/TodoList';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { Todo, todoState } from '@/atoms/todoState';



export default function Home() {

  const [input, setInput] = useState('');
  const setTodos = useSetRecoilState(todoState);



  const getId = (todos: Todo[]) => (todos.length > 0 ? todos[todos.length - 1].id + 1 : 1);

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




  return (
    <main>
      <div className='container mx-auto max-w-md'>
        <Header />
        <AddTodo input={input} setInput={setInput} onClick={addTodo} />
        <TodoList />
      </div>
    </main>
  );
}


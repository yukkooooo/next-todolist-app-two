'use client';

import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { AddTodo } from '@/components/AddTodo';
import { todoState } from '@/atoms/todoState';
import { useState, useEffect } from 'react';
import { log } from 'console';
import { title } from 'process';
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { id: string } }) {
  const [todos, setTodos] = useRecoilState(todoState);
  const [input, setInput] = useState('');
  const [savedInput, setSavedInput] = useState('');
  const todo = todos.find((todo) => todo.id === Number(params.id));
  const router = useRouter();
  console.log(todo)

  useEffect(() => {
    if (todo) {
      const savedTitle = localStorage.getItem(`todo-${todo.id}`);
      if (savedTitle) {
        setInput(savedTitle);
        setSavedInput(savedTitle);
      } else {
        setInput(todo.title);
        setSavedInput(todo.title);
      }
    }
  }, [todo]);

  const saveTodo = () => {
    setSavedInput(input); // 入力した内容を保存





    if (todo) {
      setTodos((prevTodos) =>
        prevTodos.map((t) =>
          t.id === todo.id ? { ...t, title: input } : t



        )


      );

      console.log(todo);




      // localStorage.setItem(`todo-${todo.id}`, input); // ローカルストレージに保存
    }
    console.log("Saved todo:", input);
    router.push('/');

  };



  return (
    <main className='container mx-auto max-w-md'>
      <h1 className="mt-2 mb-2 text-lg">
      </h1>
      <h2 className='text-blue-400 hover:text-blue-600'>内容</h2>

      <div>
        <AddTodo input={input} setInput={setInput} onClick={saveTodo} />
      </div>
      <Link href='/' className='text-blue-400 hover:text-red-600'>
        back
      </Link>
    </main>
  );
}

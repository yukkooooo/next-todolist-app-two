'use client';

import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { AddTodo } from '@/components/AddTodo';
import { todoState } from '@/atoms/todoState';




export default function Page({ params }: { params: { id: string } }) {
  const todos = useRecoilValue(todoState);
  const todo = todos.find((todo) => todo.id === Number(params.id));

  return (
    <main className='container mx-auto max-w-md'>
      <h1
        className={`mt-2 mb-2 text-lg ${todo?.isCompleted ? 'line-through text-green-500' : 'text-slate-500'
          }`}
      >
        {todo?.title}
      </h1>
      <h2 className='text-blue-400 hover:text-blue-600 '>内容</h2>

      <div>
        <AddTodo />


      </div>
      <Link href='/' className='text-blue-400 hover:text-Red-600 '>
        back
      </Link>


    </main>
  );
}


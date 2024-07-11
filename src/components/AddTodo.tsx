import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';

interface AddTodoProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  onClick: () => void;
}

export const AddTodo: React.FC<AddTodoProps> = ({ input, setInput, onClick }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      // 初期幅と高さを設定
      textareaRef.current.style.width = '450px';
      textareaRef.current.style.height = '100px';
    }
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      // 入力に応じて高さを自動調整
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  return (
    <div className='flex flex-col mt-4 mb-4'>
      <textarea
        ref={textareaRef}
        className='border rounded py-2 px-3 text-gray-500'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={1}
      />
      <button
        className='flex-no-shrink p-2 mt-2 border-2 rounded text-blue-400 border-blue-400 hover:text-white hover:bg-blue-400'
        onClick={onClick}
      >
        Save
      </button>
    </div>
  );
};

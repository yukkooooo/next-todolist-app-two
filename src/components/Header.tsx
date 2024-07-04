'use client';

import { todoListStatsState } from '@/selectors/todoListStatsState';
import { useRecoilValue } from 'recoil';

export const Header: React.FC = () => {
  const totalNum = useRecoilValue(todoListStatsState);

  return (
    <div className='text-center'>
      <h1 className='text-2xl font-bold text-slate-500'>TODO LIST</h1>
      <p>登録数：{totalNum}</p>
    </div>
  );
};


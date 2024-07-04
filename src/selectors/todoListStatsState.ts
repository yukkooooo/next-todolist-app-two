import { todoState } from '@/atoms/todoState';
import { selector } from 'recoil';

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoState);
    const totalNum = todoList.length;

    return totalNum;
  },
});


'use client';

import React, { ChangeEvent, useState } from 'react';
import { postComment } from './api';

const modalButtonStyle =
  'text-center w-[83px] h-[32px] text-[12px] rounded-md bg-white text-[#5534DA] border border-[#D9D9D9] absolute right-[10px] bottom-[15px]';

const CommentInput = ({
  columnId,
  dashboardId,
  cardId,
  setIsCommentChange,
}: {
  columnId: number;
  dashboardId: number;
  cardId: number;
  setIsCommentChange: any;
}) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newvalue = e.target.value;
    setValue(newvalue);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    postComment(value, cardId, columnId, dashboardId, setIsCommentChange);
  };

  return (
    <form className='relative' onSubmit={handleSubmit}>
      <label className='text-[16px] font-medium max-sm:text-[14px]'>댓글</label>
      <textarea
        onChange={handleChange}
        placeholder='댓글 작성하기'
        className='mt-[10px] h-[110px] w-full resize-none rounded-md border border-[#d9d9d9] p-[16px] text-[14px] max-sm:text-[12px]'
      ></textarea>
      <button
        type='submit'
        className={`${modalButtonStyle} disabled:text-[#787486]`}
        disabled={!value}
      >
        입력
      </button>
    </form>
  );
};

export default CommentInput;

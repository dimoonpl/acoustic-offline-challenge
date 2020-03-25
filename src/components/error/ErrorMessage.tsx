import React from 'react';

interface IProps {
  message: string;
}

export const ErrorMessage: React.FC<IProps> = ({ message }) => (
  <div className='error-message'>
    <div className='error-message__body'>{message}</div>
  </div>
);

import React, { useState, useEffect } from 'react';
import css from './button.module.css';

const Button = ({ onClick, isLoading }) => {
  const [buttonText, setButtonText] = useState('Load more');
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
  setButtonText(isLoading ? 'Loading...' : 'Load more');
  setIsDisabled(isLoading);
  if (isLoading) {
    console.log('button');
  }
}, [isLoading]);

  return (
    <button
      type="button"
      className={css.button}
      onClick={onClick}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
};

export default Button;

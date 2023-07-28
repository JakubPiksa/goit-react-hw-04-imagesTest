import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import css from './loader.module.css';

const CustomLoader = () => {
  return (
    <div className={css.loaderOverlay}>
      <TailSpin type="TailSpin" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default CustomLoader;
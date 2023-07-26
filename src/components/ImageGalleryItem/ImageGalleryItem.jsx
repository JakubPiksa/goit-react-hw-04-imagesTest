import React, { useState, useEffect } from 'react';
import css from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  const [webformatURL, setWebformatURL] = useState('');

  useEffect(() => {
    setWebformatURL(image.webformatURL);
  }, [image.webformatURL]);

  return (
    <li className={css.galleryItem}>
      <img src={webformatURL} alt="" onClick={onClick} />
    </li>
  );
};

export default ImageGalleryItem;

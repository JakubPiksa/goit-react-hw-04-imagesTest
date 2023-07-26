import React, { useState } from 'react';
import css from './imageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (largeImageURL) => {
    setSelectedImage(largeImageURL);
    onImageClick(largeImageURL);
  };

  return (
    <div>
      <ul className={css.gallery}>
        {images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClick={() => handleImageClick(image.largeImageURL)}
          />
        ))}
      </ul>
      {selectedImage && (
        <div className={css.overlay}>
          <img src={selectedImage} alt="Selected" />
          <button onClick={() => setSelectedImage(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

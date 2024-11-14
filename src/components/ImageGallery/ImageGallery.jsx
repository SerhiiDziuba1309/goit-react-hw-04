import React from 'react';
import ImageCard from './ImageCard';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul>
      {images.map(image => (
        <li key={image.id} onClick={() => onImageClick(image)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

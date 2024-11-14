import React from 'react';
import Modal from 'react-modal';

const ImageModal = ({ modalImage, onClose }) => {
  return (
    <Modal isOpen={!!modalImage} onAfterClose={onClose}>
      <div>
        <img src={modalImage.urls.regular} alt={modalImage.alt_description} />
        <p>Author: {modalImage.user.name}</p>
        <p>Likes: {modalImage.likes}</p>
      </div>
      ;
    </Modal>
  );
};

export default ImageModal;

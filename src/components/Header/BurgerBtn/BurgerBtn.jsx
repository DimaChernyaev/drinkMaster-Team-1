import { useState, useEffect } from 'react';
import { BurgerModal } from '../BurgerModal/BurgerModal';
import { BurgerSVG, StyledBurgerBtn, CloseBurgerSVG } from './BurgerBtn.styled';

export const BurgerBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <StyledBurgerBtn onClick={toggleModal}>
        {isModalOpen ? <CloseBurgerSVG /> : <BurgerSVG />}
      </StyledBurgerBtn>
      {isModalOpen && (
        <BurgerModal isOpen={isModalOpen} onClose={toggleModal} />
      )}
    </>
  );
};

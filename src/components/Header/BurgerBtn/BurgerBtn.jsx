import { useState, useEffect } from 'react';
import { BurgerModal } from '../BurgerModal/BurgerModal';
import { BurgerSVG, StyledBurgerBtn, CloseBurgerSVG } from './BurgerBtn.styled';

export const BurgerBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
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

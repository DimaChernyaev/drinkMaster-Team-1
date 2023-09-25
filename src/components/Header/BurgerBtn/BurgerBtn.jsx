import { useState } from 'react';
import { BurgerModal } from '../BurgerModal/BurgerModal';
import { BurgerSVG, StyledBurgerBtn, CloseBurgerSVG } from './BurgerBtn.styled';

export const BurgerBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

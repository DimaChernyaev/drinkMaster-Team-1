import Navigation from '../Navigation/Navigation';
import { BurgerModalWrapper } from './BurgerModal.styled';

export const BurgerModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <BurgerModalWrapper>
          <Navigation onClose={onClose} />
        </BurgerModalWrapper>
      )}
    </>
  );
};

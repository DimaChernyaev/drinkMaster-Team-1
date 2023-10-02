import Navigation from '../Navigation/Navigation';
import {
  BurgerModalWrapper,
  StyledBlockBurger,
  StyledBlockTwoBurger,
} from './BurgerModal.styled';

import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('root');

export const BurgerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <>
          <BurgerModalWrapper isOpen={isOpen}>
            <StyledBlockBurger />
            <StyledBlockBurger />
            <StyledBlockTwoBurger />
            <Navigation onClose={onClose} />
          </BurgerModalWrapper>
        </>
      )}
    </>,
    modalRoot,
  );
};

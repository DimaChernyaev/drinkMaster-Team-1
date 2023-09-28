import Navigation from '../Navigation/Navigation';
import { BurgerModalWrapper } from './BurgerModal.styled';

export const aBurgerModal = ({ isOpen, onClose }) => {
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

import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('root');

export const BurgerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <BurgerModalWrapper isOpen={isOpen}>
          <Navigation onClose={onClose} />
        </BurgerModalWrapper>
      )}
    </>,
    modalRoot,
  );
};

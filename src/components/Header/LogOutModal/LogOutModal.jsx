import { useEffect, useRef } from 'react';
import {
  StyledLogOutWrapper,
  StyledPar,
  StyledButtonsWrapper,
  LogOutModalBtn,
} from './LogOutModal.styled';
import { StyledCloseIcon } from '../../UserInfoModal/UserInfoModal.styled';

export const LogOutModal = ({ isOpen, onClose, onLogOut }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <StyledLogOutWrapper ref={modalRef}>
      <StyledCloseIcon onClick={onClose} sx={{ cursor: 'pointer' }} />
      <StyledPar>Are you sure you want to log out?</StyledPar>
      <StyledButtonsWrapper>
        <LogOutModalBtn onClick={onLogOut}>Log Out</LogOutModalBtn>
        <LogOutModalBtn onClick={onClose}>Cancel</LogOutModalBtn>
      </StyledButtonsWrapper>
    </StyledLogOutWrapper>
  );
};

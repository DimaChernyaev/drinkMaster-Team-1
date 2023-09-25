import { LogOutBtn, StyledModalWindow } from './UserModal.styled';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signout } from '../../../redux/auth/authOperations';
import { useState, useRef, useEffect } from 'react';

export const UserModal = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalRef = useRef(null);

  // const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen, setIsModalOpen]);

  const handleLogout = async (values) => {
    try {
      await dispatch(signout(values));
      navigate('/welcome');
    } catch (error) {
      navigate('/welcome');
    }
  };

  return (
    <StyledModalWindow ref={modalRef}>
      <LogOutBtn onClick={handleLogout}>Log Out</LogOutBtn>
    </StyledModalWindow>
  );
};

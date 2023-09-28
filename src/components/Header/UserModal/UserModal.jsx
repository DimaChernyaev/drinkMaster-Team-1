import { LogOutBtn, StyledModalWindow } from './UserModal.styled';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signout } from '../../../redux/auth/authOperations';
import { useState, useRef, useEffect } from 'react';
import { Box } from '@mui/system';
import { IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { UserInfoModal } from '../../UserInfoModal/UserInfoModal';

export const UserModal = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

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

  const handleOpenProfile = () => {
    setIsProfileModalOpen(true)
  }

  const handleClose = () => {
    setIsProfileModalOpen(false);
  };

  return (
    <>
    {/* <StyledModalWindow ref={modalRef}> */}
    <StyledModalWindow >
      <Box sx={{display: 'flex', justifyContent: "space-between", alignItems: "center", marginBottom: '38px'}}>
        <Typography>Edit profile</Typography>
        <IconButton onClick={handleOpenProfile}><EditIcon sx={{width: "14px", height: "14px", color: "#F3F3F3"}}/></IconButton>
      </Box>
      <LogOutBtn onClick={handleLogout}>Log Out</LogOutBtn>
    </StyledModalWindow>

    {isProfileModalOpen && <UserInfoModal isOpen={isProfileModalOpen} handleClose={handleClose}/>}
    </>
  );
};

import { LogOutBtn, StyledModalWindow } from './UserModal.styled';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signout } from '../../../redux/auth/authOperations';

export const UserModal = () =>
  // { isModalOpen, setIsModalOpen }
  {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async (values) => {
      try {
        await dispatch(signout(values));
        navigate('/welcome');
      } catch (error) {
        navigate('/welcome');
      }
    };

    return (
      <StyledModalWindow>
        <LogOutBtn onClick={handleLogout}>Log Out</LogOutBtn>
      </StyledModalWindow>
    );
  };

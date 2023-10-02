import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useState, useEffect } from 'react';
import { selectUser } from '../../../redux/auth/authSelectors';

import {
  UserLogoBtn,
  UserLogoImg,
  UserLogoText,
  UserLogoWrapper,
} from './UserLogog.styled';
import { UserModal } from '../UserModal/UserModal';

export const UserLogo = () => {
  const { name, avatarURL } = useSelector(selectUser);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <UserLogoWrapper>
      <UserLogoBtn onClick={handleModal}>
        <UserLogoImg src={avatarURL} alt="user icon" />
        <UserLogoText>{name}</UserLogoText>
      </UserLogoBtn>
      {isModalOpen && (
        <UserModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </UserLogoWrapper>
  );
};

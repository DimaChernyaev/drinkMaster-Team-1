import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useState } from 'react';
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

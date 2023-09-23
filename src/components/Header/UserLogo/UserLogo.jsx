// import { useSelector } from 'react-redux/es/hooks/useSelector';
// import { useState } from 'react';

import {
  UserLogoBtn,
  UserLogoImg,
  UserLogoText,
  UserLogoWrapper,
} from './UserLogog.styled';

export const UserLogo = () => {
  // const{name,avatarURL}=useSelector(({user})=>user)

  return (
    <UserLogoWrapper>
      <UserLogoBtn>
        <UserLogoImg src="" alt="user icon" />
        <UserLogoText>Username</UserLogoText>
      </UserLogoBtn>
    </UserLogoWrapper>
  );
};

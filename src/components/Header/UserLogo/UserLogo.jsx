// import { useSelector } from 'react-redux';
// import { getUser } from '../../../redux/user/userSelectors';

import {
  UserLogoBtn,
  UserLogoImg,
  UserLogoText,
  UserLogoWrapper,
} from './UserLogog.styled';

export const UserLogo = () => {
  // const user = useSelector(getUser);
  // const { name, avatarURL } = user;
  // console.log(user);

  return (
    <UserLogoWrapper>
      <UserLogoBtn>
        <UserLogoImg src="" alt="user icon" />
        <UserLogoText>name</UserLogoText>
      </UserLogoBtn>
    </UserLogoWrapper>
  );
};

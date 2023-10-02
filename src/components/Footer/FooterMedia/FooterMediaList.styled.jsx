import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as FacebookIMG } from '../../../assets/images/link_icons/facebook.svg';
import { ReactComponent as InstagramIMG } from '../../../assets/images/link_icons/instagram.svg';
import { ReactComponent as YouTubeIMG } from '../../../assets/images/link_icons/youtube.svg';

export const MediaList = styled.ul`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

export const MediaListItem = styled.li``;

export const FooterStyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: solid 1px var(--whitefourty-color);
  border-radius: 10px;
  transition: var(--transition);
  &:hover,
  &:focus {
    transform: scale(1.1);
    border: solid 1px var(--white-color);
  }
`;
export const StyledFacebookSVG = styled(FacebookIMG)`
  height: 24px;
  width: 24px;
  fill: var(--whitefourty-color);
  transition: var(--transition);
  &:hover,
  &:focus {
    transform: scale(1.1);
    fill: var(--white-color);
  }
`;

export const StyledInstagramSVG = styled(InstagramIMG)`
  height: 24px;
  width: 24px;
  fill: var(--whitefourty-color);
  transition: var(--transition);
  &:hover,
  &:focus {
    transform: scale(1.1);
    fill: var(--white-color);
  }
`;

export const StyledYoutubeSVG = styled(YouTubeIMG)`
  height: 24px;
  width: 24px;
  fill: var(--whitefourty-color);
  transition: var(--transition);
  &:hover,
  &:focus {
    transform: scale(1.1);
    fill: var(--white-color);
  }
`;

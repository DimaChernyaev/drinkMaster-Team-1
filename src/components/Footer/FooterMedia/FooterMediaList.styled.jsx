import styled from '@emotion/styled';
import { colorStyled } from '../../../helpers/colorStyled';
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
  border: solid 1px ${colorStyled.colorWhiteFourty};
  border-radius: 10px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
    border: solid 1px ${colorStyled.colorWhite};
  }
`;
export const StyledFacebookSVG = styled(FacebookIMG)`
  height: 24px;
  width: 24px;
  fill: ${colorStyled.colorWhiteFourty};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
    fill: ${colorStyled.colorWhite};
  }
`;

export const StyledInstagramSVG = styled(InstagramIMG)`
  height: 24px;
  width: 24px;
  fill: ${colorStyled.colorWhiteFourty};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
    fill: ${colorStyled.colorWhite};
  }
`;

export const StyledYoutubeSVG = styled(YouTubeIMG)`
  height: 24px;
  width: 24px;
  fill: ${colorStyled.colorWhiteFourty};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
    fill: ${colorStyled.colorWhite};
  }
`;

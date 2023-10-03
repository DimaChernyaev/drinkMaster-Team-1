import styled from 'styled-components';
import { colorStyled } from '../../../helpers/colorStyled';

export const FollowUsWrapper = styled.div`
  margin-top: 80px;
  @media (min-width: 1280px) {
    margin-top: 0;
  }
`;
export const FollowUsTitle = styled.h4`
  color: ${colorStyled.colorWhite};
  font-size: 18px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 24px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

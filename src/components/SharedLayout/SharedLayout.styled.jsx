import styled from '@emotion/styled';
import { colorStyled } from '../../helpers/colorStyled';

export const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;

  @media (min-width: 375px) {
    width: 375px;
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Header = styled.header`
  padding-top: 22px;
  padding-bottom: 22px;
  border-bottom: 1px solid ${colorStyled.colorWhiteTwenty};
`;

console.log(colorStyled.colorWhiteTwenty);

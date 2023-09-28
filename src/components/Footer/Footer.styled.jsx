import styled from '@emotion/styled';
import { colorStyled } from '../../helpers/colorStyled';

export const FooterEl = styled.footer`
  margin-top: 40px;
  padding-top: 40px;
  padding-bottom: 22px;
  border-top: 1px solid ${colorStyled.colorWhiteTwenty};
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const FooterMedia = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterMediaNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 400px;
  @media screen and (max-width: 1440px) {
    display: block;
  }
`;

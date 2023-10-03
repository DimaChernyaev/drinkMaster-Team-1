import styled from 'styled-components';
import { colorStyled } from '../../../helpers/colorStyled';
// export const colorStyled = {
//   colorStyled.colorWhite: '#F3F3F3',
//   colorStyled.colorWhiteFifty: 'rgba(243, 243, 243, 0.5)',
//   colorStyled.colorWhiteFourty: 'rgba(243, 243, 243, 0.4)',
//   colorStyled.colorWhiteTwenty: 'rgba(243, 243, 243, 0.2)',
//   colorStyled.colorBlue: '#161F37',
//   colorStyled.colorBlueFifty: 'rgba(22, 31, 55, 0.5)',
//   colorStyled.colorHover: 'rgba(64, 112, 205, 0.5)',
//   colorStyled.welcomePageText: '#FAFAFA',
//   colorStyled.backgroundBlackColor: '#0A0A11',
//   colorStyled.buttonCancel: '#434D67',
// };

// @media (min-width: 375px) {
//   width: 335px;
// }

// @media (min-width: 768px) {
//   width: 342px;
// }

// @media (min-width: 1280px) {
//   width: 400px;
// }

export const PopularWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 80px;
  @media (min-width: 768px) {
    margin-bottom: 140px;
    flex-direction: row;
    gap: 32px;
  }
  @media (min-width: 1280px) {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 0;
  }
`;
export const PopularCoctailsTitle = styled.h4`
  color: ${colorStyled.colorWhite};
  font-size: 18px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
  margin-top: 40px;
  margin-bottom: 28px;
`;

export const PopularCoctailsWrapper = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  overflow: hidden;
  @media (min-width: 768px) {
    width: 336px;
    margin-bottom: 0;
  }
  @media (min-width: 1280px) {
    width: 312px;
  }
`;

export const PopularCoctailsImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 8px;
`;

export const PopularCoctailsText = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 89px;
  gap: 8px;
`;
export const PopularCoctailsName = styled.p`
  color: ${colorStyled.colorWhite};
  font-size: 16px;
  font-family: Manrope;
  font-weight: 500;
  line-height: 22px;
  word-wrap: break-word;
`;

export const PopularCoctailsDescription = styled.p`
  height: 63px;
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-family: Manrope;
  font-weight: 400;
  line-height: 19px;
`;

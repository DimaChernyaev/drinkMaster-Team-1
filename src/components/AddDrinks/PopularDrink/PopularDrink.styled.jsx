import styled from 'styled-components';

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
  color: var(--white-color);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
  margin-top: 40px;
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 40px;
    font-size: 24px;
  }
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
  color: var(--white-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  word-wrap: break-word;
`;

export const PopularCoctailsDescription = styled.p`
  height: 63px;
  color: var(--whitefifty-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
`;

import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justifu-content: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-basis: calc(100% - 20px / 2);
  }

  @media (min-width: 1280px) {
    flex-basis: calc(100% - 40px / 3);
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 600;

  @media (max-width: 320px) {
    font-size: 26px;
    text-align: center;
  }

  @media (min-width: 375px) {
    font-size: 28px;
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

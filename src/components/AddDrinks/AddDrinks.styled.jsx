import styled from 'styled-components';

export const AddDrinkTitle = styled.h2`
  color: var(--text-color);
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1875;
  margin-top: 80px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 56px;
  }

  @media (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const TotalWrapper = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    gap: 94px;
    margin-bottom: 140px;
  }
`;

export const TotalLinkWrspper = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;

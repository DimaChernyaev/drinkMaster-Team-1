import styled from 'styled-components';

export const Recipe = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const Title = styled.h3`
  margin-bottom: 40px;
  font-size: 28px;
`;

export const Preparation = styled.p`
  @media (max-width: 374px) {
    width: 300px;
  }
  width: 335px;
  color: var(--white-color);
  font-size: 14px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    width: 704px;
  }

  @media (min-width: 1280px) {
    width: 549px;
    font-size: 16px;
    margin-bottom: 0;
  }
`;

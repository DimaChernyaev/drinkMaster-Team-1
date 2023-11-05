import styled from 'styled-components';

export const Recipe = styled.div`
  margin-bottom: 80px;
  @media (min-width: 768px) {
    margin-bottom: 140px;
  }
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
  color: var(--text-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    width: 704px;
    line-height: 1.37;
  }

  @media (min-width: 1280px) {
    width: 549px;
    font-size: 16px;
    margin-bottom: 0;
  }
`;

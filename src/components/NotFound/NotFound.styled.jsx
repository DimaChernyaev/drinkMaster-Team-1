import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const Card = styled.img`
  width: 198px;
  height: 247px;
  margin-top: 51px;
  margin-left: 0;
  pading: 0;
  text-align: center;

  @media (min-width: 768px) {
    width: 261px;
    height: 326px;
    margin-top: 60px;
  }

  @media (min-width: 1440px) {
    margin-top: 27px;
  }
`;

export const Text = styled.p`
  // margin-top: 32px;
  width: 205px;
  color: #f3f3f3;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`;

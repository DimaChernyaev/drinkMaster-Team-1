import styled from '@emotion/styled';

export const ContainerError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 196px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    margin-top: 175px;
  }

  @media (min-width: 1440px) {
    margin-top: 223px;
  }
`;

export const Image = styled.img`
  width: 123px;
  height: 156px;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 158px;
    height: 201px;
  }
`;

export const Title = styled.p`
  color: rgba(243, 243, 243, 0.1);

  font-size: 120px;
  font-weight: 600;
  line-height: 1.02;

  @media (min-width: 768px) {
    font-size: 150px;
  }

  @media (min-width: 1440px) {
    font-size: 200px;
  }
`;

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

export const Wrapper = styled.div`
  padding-top: 200px;
  padding-bottom: 140px;
  display: flex;
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
  // font-family: Manrope;
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

export const Elipse = styled.div`
  width: 520px;
  height: 550px;
  flex-shrink: 0;

  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);
  z-index: -1;
  position: absolute;
  top: 20px;
  left: -399px;

  @media (min-width: 768px) {
    width: 784px;
    height: 829.931px;
    border-radius: 830px;
  }

  @media (min-width: 1440px) {
    height: 849px;
    border-radius: 849px;
  }
`;

export const ElipseTwo = styled.div`
  @media (min-width: 768px) {
    width: 549px;
    height: 543px;
    flex-shrink: 0;

    border-radius: 549px;
    background: rgba(64, 112, 205, 0.5);
    filter: blur(104.8543701171875px);
    z-index: -1;
    position: absolute;
    top: 498px;
    left: 651px;
  }

  @media (min-width: 1440px) {
    top: 458px;
    left: 1181px;
  }
`;

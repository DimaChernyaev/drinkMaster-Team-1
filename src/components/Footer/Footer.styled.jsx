import styled from '@emotion/styled';

export const FooterEl = styled.footer`
  padding-top: 40px;
  padding-bottom: 22px;
  border-top: 1px solid rgba(10, 10, 17, 0.5);
  background-color: var(--mainbackground-color);
  
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;

export const FooterMedia = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterMediaNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 400px;
  @media screen and (max-width: 1279px) {
    display: block;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    gap: 0;
  }
`;

import styled from '@emotion/styled';

export const CardList = styled.ul`
  
    //mobile
      display: flex;
      flex-wrap: wrap;
      gap: 28px;
      margin-bottom: 40px;
      

    //tablet
    @media (min-width: 768px) {
      row-gap: 40px;
      column-gap: 20px;
      margin-bottom: 80px;
    }

    //desktop
    @media (min-width: 1440px) {
      row-gap: 80px;
    }
`

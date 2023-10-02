import styled from '@emotion/styled';


export const Styled_CardListDiv  = styled.div`
    
      //mobile
      margin-bottom: 40px;

      //tablet
      @media screen and (min-width: 768px) {
        margin-bottom: 80px;
      }
`

export const CardList = styled.ul`
  
    //mobile
      display: flex;
      padding: 0;
      flex-wrap: wrap;
      gap: 28px;
      margin-bottom: 40px;
      

    //tablet
    @media screen and (min-width: 768px) {
      row-gap: 40px;
      column-gap: 20px;
      margin-bottom: 80px;
    }

    //desktop
    @media (min-width: 1280px) {
      row-gap: 80px;
    }
`

export const ContainerError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 160px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    margin-top: 175px;
    margin-bottom: 195px;
  }

  @media screen and (min-width: 12800px) {
    margin-top: 200px;
    margin-bottom: 140px;
  }
`;

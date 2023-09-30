import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  background-color: #0A0A11;
  max-width: 375px;

  @media screen and (min-width: 1440px) {
    display: flex;
    margin-top: 185px;
  }
`;

export const ContentContainer = styled.div`
  

  @media screen and (min-width: 768px) {

  }

  @media screen and (min-width: 1440px) {
    display: flex;
    margin-bottom: 160px;
  }
`;

export const ImgMain = styled.img`
  width: 252px;
  color: #F3F3F3;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: auto;
  margin-bottom: 112px;
  
  @media screen and (min-width: 768px) {
    margin-bottom: 123px;
    margin-left: 205px;
}

  @media screen and (min-width: 1440px) {
    width: 359px;
    flex-shrink: 0;
    margin: 0px;
    top: 212px;
    position: absolute;
    left: 831px;
    
  }
`;

export const Title = styled.h1`
  width: 335px;
  color: #F3F3F3;
  font-family: Manrope;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 641px;
    color: #F3F3F3;
    font-family: Manrope;
    font-size: 56px;
    font-style: normal;
    font-weight: 600;
    line-height: 68px;
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1440px) {
    width: 715px;
    color: #F3F3F3;
    font-family: Manrope;
    size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 68px;
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
  }
`;

export const Text = styled.p`
  width: 335px;
  color: #F3F3F3;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding-bottom: 32px;

  @media screen and (min-width: 768px) {
    width: 619px;
    color: #F3F3F3;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    padding-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
    color: #F3F3F3;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin: 0;
    padding-bottom: 40px;
  }
`;

export const BtnAddDrinks = styled(Link)`
  border-radius: 42px;
  background: #f3f3f3;
  color: #161f37;
  padding: 18px 44px;
  cursor: pointer;
  margin-bottom: 47px;

  &:hover,
  &:focus {
    background: #161f37;
    color: #f3f3f3;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 58px;
  }

  @media screen and (min-width: 1440px) {
    border-radius: 42px;
    background: #f3f3f3;
    color: #161f37;
    padding: 18px 44px;
    cursor: pointer;
  }
`;

export const Box = styled.div`
    margin-top: 80px;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (min-width: 768px){
        margin: 0px;

    }

    @media screen and (min-width: 1440px){
        margin: 0px;
    }
`;

export const BoxTwo = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 520px;
    left: 860px;
    display: inline;
    width: 387px;
    height: 381px;
    flex-shrink: 0;
    border-radius: 387px;
    background: rgba(188, 230, 210, 0.30);
    filter: blur(104.8543701171875px);
  }
`;

export const BoxTree = styled.div`
  position: absolute;
  top: 498px;
  left: 331px;
  width: 549px;
  height: 543px;
  flex-shrink: 0;
  border-radius: 549px;
  background: rgba(64, 112, 205, 0.50);
  filter: blur(104.8543701171875px);

  @media screen and (min-width: 768px){
    left: 651px; 
  }

  @media screen and (min-width: 1440px) {
    width: 549px;
    height: 543px;
    flex-shrink: 0;
    top: 700px;
    left: 1146px;
    border-radius: 549px;
    background: rgba(64, 112, 205, 0.50);
    filter: blur(104.8543701171875px);
  }
`;

export const BoxFour = styled.div`

  @media screen and (min-width: 1440px) {
    
}
    `;
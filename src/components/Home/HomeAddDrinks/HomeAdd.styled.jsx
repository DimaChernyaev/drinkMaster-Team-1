import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContentContainer = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 185px;
    padding-bottom: 140px;
  }
`;

export const ImgMain = styled.img`
  @media screen and (max-width: 767px) {
    width: 252;
    height: 313px;
  }

  @media screen and (min-width: 768px) {
    width: 359px;
    height: 445px;
  }
`;

export const Title = styled.h1`
  color: var(--white-color);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 56px;
    font-style: normal;
    font-weight: 600;
    line-height: 68px;
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1280px) {
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
  color: var(--white-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding-bottom: 32px;

  @media screen and (min-width: 768px) {
    color: var(--white-color);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    padding-bottom: 48px;
  }

  @media screen and (min-width: 1280px) {
    color: var(--white-color);
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
  background: var(--white-color);
  color: var(--blue-color);
  padding: 18px 44px;
  cursor: pointer;
  margin-bottom: 47px;
  transition:
    color var(--transition),
    background var(--transition);

  &:hover,
  &:focus {
    background: var(--blue-color);
    color: var(--white-color);
  }

  @media screen and (min-width: 1280px) {
    border-radius: 42px;
    background: var(--white-color);
    color: var(--blue-color);
    padding: 18px 44px;
    cursor: pointer;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 1279.5px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const BoxTwo = styled.div`
  @media screen and (max-width: 1279.5px) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    bottom: -140px;
    right: 80px;
    display: flex;
    z-index: -1;
    width: 387px;
    height: 381px;
    border-radius: 387px;
    background: rgba(188, 230, 210, 0.3);
    filter: blur(104.8543701171875px);
  }
`;

export const BoxWrapper = styled.div`
  @media screen and (max-width: 1279.5px) {
    margin-bottom: 45px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 130px;
  }
`;

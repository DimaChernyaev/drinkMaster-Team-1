import styled from '@emotion/styled';

export const DrinksListSet = styled.ul`
  // display: flex;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
  // display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  // grid-gap: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  // }
`;

export const CardWrap = styled.div`
  display: block;
  // flex-wrap: wrap;
  padding: 0;
  margin: 0;
  margin-bottom: 40px;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 342px;
  }

  @media (min-width: 1280px) {
    width: 400px;
  }
`;

export const DrinksItem = styled.li`
  width: 100%;
  max-width: 380px;
  padding: 5px;
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  margin-bottom: 10px;
  background-color: #fff;

  @media (min-width: 768px) {
    flex-basis: calc((100% - 2 * 20px) / 3);
  }

  @media (min-width: 1280px) {
    flex-basis: calc((100% - 3 * 20px) / 4);
  }
`;

export const ImgCard = styled.img`
  // width: 100%;
  width: 335px;
  display: block;
  // align-items: center;
  // justify-content: space-between;
  margin-bottom: 18px;
  // background-color: #fff;

  border-radius: 8px;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 17, 0.02) 51.18%,
    rgba(10, 10, 17, 0.77) 97.66%
  );

  @media (min-width: 375px) {
    width: 335px;
    height: 360px;
  }

  @media (min-width: 768px) {
    width: 342px;
    height: 360px;
  }

  @media (min-width: 1280px) {
    width: 400px;
    height: 400px;
  }
`;

export const TitleWrap = styled.div`
  margin-bottom: 18px;
`;

export const Title = styled.h5`
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 4px;
`;

export const TitleType = styled.p`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  margin-bottom: 24px;
`;

export const TitleDescription = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  margin-bottom: 24px;
`;

export const DrinksName = styled.span`
  margin-left: 15px;
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const ButtonSeeMore = styled.button`
  display: flex;
  padding: 14px 40px;
  align-items: flex-start;
  gap: 10px;

  font-weight: 600;
  line-height: 1.12;

  border: none;
  outline: none;
  border-radius: 42px;
  background: #161f37;
  color: #f3f3f3;

  transform: scale(1);
  transition: transform 200ms;

  &:hover,
  &:focus {
    // transform: scale(1.1);
    background: #f3f3f3;
    color: #161f37;
  }
`;

export const ButtonDel = styled.button`
  display: flex;
  width: 46px;
  padding: 11px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: none;
  outline: none;
  border-radius: 40px;
  background: #161f37;

  transform: scale(1);
  transition: transform 500ms;

  &:hover,
  &:focus {
    background: #434d67;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 700;

  text-align: center;
  margin-bottom: 20px;
`;

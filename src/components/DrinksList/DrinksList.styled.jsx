import styled from '@emotion/styled';

export const DrinksListSet = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 40px;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 80px;
    column-gap: 20px;
    margin-top: 60px;
  }

  @media (min-width: 1280px) {
    margin-top: 62px;
  }
`;

export const CardWrap = styled.li`
  display: block;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  margin-bottom: 40px;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 342px;
    margin-bottom: 0;
  }

  @media (min-width: 1280px) {
    width: 400px;
  }
`;

export const DrinksItem = styled.li`
  width: 100%;
  max-width: 380px;
  padding: 5px;
  margin-bottom: 10px;
  background-color: #fff;

  @media (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media (min-width: 1280px) {
    flex-basis: calc((100% - 40px) / 3);
  }
`;

export const ImgCard = styled.img`
  width: 335px;
  display: block;
  margin-bottom: 18px;

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
  color: var(--whitefifty-color);
  font-size: 14px;
  line-height: 1.28;
  margin-bottom: 18px;
`;

export const TitleDescription = styled.p`
  font-size: 14px;
  line-height: 1.28;
  margin-bottom: 18px;
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
  font-size: 14px;
  line-height: 1.28;
  border: 1px solid #161f37;
  outline: none;
  border-radius: 42px;
  background: var(--blue-color);
  color: var(--white-color);

  transform: scale(1);
  transition:
    transform var(--transition),
    background var(--transition),
    color var(--transition);

  &:hover,
  &:focus {
    transform: scale(1.05);
    background: var(--white-color);
    color: var(--blue-color);
    border: 1px solid var(--filter-border);
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
  background: var(--blue-color);

  transform: scale(1);
  transition:
    transform var(--transition),
    background var(--transition);

  &:hover,
  &:focus {
    background: var(--buttoncancel-color);
    transform: scale(1.05);
  }
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 700;

  text-align: center;
  margin-bottom: 20px;
`;

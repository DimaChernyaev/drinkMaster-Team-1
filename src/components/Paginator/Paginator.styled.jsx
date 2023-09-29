import styled from '@emotion/styled';
import ReactPaginate from 'react-paginate';
// import { colorStyled } from '../../helpers/colorStyled';

export const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  width: 295px;
  padding: 14px 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  gap: 49px;

  @media (min-width: 768px) {
    width: 436px;
    padding: 14px 24px;
    gap: 40px;
  }

  li {
    color: #f3f3f3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 28px;
    height: 28px;
    cursor: pointer;

    &:hover {
      background-color: rgba(64, 112, 205, 0.5);
      border-radius: 50%;
    }

    &.active {
      background-color: rgba(64, 112, 205, 0.5);
      border-radius: 50%;
    }
  }

  a {
    text-decoration: none;
    display: inline-block;
    text-align: center;
    color: #f3f3f3;

    font-size: 12px;
    // width: 27px;
    // height: 27px;
  }
`;

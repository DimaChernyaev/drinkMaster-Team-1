import styled from '@emotion/styled';
import ReactPaginate from 'react-paginate';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

export const PreviousButton = styled(MdOutlineArrowBackIos)`
  color: rgba(243, 243, 243, 0.3);
  width: 15px;
  height: 15px;
  transition: color var(--transition);

  &:hover {
    color: var(--white-color);
  }
`;

export const NextButton = styled(MdOutlineArrowForwardIos)`
  color: rgba(243, 243, 243, 0.3);
  width: 15px;
  height: 15px;
  transition: color var(--transition);

  &:hover {
    color: var(--white-color);
  }
`;

export const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  max-width: 295px;
  padding: 14px 0;
  margin: 0 auto;
  margin-botom: 80px;
  // justify-content: space-between;
  justify-content: center;
  align-items: center;
  gap: 14px;

  @media (min-width: 768px) {
    max-width: 436px;
    height: 55px;
    padding: 14px 24px;
    margin-top: 80px;
    margin-botom: 100px;
    gap: 24px;
  }

  li {
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 27px;
    min-height: 27px;
    cursor: pointer;
    border-radius: 50%;
    transition: background var(--transition);

    &:hover {
      background-color: var(--hovergreen-color);
    }

    &.active {
      background-color: var(--hovergreen-color);
    }

    &.selected {
      background-color: var(--hovergreen-color);
      border-radius: 50%;
      color: #f3f3f3;
    }
  }

  a {
    text-decoration: none;
    display: inline-block;
    text-align: center;
    // color: var(--text-color);
    font-weight: 500;
    font-size: 12px;
    width: 100%;
    height: 100%;

    &.selected,
    &:hover,
    &.active {
      color: #f3f3f3;
    }
    border-radius: 50%;
  }

  .previous {
    transition: fill 200ms linear;

    &:hover {
      background-color: transparent;
    }

    @media (min-width: 768px) {
      margin-right: 16px;
    }
  }

  .next {
    fill: red;
    transition: fill 200ms linear;

    &:hover {
      background-color: transparent;
    }

    @media (min-width: 768px) {
      margin-left: 16px;
    }
  }
`;

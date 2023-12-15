import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { ReactComponent as LoaderIcon } from '../../assets/images/loader.svg';

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 80px;
  margin-bottom: 80px;
`;

export const LoaderSVG = styled(LoaderIcon)`
  fill: var(--text-color);
  color: var(--text-color);
  stroke: var(--text-color);
  animation: ${bounce} 1s ease infinite;

  @media (min-width: 375px) {
    width: 220px;
  }

  @media (min-width: 768px) {
    width: 300px;
  }

  @media (min-width: 1280px) {
    width: 300px;
  }
`;

export const LoaderText = styled.p`
  color: var(--text-color);
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

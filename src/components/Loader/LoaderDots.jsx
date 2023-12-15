import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const LoaderDots = () => {
  return (
    <LoaderContainer>
      <ThreeDots color="rgba(64, 112, 205, 0.5)" width="80" />
    </LoaderContainer>
  );
};

export default LoaderDots;

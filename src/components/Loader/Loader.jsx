import { LoaderContainer, LoaderSVG, LoaderText } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderSVG />
      <LoaderText>Loading...</LoaderText>
    </LoaderContainer>
  );
};

export default Loader;

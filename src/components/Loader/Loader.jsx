import { LoaderContainer, LoaderSVG, LoaderText } from './Loader.styled';

const Loader = ({ text }) => {
  return (
    <LoaderContainer>
      <LoaderSVG />
      <LoaderText>{text}</LoaderText>
    </LoaderContainer>
  );
};

export default Loader;

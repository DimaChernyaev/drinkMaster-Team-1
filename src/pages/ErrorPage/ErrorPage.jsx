import { NotFound, ContainerError, Image, Wrapper } from './ErrorPage.styled';
import image from '../../assets/images/coctailPhoto.png';

const ErrorPage = () => {
  return (
    <ContainerError>
      <Wrapper>
        <NotFound>4</NotFound>
        <Image src={image} alt="404"></Image>
        <NotFound>4</NotFound>
      </Wrapper>
    </ContainerError>
  );
};

export default ErrorPage;

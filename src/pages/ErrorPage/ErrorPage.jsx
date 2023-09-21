import { Title, ContainerError, Image } from './ErrorPage.styled';
import image from '../../assets/images/coctailPhoto.png';

const ErrorPage = () => {
  return (
    <ContainerError>
      <Title>4</Title>
      <Image src={image} alt="404"></Image>
      <Title>4</Title>
    </ContainerError>
  );
};

export default ErrorPage;

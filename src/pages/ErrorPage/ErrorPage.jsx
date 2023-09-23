
import {
  Title,
  ContainerError,
  Image,
  Elipse,
  ElipseTwo,
} from './ErrorPage.styled';
import image from '../../assets/images/NotFoundImg/error_blue_iced_tea_1.png';


const ErrorPage = () => {
  return (
    <ContainerError>
      <Elipse />
      <ElipseTwo />
      <Title>4</Title>
      <Image src={image} alt="404"></Image>
      <Title>4</Title>
    </ContainerError>
  );
};

export default ErrorPage;

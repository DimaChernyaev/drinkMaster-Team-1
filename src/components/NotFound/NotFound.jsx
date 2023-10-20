import Img from '../../assets/images/NotFoundImg/asr_blue_iced_tea_1.png';
import { Wrap, Card, Text } from './NotFound.styled';

const NotFound = ({text}) => {
  return (
    <Wrap>
      <Card src={Img} alt="blue iced tea" />
      <Text> {text}</Text>
    </Wrap>
  );
};

export default NotFound;

import Img from '../../assets/images/NotFoundImg/asr_blue_iced_tea_1.png';
import { Wrap, Card, Text } from './NotFound.styled';

const NotFound = () => {
  return (
    <Wrap>
      <Card src={Img} alt="blue iced tea" />
      <Text> You haven't added any favorite cocktails yet</Text>
    </Wrap>
  );
};

export default NotFound;

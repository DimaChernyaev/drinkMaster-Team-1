import img from '../../Home/HomePageImg/desktop2x.png';
import {
  Box,
  ContentContainer,
  Title,
  Text,
  ImgMain,
  BtnAddDrinks,
  BoxWrapper,
  BoxTwo,
} from './HomeAdd.styled';

const HomeAdd = () => {
  return (
    <ContentContainer>
      <Box>
        <BoxWrapper>
          <Title>
            Craft Your Perfect <b /> Drink with Drink Master
          </Title>
          <Text>
            Unlock your inner mixologist with Drink Master, your one-stop
            destination for exploring, crafting, and mastering the world´s
            finest beverages.
          </Text>

          <BtnAddDrinks to="/add">Add drink</BtnAddDrinks>
        </BoxWrapper>
        <ImgMain src={img} alt="main-coctail" />
        <BoxTwo />
      </Box>
    </ContentContainer>
  );
};

export default HomeAdd;

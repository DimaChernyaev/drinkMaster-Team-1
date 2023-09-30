
import img from '../../Home/HomePageImg/desktop2x.png'
import { 
  Box, 
  Container,
  ContentContainer, 
  Title, 
  Text, 
  ImgMain, 
  BtnAddDrinks, 
  BoxTwo, 
  BoxTree, 
  BoxFour} from './HomeAdd.styled'

const HomeAdd = () => {
return (
    <Container>
     <ContentContainer>  
        <Box>
          <Title>
            Craft Your Perfect <b /> Drink with Drink Master
          </Title>
          <Text>
            Unlock your inner mixologist with Drink Master, your one-stop
            destination for exploring, crafting, and mastering the world´s
            finest beverages.
          </Text>
          
          <BtnAddDrinks to="/add">Add drink</BtnAddDrinks>
        </Box>
        <ImgMain src={img} alt='main-coctail'/>
        <BoxTwo></BoxTwo>
        <BoxTree></BoxTree>
        <BoxFour></BoxFour>
    </ContentContainer>
  </Container>
)

};

export default HomeAdd;
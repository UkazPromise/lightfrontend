import styled from "styled-components"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import { mobile } from "../src/responsive";

const Container = styled.div`
    display: flex;
    background-color: teal;
    color: white;
    ${mobile({ flexDirection: "column"})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px; 
`;

const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const Center = styled.div`
    flex: 1;
    padding: 20px; 
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px; 
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
`;


const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LIGHT24/7</Logo>
            <Desc> Light 24/7 is poised to make power available to anyone who needs power,
            we will build the solar and inverter according to your desired specification, 
            and available amount.</Desc>
        </Left>
        <Center>
            <Title>Products</Title>
            <List>
            <ListItem>Solar Panels</ListItem>
            <ListItem>Inverters</ListItem>
            <ListItem>Mount Accesories</ListItem>
            <ListItem>Deep Cycle Batteries</ListItem>
            <ListItem>Led Bulbs</ListItem>
            <ListItem>Installation Accesories</ListItem>
            <ListItem>Stabilizers</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <SocialContainer>
                <SocialIcon color="25D366">
                    <WhatsAppIcon/> 
                </SocialIcon>
            </SocialContainer>
            <ContactItem>
                <RoomIcon style={{marginRight:"10px"}}/> Area H, World Bank Housing, Owerri, Imo State.
            </ContactItem>
            <ContactItem>
                <PhoneIcon style={{marginRight:"10px"}}/> +2347056674363
            </ContactItem>
            <ContactItem>
                <MailOutlineIcon style={{marginRight:"10px"}} /> contact@light24/7.com
            </ContactItem>
        </Right>
    </Container>
  )
};

export default Footer
import styled from "styled-components"
import { mobile } from "../src/responsive";

const Container = styled.div`
  display: flex;
  background-color: #38ACEC;
  color: white;
`
const Wrapper  = styled.div`
  padding: 10px 20px
`
const Logo  = styled.h1`
  margin-bottom: 10px;
  color: white;
  font-weight: 700;
  text-align: center;
  font-size: 40px;
`
const Desc = styled.p`
  margin: 20px 0px;
  text-align: center;
  font-size: 20px;
`
const ProjectContainer = styled.div`
  display: flex;
  ${mobile({ padding: "1px", flexDirection: "column"})}
  `
const List = styled.ul`
  color: white;
`
const Box = styled.div`
  background-color: #033E3E;
  border: 1px #ccc solid;
  max-width: 400px;
  padding: 10px;
  margin: 8px
`
const Header = styled.h2`
  background-color: teal;
  color: white;
  justify-content: center;
`
const Para = styled.p`
  border: 1px #ccc solid;
  background-color: green;
  color: white;
  justify-content: center; 
`
const Paraw = styled.h3`
  color: white;
  justify-content: center;
`
const Des = styled.p`
  margin: 20px 0px;
  color: white;
`

const Projects = () => {
  return (
    <Container id="Projects">
      <Wrapper>
        <Logo>Projects</Logo>
        <Desc>Light24/7 is a firm notable for distribution and installation of solar<br/>
        equipments. Our specialized team provide innovative and personalized solar <br/>
        solar energy that are awesome. Light24/7 is specialized in designing, execution, <br/>
        installation and maintenence of solar power system</Desc>
        <ProjectContainer>
            <Box>
              <Header>1.2KVA Solar Solution</Header>
              <Para>Perfect for micro business and basic home appliances</Para>
              <Paraw>Some Appliances it Can Power</Paraw>
              <List>
                <li>One TV Set(70 watts or more)</li>
                <li>6 LED Bulbs(30watts)</li>
                <li>One Fan(60 watts)</li>
                <li>Clippers</li>
                <li>One Decoder (20 watts)</li>
                <li>Sound System (50 watts)</li>
              </List>
              <Des>Power Your Essential Household Or Office Appliances With the<br/> Light24/7 1.2KVA Affordable Solar Solution. Perfect for small businesses<br/>and customized home solutions @₦450,000.00 one-off or instalment payment.<br/>The solution can comfortably carry a load of up to 230 watts</Des>
            </Box>
            <Box>
              <Header>3KVA Solar Solution</Header>
              <Para>Perfect for business and some home appliances</Para>
              <Paraw>Some Appliances it Can Power</Paraw>
              <List>
                <li>One TV Set(70 watts or more)</li>
                <li>6 LED Bulbs(30watts)</li>
                <li>One Fan(60 watts)</li>
                <li>Clippers</li>
                <li>One Decoder (20 watts)</li>
                <li>Sound System (50 watts)</li>
              </List>           
              <Des>A 3 KVA solar system is a small size solar solution mainly to power essential household <br/>appliances. Depending on your energy consumption, the 3KVA solar system may just <br/>be a perfect fit for all your essential energy needs.</Des>
            </Box>
            <Box>
              <Header>5 KVA Solar Solution</Header>
              <Para>Perfect for business and basic home appliances</Para>
              <Paraw>Some Appliances it Can Power</Paraw>
              <List>
                <li>1 Freezer</li>
                <li>1 fridge</li>
                <li>4 TVs</li>
                <li>Pumping machine when some appliances are off</li>
                <li>4 Fans</li>
                <li>More appliances</li>
              </List>
              <Des>The 5 KVA solution may power every appliance <br/>you have depending on your need. But below are some of the things the <br/>solution can power at once or a load of not more than 2000W. If you are <br/>running all the appliances in the nighttime, your battery can run for <br/>7 hours and much more if you are running a few of the appliances.</Des>
            </Box>
        </ProjectContainer>
        <ProjectContainer>
            <Box>
              <Header>10 KVA Solar Solution</Header>
              <Para>Perfect for small business and home use</Para>
              <Paraw>Some Appliances it Can Power</Paraw>
              <List>
                <li>2 units of 1.5HP AC at the same time</li>
                <li>Freezer</li>
                <li>Fridge</li>
                <li>Multiple fans</li>
                <li>Multiple TV</li>
                <li>More</li>
              </List>
              <Des>A 10 kva off grid solar system can <br/>eliminate your home dependency on the main energy grid, and help <br/>you have money. Using the right solar panels for installation can produce more <br/>energy than your house needs. With a good professional installation service, <br/>you can enjoy uninterruptible power with peace of mind</Des>
            </Box>
            <Box>
              <Header>15 KVA Solar Solution</Header>
              <Para>Perfect for small business and residential use</Para>
              <Paraw>Some Appliances it Can Power</Paraw>
              <List>
                <li>Multiple units of AC at the same time</li>
                <li>Freezers</li>
                <li>Fridges</li>
                <li>Multiple fans</li>
                <li>Pumping Machines</li>
                <li>More</li>
              </List>
              <Des>Getting the right 15 KVA solar system can serve as the <br/>solution to an uninterruptible power supply for your home or business. <br/>There is the option for a 15kva solar system without batteries for <br/>backup energy or the solution that comes with batteries.</Des>
            </Box>
            <Box>
              <Header>30 KVA Solar Solution</Header>
              <Para>Perfect for small business and home use</Para>
              <Paraw>Some Appliances it Can Power</Paraw>
              <List>
                <li>Multiple ACs</li>
                <li>Freezers</li>
                <li>Fridges</li>
                <li>Multiple fans</li>
                <li>Multiple TV</li>
                <li>More</li>
              </List>
              <h5>Contact us for your free quote</h5>
            </Box>
        </ProjectContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
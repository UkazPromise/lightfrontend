import React from 'react'
import styled from "styled-components"
import { mobile } from "../src/responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column"})}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    Justify-content: space-between;
`;

const Left  = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h1`
  margin-bottom: 10px;
  font-weight: 700;
  text-align: start;
  font-size: 60px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`
const Right = styled.div`
  flex: 2;
  padding: 20px;
`;
const Img = styled.img`
  width: 100%;
  border-radius: 10px
`;

const About = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>About Us</Logo>
          <Desc>Light24/7 is a power servicing firm, we are into solar installation and we build based on your specification</Desc>
          </Left>
          <Right>
          <Img src='/Img/solar1.jfif' alt=''/>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default About
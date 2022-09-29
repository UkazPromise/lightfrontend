import React from 'react'
import styled from "styled-components"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { mobile } from "../src/responsive";

const Container = styled.div`
padding: 30px 0;
display: flex;
text-align: center;
background-color: #EBF4FA;
color: white;
${mobile({ flexDirection: "column"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  Justify-content: space-between;
`;

const Abou  = styled.div`
  padding: 50px;
  text-align: center;
  background-color: #4863A0;
  color: white;
`;

const Logo = styled.h1`
  margin-bottom: 10px;
  color: white;
  font-weight: 700;
  text-align: center;
  font-size: 40px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 200;
`
const Header = styled.h2`
  text-align: center;
  color: white;
`
// const First = styled.div`
//   height: 700px;
//   margin-top: 8px;
//   ${mobile({ padding: "1px", flexDirection: "column"})}
// `
// const Second = styled.div`
//   float: left;
//   width: 33.3%;
//   margin-bottom: 16px;
//   padding: 0 8px;
// `
// const Third = styled.div`
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
//   margin: 8px;
// `
// const Box = styled.div`
//   padding: 0 16px;
//   background-color: #033E3E;
//   color: white;
// `
// const Pho = styled.img`
//   width: 100%;
//   height: auto;
// `
const Caro = styled.div`
  background: #4863A0;
`
const Img = styled.img`
  width: 220px !important;
  margin-top: 5px;
  border-radius: 50%;
`
const MyCarousel = styled.div`
  background: #fafafa;
  margin-top: -7%;
  width: 88%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 8%;
  padding-bottom: 12.5%;
  padding-left: 5%;
  padding-right: 5%;
  border: 1px solid #ddd;
  height: 269px;
`
const Loki = styled.h3`
  color: #222;
  font-weight: 100;
  letter-spacing: 0.2px;
  margin-bottom: 4px;
  margin-top: 5px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 17px;
`
const Loka = styled.h4`
  text-transform: uppercase;
  margin-top: 0;
  padding-top: 0;
  font-weight: 500;
  color: #787878;
  font-size: 14px;
`
const Note = styled.p`
  font-weight: 10px;
  line-height: 29ppx;
  color: #222;
  font-size: 15px;
  font-family: sans-serif;
  max-height: 67px;
`

const About = () => {
  return (
    <Container id="About">
      <Wrapper>
        <Abou>
          <Logo>About Us</Logo>
          <Desc>Light24/7 is a power servicing firm, we are into solar installation and we build based on your specification</Desc>
        </Abou>
        {/* <First >
          <Header>Our Team</Header>
          <Second >
            <Third>
              <Pho src="/Img/Engr. Eric.jpg" alt="Eric"/>
              <Box>
                <Header>Engr. Chidi</Header>
                <p className="title">CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>chidi@example.com</p>
                <p><button className="button">Contact</button></p>
              </Box>
            </Third>
          </Second>

          <Second>
            <Third>
              <Pho src="/Img/Engr. Eric.jpg" alt="Chidi"/>
              <Box>
                <Header>Engr. Chidi</Header>
                <p className="title">Chief Engineer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>chidi@example.com</p>
                <p><button className="button">Contact</button></p>
              </Box>
            </Third>
          </Second>

          <Second className="column">
            <Third className="card">
              <Pho src="/Img/Engr. Eric.jpg" alt="Chidi"/>
              <Box>
                <Header>Engr. Chidi</Header>
                <p className="title">Maintence Head</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>chidi@example.com</p>
                <p><button className="button">Contact</button></p>
              </Box>
            </Third>
          </Second>
        </First> */}
        <Caro>
          <Header>Testimonies</Header>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}
          >
            <div>
              <Img src="/Img/justman.jpg" alt='' />
              <MyCarousel>
                <Loki>Justice Iheanacho</Loki>
                <Loka>Our Client</Loka>
                <Note>
                  It's freeing to be able to catch up on customized news and not be
                  distracted by a social media element on the same site
                </Note>
              </MyCarousel>
            </div>

            <div>
              <Img src="/Img/ukaz2.jpg" alt='' />
              <MyCarousel>
                <Loki>Ukachukwu Promise</Loki>
                <Loka>Our Client</Loka>
                <Note>
                  The simple and intuitive design makes it easy for me use. I highly
                  recommend Fetch to my peers.
                </Note>
              </MyCarousel>
            </div>

            <div>
              <Img src="/Img/paulo.jpg" alt='' />
              <MyCarousel>
                <Loki>Jahswil Ozuzuezi</Loki>
                <Loka>Our Client</Loka>
                <Note>
                  I enjoy catching up with Fetch on my laptop, or on my phone when
                  I'm on the go!
                </Note>
              </MyCarousel>
            </div>
          </Carousel>
        </Caro>
      </Wrapper>
    </Container>
  )
}

export default About
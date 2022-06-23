import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Container = styled.div`
    width: 100%;
    @media (width < 600px) {
        carousel{
            display: 380px;
        }
    }
`
const Img = styled.img`
    width: 100%;
    height: 90vh
`
const HeadingText = styled.h1`
    color: white;
    height: min-content;
    font-size: 2em;
    max-width: 600px;
    letter-spacing: 0px;
    font-weight: bold;
    `
const Heading = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    top: 0;
    background: rgba(0, 0, 0, 0.5); /* Black see-through */
    width: 100%;
    opacity:1;
    font-size: 20px;
    padding: 20px;
    text-align: center;
    `

const Slider = () => {
  return (
        <Container style={{marginTop: '90px'}}>
            <Carousel autoPlay infiniteLoop showThumbs={false} interval={10000} emulateTouch showStatus={false}>
                <div style={{position: 'relative'}}>
                    <Img src="/Img/solarrepair.jpg" alt='' />
                    <Heading><HeadingText>Solar Installation Maintenance</HeadingText></Heading>
                </div>
                <div style={{position: 'relative'}}>
                    <Img src="/Img/solarkit.jpg" alt=''/>
                    <Heading><HeadingText>Distribution of Solar Equipment</HeadingText></Heading>
                </div>
                <div style={{position: 'relative'}}>
                    <Img src="/Img/solar6.jpg" alt='' />
                    <Heading><HeadingText>Legend 3</HeadingText></Heading>
                </div>
                <div style={{position: 'relative'}}>
                    <Img src="/Img/solarresidential.jpg" alt='' />
                    <Heading><HeadingText>Legend 3</HeadingText></Heading>
                </div>
            </Carousel>
        </Container>
  )
}

export default Slider
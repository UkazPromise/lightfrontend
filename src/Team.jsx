import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import styled from "styled-components";
import { mobile } from "../src/responsive";

const Container = styled.div`
    margin: 0;
    display: flex;
    padding: 0;
    box-sizing: border-box;
    font-family: Exo;
    ${mobile({ flexDirection: "column"})}
`

const Wrapper = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0c5db9;
`

const Head = styled.div`
    padding: 50px;
    text-align: center;
    background-color: #4863A0;
    color: white;
`
// const Logo = styled.h1`
//     margin-bottom: 10px;
//     color: white;
//     font-weight: 700;
//     text-align: center;
//     font-size: 40px;
// `

const Card = styled.div`
    position: relative;
    font-family: sans-serif;
    width: 220px;
    height: 220px;
    background: #fff;
    padding: 30px;
    border-radius: 50%;
    box-shadow: 0 0 22px #3336;
    transition: .6s;
    margin: 0 25px;

    &:hover {
        border-radius: 10px;
        height: 260px;
    } 
`
const Photo = styled.div`
    position: relative;
    width: 100%;
    height: 90%;
    transition: .6s;
    z-index: 99;

    &:hover {
        transform: translateY(-60px);
    }
`
const Img = styled.img`
    width: 100%;
    border-radius: 50%;
    box-shadow: 0 0 22px #3336;
    transition: .6s;

    &:hover {
        border-radius: 10px;
    }
`
const Caption = styled.div`
    text-align: center;
    transform: translateY(-80px);
    opacity: 0;
    transition: .6s;

    &:hover {
        opacity: 1;
    }
`
const Header = styled.h4`
    font-size: 21px;
    font-family: sans-serif;
`
const Desc = styled.p`
    font-size: 15px;
    color: #0c52a1;
    font-family: sans-serif;
    margin: 2px 0 9px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
// const SocialIcon = styled.div`
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     color: white;
//     background-color: #${(props) => props.color};
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-right: 20px;
// `;

const Link = styled.a`
    color: #333;
    margin-right: 15px;
    font-size: 21px;
    transition: .6s;

    &:hover{
        color: #0c52a1;
    {
`

const Team = () => {
  return (
    <Container>
        <Wrapper>
            <Head>OUR TEAM</Head>
            <Card>
                <Photo>
                    <Img src="/Img/ukaz2.jpg" alt=''/>
                </Photo>
                <Caption>
                    <Header>Engr. Chidi</Header>
                    <Desc>CEO</Desc>
                    <SocialContainer>
                        <Link href="https://api.whatsapp.com/send/?phone=2348064747096"
                            className="WhatsApp">
                            <WhatsAppIcon />
                        </Link>
                        <Link href="https://www.facebook.com/ukachukwu.promise"
                            className="Facebook">
                            <FacebookIcon />
                        </Link>
                        <Link href="https://twitter.com/UkazBlog"
                            className="Twitter">
                            <TwitterIcon />
                        </Link>
                        <Link href="https://www.linkedin.com/in/ukachukwu-promise-676aa7129/"
                            className="LinkedIn">
                            <LinkedInIcon />
                        </Link>
                    </SocialContainer>
                </Caption>
            </Card>
            <Card>
                <Photo>
                    <Img src="/Img/ukaz2.jpg" alt=''/>
                </Photo>
                <Caption>
                    <Header>Engr. Chidi</Header>
                    <Desc>CEO</Desc>
                    <SocialContainer>
                        <Link href="https://api.whatsapp.com/send/?phone=2348064747096"
                            className="WhatsApp">
                            <WhatsAppIcon />
                        </Link>
                        <Link href="https://www.facebook.com/ukachukwu.promise"
                            className="Facebook">
                            <FacebookIcon />
                        </Link>
                        <Link href="https://twitter.com/UkazBlog"
                            className="Twitter">
                            <TwitterIcon />
                        </Link>
                        <Link href="https://www.linkedin.com/in/ukachukwu-promise-676aa7129/"
                            className="LinkedIn">
                            <LinkedInIcon />
                        </Link>
                    </SocialContainer>
                </Caption>
            </Card>
            <Card>
                <Photo>
                    <Img src="/Img/ukaz2.jpg" alt=''/>
                </Photo>
                <Caption>
                    <Header>Engr. Chidi</Header>
                    <Desc>CEO</Desc>
                    <SocialContainer>
                        <Link href="https://api.whatsapp.com/send/?phone=2348064747096"
                            className="WhatsApp">
                            <WhatsAppIcon />
                        </Link>
                        <Link href="https://www.facebook.com/ukachukwu.promise"
                            className="Facebook">
                            <FacebookIcon />
                        </Link>
                        <Link href="https://twitter.com/UkazBlog"
                            className="Twitter">
                            <TwitterIcon />
                        </Link>
                        <Link href="https://www.linkedin.com/in/ukachukwu-promise-676aa7129/"
                            className="LinkedIn">
                            <LinkedInIcon />
                        </Link>
                    </SocialContainer>
                </Caption>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Team
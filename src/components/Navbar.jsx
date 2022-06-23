import React from 'react'
import styled from 'styled-components'

const Container = styled.nav`
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 10000000;
    width: 100%;
    margin-top: 30px; 
    
`

const Wrapper = styled.div`
    width: 100%;
    padding: 10px 20px;
    height: 80px;
    display: flex;
    Justify-content: space-between;
    
`

const Left = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex: 3;
    display: flex;
    Justify-content: flex-end;
    margin: auto 0;
    font-weight: 500;
`

const NavbarLink = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;

    @media (max-width: 700px) {
        display: none;
    }
`
const OpenLinkButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: black;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 700px) {
        display: none;
    }
`;

const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none;
    }
`;

const NavbarLinkExtended = styled.link`
    color: white;
    font-size: x-large;
    cursor: pointer;
    text-decoration: none;
    margin: 10px;

`;

const Navbar = () => {

  return (
    <Container>
        <Wrapper>
            <Left><Logo>LIGHT24/7</Logo></Left>
            <Right>
                <NavbarLink to="/">HOME</NavbarLink>
                <NavbarLink to="About">ABOUT US</NavbarLink>
                <NavbarLink to="Projects">PROJECTS</NavbarLink>
                <NavbarLink to="Contact">CONTACT US</NavbarLink>
                <OpenLinkButton>
                    &#8801;
                </OpenLinkButton>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
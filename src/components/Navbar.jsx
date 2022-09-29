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

const NavbarLink = styled.a`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    text-decoration: none;

    &:hover {
            box-shadow: inset 100px 0 0 0 teal;
            color: white;
            cursor: pointer;
            transform: translateY(0) scale(1.2);
        } 
    }

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

const Navbar = () => {

  return (
    <Container>
        <Wrapper>
            <Left><Logo>LIGHT24/7</Logo></Left>
            <Right>
                <NavbarLink href="#Home">HOME</NavbarLink>
                <NavbarLink href="#About">ABOUT US</NavbarLink>
                <NavbarLink href="#Projects">PROJECTS</NavbarLink>
                <NavbarLink href="#Contact">CONTACT US</NavbarLink>
                <OpenLinkButton>
                    &#8801;
                </OpenLinkButton>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
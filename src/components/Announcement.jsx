import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000000;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
`

const Announcement = () => {
  return (
    <Container>
        Tested and Trusted, Feel Free to Patronize Us.
    </Container>
  )
}

export default Announcement
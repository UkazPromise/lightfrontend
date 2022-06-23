import React from 'react'
import styled from 'styled-components'
import { mobile } from "../src/responsive";

const Container = styled.div`
    display: column;
    width: 100vw;
    background-color: green;
    color: white;
    diplay: flex;
    ${mobile({ flexDirection: "column"})}
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
`
const Form = styled.form`

`
const Title = styled.h1`
    color: white;
    margin-bottom: 10px;
    font-weight: 700;
    text-align: start;
    font-size: 60px;
`
const Desc = styled.p`
    font-size: 15px;
    margin: 20px 0px;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px;
    padding: 10px;
`
const Button = styled.button`

`

const Contact = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Contact us to request free quote</Title>
            <Desc> Light24/7 Limited has helped many companies and Individuals across Nigeria make a seamless transition to <br/>
            clean and dependable renewable energy. We deploy our expert personnel to evaluate and calculate your energy need to <br/>
            ensure a smooth complete or partial transition for homes and businesses.</Desc>
            <Form>
                <Input placeholder="First name"/>
                <Input placeholder="Last name"/>
                <Input placeholder="Phone number"/>
                <Input placeholder="Email"/>
                <Input placeholder="State of residence"/>
                <Input placeholder="Home address"/>
                <Desc>What Do You Require Solar Solution For?</Desc>
                <Input type="checkbox" name="Home use"/>Home use&nbsp;&nbsp;
                <Input type="checkbox" name="Office/business use"/>Office/business use&nbsp;&nbsp;
                <Desc>Do You Know Your Exact Energy Need?</Desc>
                <Input type="checkbox" name="Yes"/>Yes&nbsp;&nbsp;
                <Input type="checkbox" name="No"/>No: I need your expert opinion on it&nbsp;&nbsp;
                <Desc>How Would You Like to Receive Your Quote?</Desc>
                <Input type="checkbox" name="Email"/>E-mail&nbsp;&nbsp;
                <Input type="checkbox" name="WhatsApp"/>WhatsApp&nbsp;&nbsp;
                <Desc>Any Message or Request</Desc>
                <textarea type='textarea'></textarea>
                <Button>Submit</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Contact
import  {React, useState } from 'react'
//import {render} from 'react-dom';
//import axios from 'axios';
import styled from 'styled-components'
import { mobile } from "../src/responsive";

const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: #F8F6F0;
    padding: 10px;
    ${mobile({ flexDirection: "column"})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    margin: auto;
`
const Form = styled.form`
    letter-spacing: normal;
    max-width: 700px;
    padding:10px;
    margin: auto;
    flex-flow: column;
    border: 2px solid #000;
    border-radius: 20px;
    background: #151B54;
`
const Label = styled.div`
    width: 70%;
    display: block;
    color: white;
`

const Title = styled.h1`
    color: black;
    margin-bottom: 10px;
    font-weight: 700;
    color: #000000;
    text-align: start;
    font-size: 40px;
    text-align: center;
`
const Desc = styled.p`
    font-size: 15px;
    color: #000000;
    margin: 20px 0px;
    text-align: center;
`
const Input = styled.input`
    flex: 3;
    width: 100%;
    margin: 5px;
    padding: 5px;
`
const Des = styled.p`
    text-align: start;
    color: white;
    font-weight: bold;
`
const Checkbox = styled.input`
    flex-flow: column;
    cursor: pointer;
`
const Textarea = styled.textarea`
    height: 170px;
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    margin-top: 6px;
    margin-bottom: 16px;
    box-shadow: 1px 1px 4px 1px rgb(49,170,240);
    resize: vertical;
`
  
  const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, number, email, state, address, message } = e.target.elements;
      let details = {
        name: name.value,
        number: number.value,
        email: email.value,
        state: state.value,
        address: address.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };
    return (
      <Container id="Contact">
          <Wrapper>
              <Title>Contact us to request free quote</Title>
              <Desc> Light24/7 Limited has helped many companies and Individuals across Nigeria make a seamless transition to <br/>
              clean and dependable renewable energy. We deploy our expert personnel to evaluate and calculate your energy need to <br/>
              ensure a smooth complete or partial transition for homes and businesses.</Desc>
              <Form onSubmit={handleSubmit}>
                  <Label>
                      <Input type="text" id="name" required placeholder="Fullname" />
                  </Label>
                  <Label>
                      <Input id="number" type="text" required placeholder="Phone number" />
                  </Label>
                  <Label>
                      <Input type="email" id="email" required placeholder="email" />
                  </Label>
                  <Label>
                      <Input id="state" type="text" required placeholder="State"/>
                      <Input name="address" type="type" required placeholder="Address"/>
                  </Label>
                  <Label>
                      <Des>What Do You Require Solar Solution For?</Des>
                      <Checkbox input type="checkbox" id="home"/>Home use
                      <Checkbox input type="checkbox" id="office"/>Office/business use
                  </Label>
                  <Label>
                      <Des>Do You Know Your Exact Energy Need?</Des>
                        <Checkbox input type="radio" value="yes" name="energy" /> Yes
                        <Checkbox input type="radio" value="no" name="energy" /> No: I need your expert opinion on it
                  </Label>
                  <Label>
                      <Des>How Would You Like to Receive Your Quote?</Des>
                      <Checkbox input type="checkbox"  id="Email"/>E-mail
                      <Checkbox input type="checkbox"  id="WhatsApp"/>WhatsApp
                  </Label>
                  <Label>
                      <Des>Any Message or Request</Des>
                      <Textarea id='message' rows="5" required >Message</Textarea>
                  </Label>
                  <button type="submit" >{status}</button>
              </Form>
          </Wrapper>
      </Container>
  );

}
export default Contact;
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  margin-top:50px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  @media only screen and (max-width: 1028px) {
   margin-top:5px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 1028px) {
    justify-content: center;
    width:100%;
  }
`;

const Title = styled.h1`
  font-weight: 200;
  @media only screen and (max-width: 1028px) {
   font-size:50px;
   margin:10px 2px;
  }
`;

const Form = styled.form`
  width:500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 1028px) {
    width:500px;
  }
`;

const Input = styled.input`
  padding:20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  @media only screen and (max-width: 1028px) {
    font-size:40px;
    margin:10px 2px;
  }
`;

const TextArea = styled.textarea`
  padding:20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
  @media only screen and (max-width: 1028px) {
    font-size:40px;
    margin:10px 2px;
  }
`;

const Button = styled.button`
   background-color: rgb(82, 82, 82);
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  @media only screen and (max-width: 1028px) {
    font-size:40px;
  }
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 1028px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [form,setForm]=useState({
    name:"",
    email:"",
    message:""
  });
  function setform(e){
   const{name,value} =e.target;
   setForm(function(prev){
    return {...prev,[name]:value}
  });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_et4dha3",
        "template_6r2c7a9",
        ref.current,
        "IOVfu7FGo-01DVraz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setForm({
            name:"",
            email:"",
            message:""

          });
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (<section id="contact">
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" value={form.name} onChange={setform}/>
            <Input placeholder="Email" name="email" value={form.email} onChange={setform} />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={5}
              value={form.message}
              onChange={setform}
            />
            <Button type="submit">Send</Button>
           <h2>{success &&
              "Your message has been sent. We'll get back to you soon :)"}</h2>
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
    </section>
  );
};

export default Contact;
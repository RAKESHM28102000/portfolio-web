import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  ${'' /* @media only screen and (max-width: 768px) {
    width: 100%;
  } */}
  @media only screen and (max-width:1028px) {
    width: 100%;
    margin:5px;
  }
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  ${'' /* @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  } */}
  @media only screen and (max-width:1028px) {
    width: 100%;
    padding: 10px;
    margin:10px 0;
    justify-content: center;
  align-items: center;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap:20px;
`;

const Logo = styled.img`
  height: 50px;
  width:50px;
  ${'' /* border-radius:50%; */}
  padding:5px;
  @media only screen and (max-width:1028px) {
    height:70px;
    width:70px;
    margin-left:10px
    ${'' /* display:none; */}
  

  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  ${'' /* @media only screen and (max-width: 768px) {
    display: none;
  } */}
  @media only screen and (max-width:1028px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  &:hover{
    border-bottom:4px solid rgb(94, 224, 0);
  }
`;
// const a = styled.a`
//   cursor: pointer;
//   text-decoration: none;
// `;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  ${'' /* width:50px;
  height:50px;
  border-radius:50%;
  cursor: pointer; */}
  display:none;
  @media only screen and (max-width:1028px) {
    width:70px;
    height:70px;
    padding-left:5px;
    cursor: pointer;
  }
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color:rgb(82, 82, 82);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width:1028px) {
    font-size:50px;
    width:300px;
    cursor: pointer;
    margin:20px;
  }
`;

const Navbar = () => {
  return (<section id="navbar">
    <Section>
      <Container>
        <Links>
          <Logo src="./img/feline-face-outline.png"/>
          <List>
            <ListItem><a href="#home">Home</a></ListItem>
            <ListItem><a href="#who">About</a></ListItem>
            <ListItem><a href="#works">Works</a></ListItem>
            <ListItem><a href="#card">Projects</a></ListItem>
            <ListItem><a href="#contact">Contact</a></ListItem>
          </List>
        </Links>
        <Icons>
          {/* Changed the image due to copyright problems */}
          <Icon src="./img/feline-face-outline.png" />
          <Button><a href="#contact">Hire Now</a></Button>
        </Icons>
      </Container>
    </Section>
    </section>
  );
};

export default Navbar;
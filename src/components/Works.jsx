import React, {useState } from "react";
import styled from "styled-components";
import Workcard from "./Workcard";

const data = [
  "Web Design",
  "Development",
  "Illustration"
];
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size:14px;
  font-weight: 300;
  @media only screen and (max-width: 1028px) {
    margin-bottom:50px;
  }
`;
const Container = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1028px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1028px) {
    padding:15px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size:70px;
  font-weight: bold;
  cursor: pointer;
  color:white;
  -webkit-text-stroke:2px black;
  position: relative;
  @media only screen and (max-width: 1028px) {
    font-size:60px;
    margin:20px 2px;
    padding:10px 2px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    ${'' /* color: pink; */}
    color:black;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.8s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
const Right = styled.div`
  flex: 1;
  display:flex;
  justify-content:center;
  align-items:center;
  
`;
const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (<section id="works">
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web Design" ? (
          <Workcard title="Front-End skills" content="HTML,CSS,JavaScript,Reactjs" image="./img/developer.png"/>
          ) : work === "Development" ? (
            <Workcard title="Database" content="Mongodb" image="./img/database.png"/>
          ) : (
            <Workcard title="Back-End skills" content="NodeJS,ExpressJS" image="./img/security.png"/>
          )}
        </Right>
      </Container>
    </Section>
    </section>
  );
};

export default Works;

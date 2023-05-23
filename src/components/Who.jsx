import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height:100vh;
  scroll-snap-align: center;
  width:1100px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width:1028px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size:60px;
  @media only screen and (max-width:1028px) {
    font-size:70px;
    margin:10px 2px;
    padding:10px 2px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap:20px;
  @media only screen and (max-width:1028px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  gap: 10px;
  @media only screen and (max-width:1028px) {
    display: flex;
  flex-direction:column;
  align-items:center;
  gap: 10px;
   
  }
`;

// const Line = styled.img`
//   height: 5px;
// `;

const Subtitle = styled.h2`
  color: black;
  font-size:20px;
  @media only screen and (max-width:1028px) {
    font-size:35px;
    margin:5px 2px;
    padding:20px 5px;

  }
`;

const Desc = styled.p`
  font-size:20px;
  color:white;
  @media only screen and (max-width:1028px) {
    font-size:30px;
    margin:5px 2px;
    padding:10px 2px;
  }
`;
const Button = styled.button`
  background-color: black;
  color: white;
  font-weight: 500;
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width:1028px) {
    font-size:35px;
    width:260px;
    padding:10px 2px;
    margin:5px;
  }
`;
const Who = () => {
  return (<section id="who">
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube name="RWD" bgcolor={["black"]}/>
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          {/* <Title>Think outside the square space.</Title> */}
          <Title>Hello!</Title>
          <Title>I'M RAKESH</Title>
          <WhatWeDo>
            {/* <Line src="./img/line.png" /> */}
            <Subtitle>A Web Developer passionate about creating interactive applications and experiences on the web. </Subtitle>
          </WhatWeDo>
          <Desc>
          "Work hard,have fun,make history."
          </Desc>
          <Button><a href="https://www.linkedin.com/in/rakesh-m-b67121217/details/projects/" target="blank">See my works</a></Button>
        </Right>
      </Container>
    </Section>
    </section>
  );
};

export default Who;
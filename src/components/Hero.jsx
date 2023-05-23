import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width:1028px) {
    height:120vh;
  }
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width:1100px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width:1028px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap:18px;
  @media only screen and (max-width:1028px) {
    flex: 1;
    align-items: center;
  }
`;
const Title = styled.h1`
  font-size:50px;
  @media only screen and (max-width:1028px) {
    text-align: center;
    font-size:65px;
  }
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap:7px;
`;
const Subtitle = styled.h2`
  color:black;
  @media only screen and (max-width:1028px) {
    font-size:50px;
  }
`;
const Desc = styled.p`
  font-size:20px;
  color:white;
  @media only screen and (max-width:1028px) {
    padding: 10px;
    font-size:35px;
    text-align: center;
  }
`;
const Button = styled.button`
  background-color:black;
  color: white;
  font-weight: 500;
  width: 150px;
  padding:10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width:1028px) {
    padding:10px;
    font-size:30px;
    text-align: center;
    width:250px;}
`;
const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width:1028px) {
    flex: 1;
    width: 100%;
  }
`;
const Img = styled.img`
  width:200px;
  height:200px
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width:1028px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    to {
      transform: translateY(40px);
    }
  }
`;

const Hero = () => {
  return (<section id="home">
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Subtitle>I build things for the web.</Subtitle>
          </WhatWeDo>
          <Desc>
            I enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button><a href="https://www.linkedin.com/in/rakesh-m-b67121217/" target="blank">Learn More</a></Button>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  // color="rgb(82, 82, 82)"
                  color="black"
                  attach="material"
                  distort={0.5}
                  speed={2.5}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/job-seeker.png" />
        </Right>
      </Container>
    </Section>
    </section>
  );
};

export default Hero;
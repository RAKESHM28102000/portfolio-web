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
  font-size:65px;
  @media only screen and (max-width:1028px) {
    font-size:50px;
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
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: rgb(82, 82, 82);
  font-size:50px;
  @media only screen and (max-width:1028px) {
    font-size:40px;
  }
`;

const Desc = styled.p`
  font-size:20px;
  color: lightgray;
  @media only screen and (max-width:1028px) {
    font-size:25px;
  }
`;
// const anchor = styled.a`
//   cursor: pointer;
//   text-decoration: none;
// `;

const Button = styled.button`
  background-color: rgb(82, 82, 82);
  color: white;
  font-weight: 500;
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width:1028px) {
    font-size:25px;
    width:200px;
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
              <Cube name="CREATIVE" bgcolor={["rgb(82, 82, 82)"]}/>
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space.</Title>
          <WhatWeDo>
            {/* <Line src="./img/line.png" /> */}
            <Subtitle>I'm Rakesh</Subtitle>
          </WhatWeDo>
          <Desc>
            a creative designer and developer with a passion for the
            arts.
          </Desc>
          <Button><a href="https://www.linkedin.com/in/rakesh-m-b67121217/details/projects/" target="blank">See my works</a></Button>
        </Right>
      </Container>
    </Section>
    </section>
  );
};

export default Who;
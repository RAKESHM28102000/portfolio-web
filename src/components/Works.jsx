import React, { Suspense, useState } from "react";
import styled from "styled-components";
// import Development from "./Development";
// import ProductDesign from "./ProductDesign";
// import WebDesign from "./WebDesign";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const data = [
  "Web Design",
  "Development",
  "Illustration"
  // "Product Design",
  // "Social Media",
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
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  @media only screen and (max-width: 1028px) {
    font-size:50px;
    margin:5px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    ${'' /* color: pink; */}
    color:#ffff40;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
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
           <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube name="quality" bgcolor={["#2fffff"]}/>
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
          ) : work === "Development" ? (
            <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube name="strong" bgcolor={["#ff7ca4"]}/>
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
          
          ) : (
            <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube name="smart" bgcolor={["#ef44ff"]}/>
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
            
          )}
        </Right>
      </Container>
    </Section>
    </section>
  );
};

export default Works;
  {/* <WebDesign /> <ProductDesign />   <Development />*/}
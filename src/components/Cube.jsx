import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = (props) => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      <boxGeometry  args={[1.5,1.5,1.5]}/>
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={props.bgcolor} />
          <Text ref={textRef} fontSize={1.5} color="#424242">
           {props.name}
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
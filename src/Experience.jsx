import { OrbitControls, useHelper } from "@react-three/drei";
import { SpotLightHelper } from "three";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import Floor from "./Floor";
import WallL from "./WallL";
import WallR from "./WallR";

export default function Experience() {
  const spotLightRef = useRef();
  useHelper(spotLightRef, SpotLightHelper, 1);

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />

      <spotLight
        castShadow={true}
        shadow-normalBias={0.04}
        ref={spotLightRef}
        intensity={1.5}
        position={[0, 8, 4]}
        angle={Math.PI / 4}
        penumbra={0.5}
        shadow-mapSize={[1024, 1024]}
      />
      <ambientLight intensity={0.1} />

      <WallL />
      <WallR />
      <Floor />
    </>
  );
}

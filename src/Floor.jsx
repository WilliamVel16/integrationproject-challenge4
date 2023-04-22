import { MeshReflectorMaterial } from "@react-three/drei";

export default function Floor() {
  return (
    <mesh
      receiveShadow={true}
      position={[0, 0.5, 0]}
      rotation-x={-Math.PI * 0.5}
    >
      <planeGeometry args={[12, 8]} />
      <MeshReflectorMaterial
        resolution={600}
        blur={[1000, 1000]}
        mixBlur={2}
        mirror={0.5}
        color="rgb(193, 154, 107)"
      />
    </mesh>
  );
}

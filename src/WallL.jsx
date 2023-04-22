import { useRef, useState, React } from "react";

export default function WallL() {
  const wlRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const [videoPlane] = useState(() => {
    const vsource = document.createElement("video");
    vsource.src = "static/video.mp4";
    vsource.crossOrigin = "anonymous";
    vsource.muted = true;
    vsource.loop = true;
    return vsource;
  });

  const onHandleClick = (event) => {
    event.stopPropagation();
    if (isPlaying) {
      setIsPlaying(!isPlaying);
      videoPlane.pause();
    } else {
      setIsPlaying(!isPlaying);
      videoPlane.play();
    }
    //setIsPlaying(true);
  };

  return (
    <>
      <group onPointerUp={onHandleClick}>
        <mesh
          receiveShadow
          position={[-6, 2, 0]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <planeGeometry args={[8, 3]} />
          <meshBasicMaterial toneMapped={false}>
            <videoTexture attach="map" args={[videoPlane]} ref={wlRef} />
          </meshBasicMaterial>
        </mesh>
      </group>
    </>
  );
}

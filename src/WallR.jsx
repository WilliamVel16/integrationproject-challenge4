import { useState, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function WallR(props) {
  const wrRef = useRef();
  const img1 = "/static/a.jpg";
  const img2 = "/static/b.jpg";

  const imgTexture1 = useLoader(TextureLoader, img1);
  const imgTexture2 = useLoader(TextureLoader, img2);

  const [img, setImg] = useState(imgTexture1);

  const onHandleClick = (event) => {
    event.stopPropagation();
    if (img === imgTexture1) {
      setImg(imgTexture2);
    } else {
      setImg(imgTexture1);
    }
  };

  return (
    <>
      <mesh
        {...props}
        receiveShadow
        ref={wrRef}
        position={[6, 2, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        onClick={console.log(img)}
        onDoubleClick={onHandleClick}
      >
        <planeGeometry args={[8, 3]} />
        <meshStandardMaterial map={img} color={"white"} />
      </mesh>
    </>
  );
}

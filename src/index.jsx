import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { StrictMode } from "react";
import { Suspense } from "react";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const cameraSettings = {
  fov: 60,
  near: 0.1,
  far: 180,
  position: [0, 10, 20],
};
root.render(
  <StrictMode>
    <Canvas camera={cameraSettings} shadows={true}>
      <Suspense>
        <Experience />
      </Suspense>
    </Canvas>
  </StrictMode>
);

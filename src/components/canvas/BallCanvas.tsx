import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { Preload, OrbitControls } from "@react-three/drei";

import Ball from "./Ball";
import CanvasLoader from "../Loader";

const BallCanvas = ({ icon }: { icon: string }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

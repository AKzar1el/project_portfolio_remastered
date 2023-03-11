import React, { Suspense } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import CanvasLoader from "../Loader";

function TheModel() {
  let mixer = null;
  const { scene, animations } = useLoader(GLTFLoader, "./desktop_pc/scene.gltf");

  mixer = new THREE.AnimationMixer(scene);

  void mixer.clipAction(animations[0]).play();
  
  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return <primitive object={scene} rotation={[0,6,0.1]} scale={0.008} position={[0, -3, 0]} />;
}

export default function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 10, 1] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 1.5}
          />
          <TheModel />
        </Suspense>
      </Canvas>
    </>
  );
}

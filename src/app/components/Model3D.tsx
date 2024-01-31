/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
'use client';

import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model: React.FC = () => {
  const gltf = useGLTF('/spot_light.glb');
  const modelRef = useRef(gltf.scene);
  
  if (modelRef.current) {
    modelRef.current.position.set(0, -0.5, 4);
    modelRef.current.rotation.y = - Math.PI / 6;
    modelRef.current.rotation.x =  Math.PI / 8;
  }

  return (
    <>
      <primitive object={gltf.scene} ref={modelRef}/>
    </>
  );
};

export default function Model3D() {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight
        position={[0, -0.5, 4]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-20}
        shadow-camera-right={40}
        shadow-camera-top={30}
      />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      {/* <OrbitControls onPointerMove={}/> */}
    </Canvas>
  );
}

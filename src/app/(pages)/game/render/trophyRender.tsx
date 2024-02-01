import React from 'react';
import { useGLTF } from '@react-three/drei';

export const Trophy3DModel: React.FC = () => {

  const gltf = useGLTF('/door/trophy.glb');
  gltf.scene.position.set(0,0,0);

  return (
    <group >
      <primitive object={gltf.scene}/>
    </group>
  );
};